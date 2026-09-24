<?php
/**
 * HairMaxx Scanner — waitlist submission proxy.
 *
 * Runs on Hostinger (PHP). Keeps the Airtable token server-side so it never
 * ships to the browser. Writes leads to the "HairMaxx Waitlist" table in the
 * same Airtable base the rest of the site already uses.
 *
 * Token resolution (first hit wins):
 *   1. Environment variable AIRTABLE_TOKEN  (set in Hostinger hPanel if available)
 *   2. api/config.php  ->  <?php return ['AIRTABLE_TOKEN' => 'pat...'];
 *
 * Responses (always 200 unless the request itself is malformed):
 *   { "status": "ok" }         lead stored
 *   { "status": "duplicate" }  number already on the list
 *   { "status": "error", "message": "..." }  something failed (safe message)
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
// Same-origin only — no CORS headers, so browsers won't let other sites POST here.

const AIRTABLE_BASE  = 'appMkbkolqSWG4s3Q';
const AIRTABLE_TABLE = 'HairMaxx Waitlist';

function respond($payload, $httpCode = 200) {
    http_response_code($httpCode);
    echo json_encode($payload);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    respond(['status' => 'error', 'message' => 'Method not allowed'], 405);
}

// --- Resolve the Airtable token ------------------------------------------------
$token = getenv('AIRTABLE_TOKEN') ?: '';
if ($token === '' && is_readable(__DIR__ . '/config.php')) {
    $cfg = include __DIR__ . '/config.php';
    if (is_array($cfg) && !empty($cfg['AIRTABLE_TOKEN'])) {
        $token = $cfg['AIRTABLE_TOKEN'];
    }
}
if ($token === '') {
    error_log('[waitlist] AIRTABLE_TOKEN not configured');
    respond(['status' => 'error', 'message' => 'Server not configured. Please try again later.'], 500);
}

// --- Parse + validate input ----------------------------------------------------
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    respond(['status' => 'error', 'message' => 'Invalid request.'], 400);
}

$name    = trim((string)($data['name']    ?? ''));
$phone   = trim((string)($data['phone']   ?? ''));   // expected E.164, e.g. +919876543210
$country = trim((string)($data['country'] ?? ''));
$optIn   = !empty($data['optIn']);
$source  = trim((string)($data['source']  ?? 'scanner-waitlist'));

if (mb_strlen($name) < 2) {
    respond(['status' => 'error', 'message' => 'Please enter your name.'], 422);
}
if (!preg_match('/^\+[1-9]\d{6,14}$/', $phone)) {
    respond(['status' => 'error', 'message' => 'Please enter a valid phone number.'], 422);
}
if (!$optIn) {
    // The UI enforces this, but never trust the client.
    respond(['status' => 'error', 'message' => 'Please tick the WhatsApp opt-in box to join.'], 422);
}

$nowIso = gmdate('Y-m-d\TH:i:s\Z'); // trusted server time (UTC)

// --- Duplicate check -----------------------------------------------------------
$formula   = '{Phone}="' . $phone . '"';
$listUrl   = 'https://api.airtable.com/v0/' . AIRTABLE_BASE . '/' . rawurlencode(AIRTABLE_TABLE)
           . '?' . http_build_query(['filterByFormula' => $formula, 'maxRecords' => 1]);

$ch = curl_init($listUrl);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => ['Authorization: Bearer ' . $token],
    CURLOPT_TIMEOUT        => 15,
]);
$listRes  = curl_exec($ch);
$listCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($listRes !== false && $listCode === 200) {
    $listJson = json_decode($listRes, true);
    if (!empty($listJson['records'])) {
        respond(['status' => 'duplicate']);
    }
}
// If the lookup failed we fall through and still try to create the record —
// better a possible duplicate row than a lost lead.

// --- Create the record ---------------------------------------------------------
$fields = [
    'Name'              => $name,
    'Phone'             => $phone,
    'Country'           => $country,
    'WhatsApp Opt-In'   => true,
    'Consent Timestamp' => $nowIso,
    'Source'            => $source !== '' ? $source : 'scanner-waitlist',
    'Created'           => $nowIso,
];

$createUrl = 'https://api.airtable.com/v0/' . AIRTABLE_BASE . '/' . rawurlencode(AIRTABLE_TABLE);
$ch = curl_init($createUrl);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . $token,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS     => json_encode(['fields' => $fields, 'typecast' => true]),
    CURLOPT_TIMEOUT        => 15,
]);
$createRes  = curl_exec($ch);
$createCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($createRes !== false && $createCode >= 200 && $createCode < 300) {
    respond(['status' => 'ok']);
}

error_log('[waitlist] airtable create failed: ' . $createCode . ' ' . substr((string)$createRes, 0, 500));
respond(['status' => 'error', 'message' => 'Could not save right now. Please try again.'], 502);

<?php
/**
 * Copy this file to  config.php  (same folder) on the server and paste your
 * Airtable Personal Access Token. config.php is gitignored and is NOT wiped by
 * deploys (the FTP action runs with dangerous-clean-slate: false), so you set
 * it once.
 *
 * The token needs scopes: data.records:read + data.records:write, and access
 * to the base appMkbkolqSWG4s3Q.
 *
 * Alternatively, set an AIRTABLE_TOKEN environment variable in Hostinger hPanel
 * and you can skip config.php entirely.
 */
return [
    'AIRTABLE_TOKEN' => 'patXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
];

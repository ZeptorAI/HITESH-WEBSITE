import { useState, useEffect } from 'react'

const PAGES = ['hair', 'height', 'beard', 'skin', 'bundle']
const MONTHS = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
const RECENT_KEY = 'hm_recent_slugs'
const MAX_RECENT = 10
const BASE_URL = 'https://hiteshmaxxed.com'

function todayIso() {
  const d = new Date()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mm}-${dd}`
}

function formatDate(isoDate) {
  const d = new Date(isoDate + 'T00:00:00')
  const yy = String(d.getFullYear()).slice(2)
  const mon = MONTHS[d.getMonth()]
  const day = String(d.getDate()).padStart(2, '0')
  return `${yy}${mon}${day}`
}

const IG_RE = /instagram\.com\/(?:reels?|p)\/([A-Za-z0-9_-]+)/

function parseReel(raw) {
  const igMatch = IG_RE.exec(raw)
  if (igMatch) {
    return { code: igMatch[1].toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 20), fromIg: true }
  }
  return { code: raw.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 20), fromIg: false }
}

function buildSlug(page, dateLabel, reel) {
  if (!page || !dateLabel || !reel) return ''
  return `htsh-${page}-${dateLabel}-${reel}`
}

function buildUrl(slug) {
  return `${BASE_URL}/r/${slug}`
}

function useCopy() {
  const [copied, setCopied] = useState(null)
  const copy = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    }).catch(() => {})
  }
  return { copied, copy }
}

function CopyButton({ text, label, id, copied, copy }) {
  const active = copied === id
  return (
    <button
      type="button"
      onClick={() => copy(text, id)}
      className={`flex-1 text-sm font-semibold py-2.5 rounded-lg border transition-colors ${
        active
          ? 'bg-gold/20 border-gold text-gold'
          : 'bg-bg border-border text-text-secondary hover:border-gold/40 hover:text-text-primary'
      }`}
    >
      {active ? 'Copied!' : label}
    </button>
  )
}

export default function SlugGenerator() {
  const [page, setPage] = useState('hair')
  const [reelRaw, setReelRaw] = useState('')
  const [date, setDate] = useState(todayIso())
  const [result, setResult] = useState(null)
  const [recent, setRecent] = useState([])
  const { copied, copy } = useCopy()

  useEffect(() => {
    try {
      setRecent(JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'))
    } catch {}
  }, [])

  const { code: reel, fromIg } = parseReel(reelRaw)
  const dateLabel = date ? formatDate(date) : ''
  const slug = buildSlug(page, dateLabel, reel)
  const url = slug ? buildUrl(slug) : ''

  const generate = (e) => {
    e.preventDefault()
    if (!slug) return
    const entry = { slug, url, page, generatedAt: new Date().toISOString() }
    setResult(entry)
    const updated = [entry, ...recent.filter(r => r.slug !== slug)].slice(0, MAX_RECENT)
    setRecent(updated)
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(updated)) } catch {}
  }

  return (
    <div className="min-h-screen bg-bg px-4 py-10">
      <div className="w-full max-w-[480px] mx-auto flex flex-col gap-6">

        {/* Header */}
        <div>
          <h1 className="font-display font-bold text-2xl text-text-primary">
            Slug Generator<span className="text-gold">.</span>
          </h1>
          <p className="text-text-muted text-sm mt-1">Create per-reel tracking links.</p>
        </div>

        {/* Form */}
        <form onSubmit={generate} className="bg-surface border border-border rounded-2xl p-5 flex flex-col gap-5">

          {/* Redirect destination */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest">
              Redirect to
            </label>
            <select
              value={page}
              onChange={e => setPage(e.target.value)}
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text-primary outline-none focus:border-gold/60 transition-colors appearance-none"
            >
              {PAGES.map(p => (
                <option key={p} value={p} className="bg-bg">
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </option>
              ))}
            </select>
            <p className="text-xs text-text-muted">Visitor lands on this page after clicking the link.</p>
          </div>

          {/* Reel name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest">
              Reel name or URL
            </label>
            <input
              type="text"
              placeholder="Paste IG reel URL or type a name"
              value={reelRaw}
              onChange={e => setReelRaw(e.target.value)}
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-gold/60 transition-colors"
            />
            {reelRaw && (
              <p className="text-xs text-text-muted">
                {fromIg ? 'Extracted code:' : 'Cleaned:'}{' '}
                <span className="font-mono text-gold">{reel || '—'}</span>
                {fromIg && <span className="ml-2 text-gold/60">from Instagram URL</span>}
                {!fromIg && <span className="ml-2">({reel.length}/20)</span>}
              </p>
            )}
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-text-secondary uppercase tracking-widest">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text-primary outline-none focus:border-gold/60 transition-colors"
            />
            {dateLabel && (
              <p className="text-xs text-text-muted">
                Formatted: <span className="font-mono text-gold">{dateLabel}</span>
              </p>
            )}
          </div>

          {/* Live preview */}
          {slug && (
            <div className="bg-bg border border-border-2 rounded-xl px-4 py-3">
              <p className="text-xs text-text-muted mb-1">Preview</p>
              <p className="font-mono text-sm text-gold break-all leading-relaxed">{slug}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={!reel}
            className={`w-full font-bold text-sm py-3.5 rounded-xl transition-colors ${
              reel
                ? 'bg-gold hover:bg-gold-dark text-bg active:scale-[0.98]'
                : 'bg-gold/25 text-bg/40 cursor-not-allowed'
            }`}
          >
            Generate
          </button>
        </form>

        {/* Result */}
        {result && (
          <div className="bg-surface border border-gold/30 rounded-2xl p-5 flex flex-col gap-4">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-widest">Generated</p>

            <div>
              <p className="text-xs text-text-muted mb-1">Slug</p>
              <p className="font-mono text-base text-gold break-all leading-relaxed">{result.slug}</p>
            </div>

            <div>
              <p className="text-xs text-text-muted mb-1">URL</p>
              <p className="font-mono text-sm text-text-primary break-all leading-relaxed">{result.url}</p>
            </div>

            <div className="flex gap-2">
              <CopyButton text={result.slug} label="Copy slug" id="slug" copied={copied} copy={copy} />
              <CopyButton text={result.url}  label="Copy URL"  id="url"  copied={copied} copy={copy} />
            </div>
          </div>
        )}

        {/* Recent slugs */}
        {recent.length > 0 && (
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-widest">Recent</p>
            <div className="flex flex-col gap-2">
              {recent.map(r => (
                <div
                  key={r.slug}
                  className="bg-surface border border-border rounded-xl px-4 py-3 flex items-center gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-sm text-text-primary truncate">{r.slug}</p>
                    <p className="text-xs text-text-muted mt-0.5 capitalize">{r.page}</p>
                  </div>
                  <CopyButton
                    text={buildUrl(r.slug)}
                    label="Copy"
                    id={`r-${r.slug}`}
                    copied={copied}
                    copy={copy}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Check, Plus } from "lucide-react"

const SUPPORT_PHONE = "+919814508715"

// ── Product map ───────────────────────────────────────────────────────────────
const PRODUCTS = {
  hair:   { name: "Hair Fixed",    others: ["Beard Maxxed", "Height Maxxed"] },
  beard:  { name: "Beard Maxxed",  others: ["Hair Fixed",   "Height Maxxed"] },
  height: { name: "Height Maxxed", others: ["Hair Fixed",   "Beard Maxxed"]  },
}

export default function ThankYouPage() {
  const [searchParams] = useSearchParams()
  const rawProduct = searchParams.get("product") || "hair"
  const productKey = PRODUCTS[rawProduct] ? rawProduct : "hair"
  const userName = searchParams.get("name") || "friend"
  const product = PRODUCTS[productKey]

  const [timerDisplay, setTimerDisplay] = useState("15:00")

  // Real persistent countdown — survives page refresh
  useEffect(() => {
    const TIMER_KEY = "upsell_expiry_" + productKey
    let expiry = parseInt(localStorage.getItem(TIMER_KEY) || "0")

    if (!expiry || expiry < Date.now()) {
      expiry = Date.now() + 15 * 60 * 1000
      localStorage.setItem(TIMER_KEY, String(expiry))
    }

    const tick = () => {
      const remaining = expiry - Date.now()
      if (remaining <= 0) {
        setTimerDisplay("EXPIRED")
        clearInterval(interval)
        return
      }
      const mins = Math.floor(remaining / 60000)
      const secs = Math.floor((remaining % 60000) / 1000)
      setTimerDisplay(
        String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0")
      )
    }

    tick() // run immediately so there's no 1-second blank
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [productKey])

  return (
    <>
      {/* Keyframe animations */}
      <style>{`
        @keyframes ty-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
        @keyframes ty-fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ty-fadein  { animation: ty-fadeInUp 700ms cubic-bezier(0.22,1,0.36,1) both; }
        .ty-dot     { animation: ty-pulse 1.8s ease-in-out infinite; }
        .ty-pdf-add { transition: all 0.2s ease; }
        .ty-pdf-add:hover { transform: translateX(4px); border-color: rgba(212,175,55,0.45) !important; }
        .ty-cta { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .ty-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(212,175,55,0.35); }

      `}</style>

      <div
        className="ty-fadein"
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at 20% 0%, rgba(212,175,55,0.05) 0%, transparent 40%)," +
            "radial-gradient(circle at 80% 100%, rgba(212,175,55,0.03) 0%, transparent 50%)," +
            "#0A0A0A",
          color: "#F5F5F5",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ maxWidth: 540, margin: "0 auto", padding: "52px 20px 88px" }}>

          {/* ── 1. Payment Confirmed Pill ── */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.22)",
              borderRadius: 999, padding: "7px 16px",
            }}>
              <div style={{
                width: 18, height: 18, borderRadius: "50%",
                background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.5)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Check size={11} strokeWidth={3} color="#4ADE80" />
              </div>
              <span style={{
                fontSize: 11, fontWeight: 600, letterSpacing: "0.13em", color: "#4ADE80",
              }}>
                PAYMENT CONFIRMED
              </span>
            </div>
          </div>

          {/* ── 2. Hero ── */}
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <p style={{
              fontFamily: '"Instrument Serif", serif', fontStyle: "italic",
              color: "#71717A", fontSize: 18, margin: "0 0 14px",
            }}>
              Welcome to the brotherhood,
            </p>
            <h1 style={{
              fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800,
              fontSize: "clamp(34px, 8vw, 40px)", lineHeight: 1.1,
              letterSpacing: "-0.03em", margin: "0 0 2px", color: "#F5F5F5",
            }}>
              {userName}.
            </h1>
            <h1 style={{
              fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800,
              fontSize: "clamp(34px, 8vw, 40px)", lineHeight: 1.1,
              letterSpacing: "-0.03em", color: "#D4AF37", margin: "0 0 20px",
            }}>
              You are in.
            </h1>
            <p style={{ color: "#A1A1AA", fontSize: 16, lineHeight: 1.6, margin: 0 }}>
              Your{" "}
              <span style={{ color: "#F5F5F5", fontWeight: 600 }}>{product.name}</span>
              {" "}PDF is on its way.
            </p>
          </div>

          {/* ── 3. Delivery Channels ── */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 12, marginBottom: 14,
          }}>
            {[
              { emoji: "💬", label: "WHATSAPP" },
              { emoji: "✉️", label: "EMAIL" },
            ].map((ch) => (
              <div key={ch.label} style={{
                background: "#141414", border: "1px solid #1F1F1F",
                borderRadius: 14, padding: "20px 16px", textAlign: "center",
              }}>
                <div style={{ fontSize: 30, marginBottom: 10 }}>{ch.emoji}</div>
                <div style={{
                  fontSize: 10, fontWeight: 600, letterSpacing: "0.13em",
                  color: "#52525B", marginBottom: 12,
                }}>
                  {ch.label}
                </div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(74,222,128,0.07)", border: "1px solid rgba(74,222,128,0.18)",
                  borderRadius: 999, padding: "5px 12px",
                }}>
                  <span className="ty-dot" style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#4ADE80", display: "block", flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: "#4ADE80" }}>Sent</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{
            fontSize: 13, color: "#52525B", textAlign: "center",
            lineHeight: 1.65, marginBottom: 44,
          }}>
            Open either to download. Save the WhatsApp number — Hitesh sends weekly tips,
            protocols, and product drops there.
          </p>

          {/* ── 4. Editorial Separator ── */}
          <div style={{
            display: "flex", alignItems: "center", gap: 16, marginBottom: 36,
          }}>
            <div style={{
              flex: 1, height: 1,
              background: "linear-gradient(90deg, transparent, #2A2A2A)",
            }} />
            <span style={{
              fontFamily: '"Instrument Serif", serif', fontStyle: "italic",
              color: "#52525B", fontSize: 14, whiteSpace: "nowrap",
            }}>
              one more thing
            </span>
            <div style={{
              flex: 1, height: 1,
              background: "linear-gradient(90deg, #2A2A2A, transparent)",
            }} />
          </div>

          {/* ── 5. Upsell Card ── */}
          <div style={{
            background: "#121212", border: "1px solid #1F1F1F", borderRadius: 22,
            padding: "32px 26px", marginBottom: 20, position: "relative", overflow: "hidden",
          }}>
            {/* Gold top-edge line */}
            <div style={{
              position: "absolute", top: 0, left: "8%", right: "8%", height: 1,
              background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }} />
            {/* Soft gold glow — top right */}
            <div style={{
              position: "absolute", top: -80, right: -80, width: 240, height: 240,
              background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />

            {/* a. One-time offer tag */}
            <div style={{ marginBottom: 22 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.18)",
                borderRadius: 999, padding: "6px 14px",
              }}>
                <span className="ty-dot" style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#D4AF37", display: "block", flexShrink: 0,
                }} />
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "#D4AF37",
                }}>
                  ONE-TIME OFFER
                </span>
              </div>
            </div>

            {/* b. Title */}
            <h2 style={{
              fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800,
              fontSize: "clamp(27px, 6vw, 32px)", lineHeight: 1.18,
              letterSpacing: "-0.02em", margin: "0 0 14px", color: "#F5F5F5",
            }}>
              Don't fix just one thing.<br />
              <span style={{ color: "#D4AF37" }}>Fix all three.</span>
            </h2>

            {/* c. Subtitle */}
            <p style={{
              color: "#A1A1AA", fontSize: 15, lineHeight: 1.65, margin: "0 0 24px",
            }}>
              Most guys come back in 2 weeks and buy the other two anyway. Skip the wait — and the regret.
            </p>

            {/* d. Price Block */}
            <div style={{
              background: "#0D0D0D", border: "1px solid #1A1A1A", borderRadius: 14,
              padding: "22px 16px", textAlign: "center", marginBottom: 22,
            }}>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 10, marginBottom: 6,
              }}>
                <span style={{
                  color: "#52525B", fontSize: 17, textDecoration: "line-through",
                  fontFamily: '"JetBrains Mono", monospace',
                }}>
                  ₹598
                </span>
                <span style={{
                  border: "1px solid rgba(212,175,55,0.35)", borderRadius: 6,
                  padding: "2px 9px", fontSize: 11, fontWeight: 700,
                  color: "#D4AF37", letterSpacing: "0.07em",
                }}>
                  SAVE ₹299
                </span>
              </div>
              <div style={{
                fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800,
                fontSize: "clamp(48px, 11vw, 56px)", lineHeight: 1,
                color: "#D4AF37", letterSpacing: "-0.03em",
              }}>
                ₹299
              </div>
            </div>

            {/* e. PDF List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {/* Owned item */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "rgba(74,222,128,0.04)", border: "1px solid rgba(74,222,128,0.14)",
                borderRadius: 10, padding: "13px 14px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                    background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.28)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Check size={13} strokeWidth={3} color="#4ADE80" />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#F5F5F5" }}>
                    {product.name}
                  </span>
                </div>
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: "#4ADE80",
                  background: "rgba(74,222,128,0.09)", border: "1px solid rgba(74,222,128,0.18)",
                  borderRadius: 6, padding: "3px 9px",
                }}>
                  YOURS
                </span>
              </div>

              {/* Adding items */}
              {product.others.map((pdfName, idx) => (
                <div key={pdfName} className="ty-pdf-add" style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  background: idx === 1 ? "rgba(74,222,128,0.02)" : "rgba(212,175,55,0.02)",
                  border: idx === 1 ? "1px solid rgba(74,222,128,0.12)" : "1px solid rgba(212,175,55,0.09)",
                  borderRadius: 10, padding: "13px 14px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                      background: idx === 1 ? "rgba(74,222,128,0.08)" : "rgba(212,175,55,0.08)",
                      border: idx === 1 ? "1px solid rgba(74,222,128,0.22)" : "1px solid rgba(212,175,55,0.22)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Plus size={13} strokeWidth={3} color={idx === 1 ? "#4ADE80" : "#D4AF37"} />
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "#A1A1AA" }}>
                      {pdfName}
                    </span>
                  </div>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                    color: idx === 1 ? "#4ADE80" : "#D4AF37",
                    background: idx === 1 ? "rgba(74,222,128,0.09)" : "rgba(212,175,55,0.07)",
                    border: idx === 1 ? "1px solid rgba(74,222,128,0.18)" : "1px solid rgba(212,175,55,0.18)",
                    borderRadius: 6, padding: "3px 9px",
                  }}>
                    {idx === 1 ? "FREE" : "ADD"}
                  </span>
                </div>
              ))}
            </div>

            {/* f. CTA Button */}
            <a
              href={`/r/htsh-ty-${productKey}-upsell`}
              className="ty-cta"
              style={{
                display: "block", width: "100%", padding: "17px",
                textAlign: "center", background: "#D4AF37", borderRadius: 12,
                color: "#0A0A0A", fontFamily: '"Bricolage Grotesque", sans-serif',
                fontWeight: 700, fontSize: 17, textDecoration: "none",
                cursor: "pointer", boxSizing: "border-box",
              }}
            >
              Get Both — ₹299 (2nd Guide FREE) →
            </a>

            {/* g. Countdown */}
            <div style={{ textAlign: "center", marginTop: 18 }}>
              <p style={{ fontSize: 14, color: "#A1A1AA", margin: "0 0 6px" }}>
                Offer expires in{" "}
                <span style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  color: "#D4AF37", fontVariantNumeric: "tabular-nums", fontWeight: 600,
                }}>
                  {timerDisplay}
                </span>
              </p>
              <p style={{
                fontFamily: '"Instrument Serif", serif', fontStyle: "italic",
                fontSize: 13, color: "#3F3F46", margin: 0,
              }}>
                Only available on this page. Close it and the price goes back to ₹598.
              </p>
            </div>
          </div>

          {/* ── 6. Footer ── */}
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#52525B", fontSize: 13, margin: "0 0 6px" }}>
              Questions about your order?{" "}
              <a
                href={"https://wa.me/" + SUPPORT_PHONE.replace(/\D/g, "")}
                style={{
                  color: "#71717A", textDecoration: "underline",
                  textDecorationColor: "rgba(113,113,122,0.35)",
                }}
              >
                WhatsApp +91-98145-08715
              </a>
            </p>
            <p style={{ color: "#3F3F46", fontSize: 12, margin: 0 }}>
              Hitesh — The Brotherhood
            </p>
          </div>

        </div>
      </div>
    </>
  )
}

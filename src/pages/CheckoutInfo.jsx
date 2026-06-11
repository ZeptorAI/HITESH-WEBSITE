import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'
import { trackInitiateCheckout, PRODUCT_MAP } from '../utils/metaPixel'
import { RAZORPAY_LINKS } from '../components/ProductPage'

export default function CheckoutInfo() {
  const [searchParams] = useSearchParams()
  const product = searchParams.get('product') || 'hair'

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [nameError, setNameError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [loading, setLoading] = useState(false)

  const validateName = (v) => {
    if (!v.trim()) return 'Name is required'
    if (v.trim().length < 2) return 'Enter your full name'
    return ''
  }

  const validatePhone = (v) => {
    if (!v) return 'WhatsApp number is required'
    if (v.length !== 10) return 'Enter a valid 10-digit number'
    return ''
  }

  const handlePhoneInput = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
    setPhone(digits)
    if (phoneError) setPhoneError(validatePhone(digits))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nErr = validateName(name)
    const pErr = validatePhone(phone)
    setNameError(nErr)
    setPhoneError(pErr)
    if (nErr || pErr) return

    setLoading(true)

    const productInfo = PRODUCT_MAP[product]
    if (productInfo) trackInitiateCheckout(productInfo)

    const link = RAZORPAY_LINKS[product] || RAZORPAY_LINKS['hair']
    window.location.href = link
  }

  return (
    <div className="min-h-screen bg-bg text-text-primary flex flex-col">
      <div className="px-5 pt-6">
        <Link
          to={`/${product}`}
          className="inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary transition-colors text-sm"
        >
          <ArrowLeft size={15} />
          Back
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-[420px]">

          <h1 className="font-display font-bold text-[2.5rem] sm:text-[3rem] tracking-tighter leading-[1.1]">
            Almost there<span className="text-gold">.</span>
          </h1>
          <p className="mt-3 text-text-secondary text-[15px] leading-relaxed">
            We'll send your guide to WhatsApp in 30 seconds.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5" noValidate>

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  if (nameError) setNameError(validateName(e.target.value))
                }}
                onBlur={() => setNameError(validateName(name))}
                className={`w-full bg-surface border rounded-[8px] px-4 py-3.5 text-[15px] text-text-primary placeholder:text-text-muted outline-none transition-colors ${
                  nameError ? 'border-red-500' : 'border-border focus:border-gold/60'
                }`}
              />
              {nameError && (
                <p className="mt-1.5 text-[12px] text-red-400">{nameError}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <div className={`flex items-center bg-surface border rounded-[8px] overflow-hidden transition-colors ${
                phoneError ? 'border-red-500' : 'border-border focus-within:border-gold/60'
              }`}>
                <span className="px-4 py-3.5 text-[15px] text-text-muted border-r border-border shrink-0 select-none">
                  +91
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="WhatsApp number"
                  value={phone}
                  onChange={handlePhoneInput}
                  onBlur={() => setPhoneError(validatePhone(phone))}
                  maxLength={10}
                  className="flex-1 bg-transparent px-4 py-3.5 text-[15px] text-text-primary placeholder:text-text-muted outline-none"
                />
              </div>
              {phoneError && (
                <p className="mt-1.5 text-[12px] text-red-400">{phoneError}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`mt-1 flex items-center justify-center gap-2 w-full font-bold text-[15px] px-5 py-4 rounded-[8px] transition-all active:scale-[0.98] ${
                loading
                  ? 'bg-gold/60 text-bg cursor-not-allowed'
                  : 'bg-gold hover:bg-gold-dark text-bg'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Redirecting…
                </>
              ) : (
                <>
                  Fix my hair <ArrowRight size={16} />
                </>
              )}
            </button>

            <p className="text-center text-[12px] text-text-muted">
              🔒 Secure payment · 💳 UPI / Cards / Wallets
            </p>
          </form>

        </div>
      </div>
    </div>
  )
}

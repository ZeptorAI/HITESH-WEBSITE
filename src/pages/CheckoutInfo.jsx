import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'

export default function CheckoutInfo() {
  const [searchParams] = useSearchParams()
  const product = searchParams.get('product') || 'hair'
  const amount  = parseInt(searchParams.get('amount') || '100', 10)

  const [name,       setName]       = useState('')
  const [phone,      setPhone]      = useState('')
  const [nameError,  setNameError]  = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [error,      setError]      = useState('')
  const [loading,    setLoading]    = useState(false)

  const validateName  = (v) => (!v.trim() || v.trim().length < 2) ? 'Enter your full name' : ''
  const validatePhone = (v) => (!v || v.length !== 10)             ? 'Enter a valid 10-digit number' : ''

  const handlePhoneInput = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
    setPhone(digits)
    if (phoneError) setPhoneError(validatePhone(digits))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const nErr = validateName(name)
    const pErr = validatePhone(phone)
    setNameError(nErr)
    setPhoneError(pErr)
    if (nErr || pErr) return

    setLoading(true)
    setError('')

    try {
      if (!window.Razorpay) {
        throw new Error('Payment system not ready. Please refresh and try again.')
      }

      const res = await fetch('https://hiteshmaxxed.com/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          product,
          customer: { name: name.trim(), phone: '+91' + phone },
        }),
      })

      const orderData = await res.json()
      if (!orderData.orderId) {
        throw new Error(orderData.error || 'Failed to create order')
      }

      // Meta Pixel — InitiateCheckout
      if (window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
          value: orderData.amount / 100,
          currency: 'INR',
          content_name: product,
        })
      }

      const options = {
        key:      orderData.keyId,
        amount:   orderData.amount,
        currency: orderData.currency || 'INR',
        order_id: orderData.orderId,
        name:     'Hitesh Maxxed',
        description: `${product.charAt(0).toUpperCase() + product.slice(1)} Maxx Guide`,
        prefill: {
          name:    name.trim(),
          contact: '+91' + phone,
          email:   `${phone}@hiteshmaxxed.com`,
        },
        theme: { color: '#D4AF37' },
        handler(response) {
          // Meta Pixel — Purchase
          if (window.fbq) {
            window.fbq('track', 'Purchase', {
              value:        orderData.amount / 100,
              currency:     'INR',
              content_name: product,
            })
          }
          window.location.href =
            `/thank-you?product=${product}&order=${response.razorpay_order_id}&payment=${response.razorpay_payment_id}`
        },
        modal: {
          ondismiss() { setLoading(false) },
        },
      }

      const rzp = new window.Razorpay(options)
      rzp.on('payment.failed', (response) => {
        setError('Payment failed: ' + (response.error?.description || 'Please try again'))
        setLoading(false)
      })
      rzp.open()

    } catch (err) {
      console.error('Checkout error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setLoading(false)
    }
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
              {nameError && <p className="mt-1.5 text-[12px] text-red-400">{nameError}</p>}
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
              {phoneError && <p className="mt-1.5 text-[12px] text-red-400">{phoneError}</p>}
            </div>

            {/* General error */}
            {error && <p className="text-[13px] text-red-400 text-center">{error}</p>}

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
                  <Loader2 size={20} className="animate-spin" />
                  Opening payment…
                </>
              ) : (
                <>Fix my hair <ArrowRight size={16} /></>
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

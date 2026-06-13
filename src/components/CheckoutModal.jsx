import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Loader2 } from 'lucide-react'
import { useRazorpay } from '../hooks/useRazorpay'

export default function CheckoutModal({ open, product, amount, onClose }) {
  const [name,       setName]       = useState('')
  const [phone,      setPhone]      = useState('')
  const [nameError,  setNameError]  = useState('')
  const [phoneError, setPhoneError] = useState('')
  const { pay, loading, error, setError } = useRazorpay()

  useEffect(() => {
    if (!open) {
      setName(''); setPhone('')
      setNameError(''); setPhoneError('')
      setError('')
    }
  }, [open, setError])

  const validateName  = (v) => (!v.trim() || v.trim().length < 2) ? 'Enter your full name' : ''
  const validatePhone = (v) => (!v || v.length !== 10) ? 'Enter a valid 10-digit number' : ''

  const handlePhoneInput = (e) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
    setPhone(digits)
    if (phoneError) setPhoneError(validatePhone(digits))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nErr = validateName(name)
    const pErr = validatePhone(phone)
    setNameError(nErr); setPhoneError(pErr)
    if (nErr || pErr) return
    pay({ product, amount, name: name.trim(), phone })
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="co-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[102]"
          />
          <motion.div
            key="co-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[103] flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="pointer-events-auto relative w-full max-w-[420px] bg-[#0D0D0D] border border-gold/35 rounded-[20px] p-7 overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.95)]">
              <div className="absolute top-0 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-text-muted hover:text-white transition-colors"
              >
                <X size={15} />
              </button>

              <h2 className="font-display font-bold text-[1.6rem] tracking-tighter leading-[1.2] mb-1.5 text-text-primary">
                Almost there<span className="text-gold">.</span>
              </h2>
              <p className="text-text-secondary text-[13px] mb-6 leading-relaxed">
                We'll send your guide to WhatsApp in 30 seconds.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
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
                    className={`w-full bg-surface border rounded-[8px] px-4 py-3 text-[14px] text-text-primary placeholder:text-text-muted outline-none transition-colors ${
                      nameError ? 'border-red-500' : 'border-border focus:border-gold/60'
                    }`}
                  />
                  {nameError && <p className="mt-1 text-[11px] text-red-400">{nameError}</p>}
                </div>

                <div>
                  <div className={`flex items-center bg-surface border rounded-[8px] overflow-hidden transition-colors ${
                    phoneError ? 'border-red-500' : 'border-border focus-within:border-gold/60'
                  }`}>
                    <span className="px-3 py-3 text-[14px] text-text-muted border-r border-border shrink-0 select-none">+91</span>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="WhatsApp number"
                      value={phone}
                      onChange={handlePhoneInput}
                      onBlur={() => setPhoneError(validatePhone(phone))}
                      maxLength={10}
                      className="flex-1 bg-transparent px-3 py-3 text-[14px] text-text-primary placeholder:text-text-muted outline-none"
                    />
                  </div>
                  {phoneError && <p className="mt-1 text-[11px] text-red-400">{phoneError}</p>}
                </div>

                {error && <p className="text-[12px] text-red-400 text-center">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className={`mt-1 flex items-center justify-center gap-2 w-full font-bold text-[15px] px-5 py-3.5 rounded-[10px] transition-all active:scale-[0.98] ${
                    loading ? 'bg-gold/60 text-bg cursor-not-allowed' : 'bg-gold hover:bg-gold-dark text-bg'
                  }`}
                >
                  {loading ? (
                    <><Loader2 size={18} className="animate-spin" />Opening payment…</>
                  ) : (
                    <>Pay ₹{amount} <ArrowRight size={16} /></>
                  )}
                </button>

                <p className="text-center text-[11px] text-text-muted">
                  🔒 Secure payment · 💳 UPI / Cards / Wallets
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

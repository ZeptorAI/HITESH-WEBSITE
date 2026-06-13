import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CheckoutModal from './CheckoutModal'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const [checkout, setCheckout] = useState({ open: false, product: '', amount: 0 })
  const openModal = (product, amount) => setCheckout({ open: true, product, amount })

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-2 bg-gradient-to-t from-bg via-bg/95 to-transparent"
          >
            <button
              onClick={() => openModal('bundle', 595)}
              className="flex items-center justify-center gap-2 w-full bg-gold text-bg font-semibold rounded-[8px] py-4 text-base transition-all hover:bg-gold-dark active:scale-[0.98]"
            >
              Get the bundle — ₹595
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <CheckoutModal
        open={checkout.open}
        product={checkout.product}
        amount={checkout.amount}
        onClose={() => setCheckout(s => ({ ...s, open: false }))}
      />
    </>
  )
}

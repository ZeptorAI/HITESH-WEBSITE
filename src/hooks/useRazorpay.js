import { useState } from 'react'

export function useRazorpay() {
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState('')

  async function pay({ product, amount, name, phone }) {
    setLoading(true)
    setError('')

    try {
      if (!window.Razorpay) {
        throw new Error('Payment system not ready. Please refresh and try again.')
      }

      const res = await fetch('https://hiteshmaxxed.com/api/create-order', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100,
          product,
          customer: { name, phone: '+91' + phone },
        }),
      })

      const orderData = await res.json()
      if (!orderData.orderId) {
        throw new Error(orderData.error || 'Failed to create order')
      }

      if (window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
          value: amount, currency: 'INR', content_name: product,
        })
      }

      const rzp = new window.Razorpay({
        key:      orderData.keyId,
        amount:   orderData.amount,
        currency: orderData.currency || 'INR',
        order_id: orderData.orderId,
        name:     'Hitesh Maxxed',
        description: `${product.charAt(0).toUpperCase() + product.slice(1)} Maxx Guide`,
        prefill: {
          name,
          contact: '+91' + phone,
          email:   `${phone}@hiteshmaxxed.com`,
        },
        theme: { color: '#D4AF37' },
        handler(response) {
          if (window.fbq) {
            window.fbq('track', 'Purchase', {
              value: amount, currency: 'INR', content_name: product,
            })
          }
          window.location.href =
            `/thank-you?product=${product}&order=${response.razorpay_order_id}&payment=${response.razorpay_payment_id}`
        },
        modal: {
          ondismiss() { setLoading(false) },
        },
      })

      rzp.on('payment.failed', (response) => {
        setError('Payment failed: ' + (response.error?.description || 'Please try again'))
        setLoading(false)
      })

      rzp.open()
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return { pay, loading, error, setError }
}

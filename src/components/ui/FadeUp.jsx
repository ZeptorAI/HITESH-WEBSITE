import { motion } from 'framer-motion'

export default function FadeUp({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const MotionTag = motion[Tag] ?? motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: delay / 1000, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}

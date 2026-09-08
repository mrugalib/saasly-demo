import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ value, suffix = '', duration = 2 }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const target = parseFloat(value.replace(/[^0-9.]/g, ''))
  const displaySuffix = value.toLowerCase().includes('k') ? 'k' + suffix : suffix

  useEffect(() => {
    if (!inView) return
    let start
    let frame
    const tick = (now) => {
      if (!start) start = now
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(target * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  const format = (v) => (value.includes('.') && v >= target - 0.1 ? target.toFixed(1) : Math.floor(v))

  return (
    <span ref={ref}>
      {format(current)}
      {displaySuffix}
    </span>
  )
}

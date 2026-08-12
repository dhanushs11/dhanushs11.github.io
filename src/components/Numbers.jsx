import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const figures = [
  { end: 4, suffix: ' yrs', label: 'building infrastructure' },
  { end: 20, suffix: '+', label: 'microservices in production' },
  { end: 6, suffix: '', label: 'cloud certifications' },
  { end: 40, suffix: '%', label: 'faster deployments' },
]

function useCountUp(target, start) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let rafId
    const duration = 1600
    const t0 = performance.now()
    const tick = now => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(2, -10 * p)
      setValue(Math.round(target * (p === 1 ? 1 : eased)))
      if (p < 1) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [start, target])

  return value
}

function Figure({ item, i, inView }) {
  const value = useCountUp(item.end, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="py-10 px-6 md:px-10 border-t border-paper/15 text-center md:text-left"
    >
      <p className="font-serif text-[clamp(4rem,9vw,8.5rem)] leading-none text-paper tracking-tight">
        {value}
        <span className="text-accent-warm">{item.suffix}</span>
      </p>
      <p className="text-hand text-2xl text-paper/60 mt-2">{item.label}</p>
    </motion.div>
  )
}

export default function Numbers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section id="figures" className="bg-ink text-paper">
      <div ref={ref}>
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="eyebrow text-paper/40 pt-12 pb-2 text-center md:text-left"
          >
            the numbers, in case the words were too soft
          </motion.p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {figures.map((f, i) => (
            <Figure key={f.end + f.suffix} item={f} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
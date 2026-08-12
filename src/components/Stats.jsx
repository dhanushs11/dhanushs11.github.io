import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 3.5, suffix: '+', label: 'Years Experience', decimals: true },
  { value: 6, suffix: '', label: 'Cloud Certifications' },
  { value: 20, suffix: '+', label: 'Microservices Managed' },
  { value: 4, suffix: '', label: 'Cloud Platforms', subtext: 'AWS · Azure · GCP · Akamai' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      <div ref={ref} className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.decimals ? (
                  <AnimatedCounterFloat end={stat.value} suffix={stat.suffix} />
                ) : (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-text-muted font-medium">{stat.label}</p>
              {stat.subtext && (
                <p className="text-text-muted/60 text-xs mt-1">{stat.subtext}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedCounterFloat({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start * 10) / 10)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

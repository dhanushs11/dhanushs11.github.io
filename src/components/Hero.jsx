import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowDown, FiMail } from 'react-icons/fi'

const roles = [
  'DevSecOps Engineer',
  'Cloud Infrastructure Expert',
  'AWS & Azure Certified',
  'Kubernetes Specialist',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 200])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        isDeleting ? 40 : 80
      )
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0d1a33] to-[#0a0e1a]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(13,110,253,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(32,201,151,0.08),transparent_50%)]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            DevSecOps & Cloud Engineer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Dhanush Satyavolu
          </h1>
          <div className="text-xl md:text-2xl text-text-muted h-10 flex items-center justify-center">
            <span>{text}</span>
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#portfolio"
            className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-primary/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <FiMail /> Get in Touch
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-muted hover:text-white transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <FiArrowDown size={24} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  )
}

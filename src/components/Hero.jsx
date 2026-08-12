import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowDown, FiMail } from 'react-icons/fi'
import { scrollToTarget } from '../hooks/useSmoothScroll'

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
  const y = useTransform(scrollY, [0, 600], [0, -120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        isDeleting ? 35 : 75
      )
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-end bg-paper overflow-hidden">
      <motion.div style={{ y, opacity }} className="w-full pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-muted mb-8"
        >
          Chennai · DevSecOps &amp; Cloud Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-[clamp(3.2rem,11vw,9rem)] leading-[0.95] tracking-[-0.02em] text-ink"
        >
          Dhanush
          <br />
          Satyavolu
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center gap-4 flex-wrap"
        >
          <span className="eyebrow text-muted block">
            <span className="text-accent font-semibold">{text}</span>
            <span className="inline-block w-0.5 h-4 bg-accent ml-0.5 animate-pulse" />
            —
          </span>
          <span className="text-hand text-2xl md:text-3xl text-accent-warm">
            turning infrastructure into code
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex gap-5 flex-wrap items-center"
        >
          <a
            href="#portfolio"
            onClick={e => { e.preventDefault(); scrollToTarget('#portfolio') }}
            className="inline-flex items-center gap-3 eyebrow bg-ink text-paper px-8 py-4 rounded-full hover:bg-accent transition-colors duration-200"
          >
            View my work <FiArrowDown size={16} />
          </a>
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); scrollToTarget('#contact') }}
            className="inline-flex items-center gap-2 eyebrow text-ink border-b border-ink/30 py-2 hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Get in touch <FiMail size={15} />
          </a>
        </motion.div>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-hand text-accent/70 absolute top-28 right-10 rotate-[6deg] text-xl hidden lg:block"
      >
        &ldquo;systems that actually survive Mondays&rdquo;
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="hidden md:block font-serif text-[10rem] leading-none text-black/[0.04] absolute bottom-4 -left-6 select-none pointer-events-none"
      >
        ∞
      </motion.span>
    </section>
  )
}
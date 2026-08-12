import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#resume' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Achievements', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive('#' + sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0e1a]/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-white tracking-tight">
          DS<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === link.href
                  ? 'bg-primary text-white'
                  : 'text-text-muted hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-md border-t border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active === link.href
                      ? 'bg-primary text-white'
                      : 'text-text-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

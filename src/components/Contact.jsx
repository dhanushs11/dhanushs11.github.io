import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiExternalLink } from 'react-icons/fi'

const contacts = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'satyavoludhanush@gmail.com',
    href: 'mailto:satyavoludhanush@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91-9665664935',
    href: 'tel:+919665664935',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Hyderabad, India',
    href: null,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/dhanushs11',
    href: 'https://linkedin.com/in/dhanushs11',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/dhanushs11',
    href: 'https://github.com/dhanushs11',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0f1a]">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-text-muted text-lg font-semibold">Feel free to reach out</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-[#13192b] border border-white/5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <c.icon size={22} className="text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-white mb-0.5">{c.label}</h3>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-text-muted text-sm hover:text-primary transition-colors block truncate"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="text-text-muted text-sm truncate">{c.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'

const ways = [
  { icon: FiMail, label: 'Email', value: 'satyavoludhanush@gmail.com', href: 'mailto:satyavoludhanush@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+91 9665664935', href: 'tel:+919665664935' },
  { icon: FiMapPin, label: 'Located in', value: 'Chennai, India', href: null },
  { icon: FiGithub, label: 'GitHub', value: '@dhanushs11', href: 'https://github.com/dhanushs11' },
  { icon: FiLinkedin, label: 'LinkedIn', value: '/in/dhanush-satyavolu', href: 'https://www.linkedin.com/in/dhanush-satyavolu-619036237/' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-32 px-6 md:px-10 bg-ink text-paper">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="eyebrow text-paper/50 mb-6">( 06 ) — Contact</p>
          <h2 className="font-serif text-[clamp(3rem,9vw,7rem)] leading-[0.95] text-paper">
            Let&rsquo;s build
            <span className="block italic text-accent-warm">something solid</span>
          </h2>
          <a
            href="mailto:satyavoludhanush@gmail.com"
            className="inline-block mt-8 eyebrow border border-paper/30 hover:border-paper px-10 py-5 rounded-full text-paper hover:bg-paper hover:text-ink transition-colors duration-200"
          >
            satyavoludhanush@gmail.com
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-paper/15 border border-paper/15 mt-10">
          {ways.map((w, i) => (
            <motion.div
              key={w.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-ink p-6 hover:bg-paper/5 transition-colors duration-200"
            >
              {w.href ? (
                <a href={w.href} target={w.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                  <w.icon size={20} className="text-accent-warm mb-6" />
                  <p className="eyebrow text-paper/40 mb-2">{w.label}</p>
                  <p className="font-serif text-lg text-paper break-all leading-snug hover:text-accent-warm transition-colors">{w.value}</p>
                </a>
              ) : (
                <div>
                  <w.icon size={20} className="text-accent-warm mb-6" />
                  <p className="eyebrow text-paper/40 mb-2">{w.label}</p>
                  <p className="font-serif text-lg text-paper break-all leading-snug">{w.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
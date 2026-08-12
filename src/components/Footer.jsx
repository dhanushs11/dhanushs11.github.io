import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/dhanushs11', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/dhanushs11', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:satyavoludhanush@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-paper/10 py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif text-xl">Dhanush Satyavolu</span>
          <span className="text-hand text-lg text-accent-warm">— devsecops</span>
        </div>

        <p className="eyebrow text-paper/40">
          &copy; {new Date().getFullYear()} · Built with React, Vite &amp; questionable uptime confidence
        </p>

        <div className="flex gap-3">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-paper/25 flex items-center justify-center text-paper/70 hover:bg-paper hover:text-ink hover:border-paper transition-all duration-200"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
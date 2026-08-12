import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/dhanushs11', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/dhanushs11', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:satyavoludhanush@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-4">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1 transition-all duration-200"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-text-muted/60 text-sm">
          &copy; {new Date().getFullYear()} Dhanush Satyavolu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

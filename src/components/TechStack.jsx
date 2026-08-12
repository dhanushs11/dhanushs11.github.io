import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from './Resume'

const tech = [
  { name: 'Kubernetes', img: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', img: '/icons/aws.svg' },
  { name: 'Terraform', img: 'https://cdn.simpleicons.org/terraform/7B42BC' },
  { name: 'Jenkins', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Linux', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Helm', img: 'https://cdn.simpleicons.org/helm/0F1689' },
  { name: 'Bash', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg' },
  { name: 'GitHub Actions', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
  { name: 'GCP', img: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'Akamai', img: 'https://cdn.simpleicons.org/akamai/009BDE' },
  { name: 'Upsun', img: 'https://github.com/upsun.png?size=120' },
  { name: 'Matomo', img: 'https://cdn.simpleicons.org/matomo/3152A0' },
  { name: 'CloudFormation', initials: 'CF' },
  { name: 'ELK Stack', initials: 'ELK' },
]

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stack" className="py-28 bg-paper">
      <div ref={ref}>
        <SectionHeader index="03" title="The stack" note="tools that have earned my trust" />

        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {tech.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group bg-paper p-8 flex flex-col items-start justify-between min-h-[140px] hover:bg-ink transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {t.img ? (
                    <img src={t.img} alt={t.name} className="max-w-full max-h-full object-contain" />
                  ) : (
                    <span className="font-serif text-2xl text-ink group-hover:text-paper">{t.initials}</span>
                  )}
                </div>
                <p className="eyebrow text-muted mt-8 group-hover:text-paper transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')} — {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
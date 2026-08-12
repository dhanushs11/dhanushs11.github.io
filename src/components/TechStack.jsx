import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const tech = [
  { name: 'Kubernetes', img: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', img: 'https://cdn.simpleicons.org/amazonwebservices/FF9900' },
  { name: 'CloudFormation', icon: 'CF', color: '#ff9900' },
  { name: 'Jenkins', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Bash', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg', invert: true },
  { name: 'Helm', img: 'https://cdn.simpleicons.org/helm/0F1689' },
  { name: 'Linux', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Terraform', img: 'https://cdn.simpleicons.org/terraform/7B42BC' },
  { name: 'Akamai', img: 'https://cdn.simpleicons.org/akamai/009BDE' },
  { name: 'Upsun', img: 'https://github.com/upsun.png?size=120' },
  { name: 'Matomo', img: 'https://cdn.simpleicons.org/matomo/3152A0' },
  { name: 'GCP', img: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'GitHub Actions', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 px-6 bg-[#0a0f1a]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-text-muted text-lg font-semibold">I have been working on these cool things at work</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {tech.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative bg-[#13192b]/75 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center gap-4 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1.5"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    style={item.invert ? { filter: 'brightness(0) invert(1) opacity(0.85)' } : {}}
                  />
                ) : (
                  <span
                    className="text-3xl font-bold transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </span>
                )}
              </div>
              <span className="text-text-light text-sm font-semibold tracking-wide">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

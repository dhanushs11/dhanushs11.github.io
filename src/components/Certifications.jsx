import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiStar } from 'react-icons/fi'

const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    icon: 'aws',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    icon: 'aws',
  },
  {
    title: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: '2024',
    icon: 'hashi',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2023',
    icon: 'azure',
  },
  {
    title: 'Atlassian Certified in Jira Project Administration',
    issuer: 'Atlassian',
    date: '2024',
    icon: 'atl',
  },
]

const theme = {
  aws: { bg: 'rgba(255,153,0,0.1)', border: '#ff9900', iconBg: 'rgba(255,153,0,0.15)', iconColor: '#ff9900' },
  azure: { bg: 'rgba(0,114,204,0.1)', border: '#0078d4', iconBg: 'rgba(0,114,204,0.15)', iconColor: '#0078d4' },
  hashi: { bg: 'rgba(123,66,188,0.1)', border: '#7b42bc', iconBg: 'rgba(123,66,188,0.15)', iconColor: '#a370f7' },
  atl: { bg: 'rgba(0,82,204,0.08)', border: '#0052cc', iconBg: 'rgba(0,82,204,0.15)', iconColor: '#4c9aff' },
}

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-24 px-6 bg-[#0d1117]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-text-muted text-lg font-semibold">Certifications & milestones</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => {
            const t = theme[cert.icon]
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-xl flex items-start gap-4 transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: t.bg,
                  borderLeft: `3px solid ${t.border}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: t.iconBg }}
                >
                  <FiAward size={22} style={{ color: t.iconColor }} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">{cert.title}</h4>
                  <p className="text-text-muted text-sm">{cert.issuer}</p>
                  <p className="text-text-muted/60 text-xs font-semibold mt-1">{cert.date}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-8 p-5 rounded-xl bg-accent-gold/6 border border-accent-gold/20 flex items-start gap-4"
          style={{ borderLeft: '4px solid #ffc107' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-accent-gold/15">
            <FiStar size={22} className="text-accent-gold" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#ffd454] mb-1">Achievement</h4>
            <p className="text-[#9a8050] text-sm">
              Scaled microservices architecture from 15→20 services, achieving 40% faster deployments
              and improved modularity across production infrastructure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

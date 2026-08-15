import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from './Resume'
import { FiAward } from 'react-icons/fi'

const certs = [
  { name: 'AWS Certified Solutions Architect — Associate', org: 'Amazon Web Services', year: '2024' },
  { name: 'HashiCorp Certified: Terraform Associate', org: 'HashiCorp', year: '2025' },
  { name: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', year: '2023' },
  { name: 'Microsoft Certified: Azure Fundamentals', org: 'Microsoft', year: '2023' },
  { name: 'Atlassian Certified in Jira Project Administration', org: 'Atlassian', year: '2024' },
]

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-28 bg-paper">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader index="05" title="Credentials" note="certified, not just claimed" />

        <div className="border-t border-black/10">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex items-center justify-between gap-6 py-6 border-b border-black/10 hover:bg-paper-warm transition-colors duration-200 px-4 -mx-4 cursor-default"
            >
              <div className="flex items-center gap-5">
                <span className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-paper transition-colors duration-200">
                  <FiAward size={16} />
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight">{c.name}</h3>
                  <p className="eyebrow text-muted mt-1">{c.org}</p>
                </div>
              </div>
              <span className="text-hand text-2xl text-muted shrink-0">{c.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
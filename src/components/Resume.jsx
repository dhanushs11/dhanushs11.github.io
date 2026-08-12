import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experience = [
  {
    role: 'DevSecOps Engineer',
    org: 'HID Global',
    place: 'Chennai',
    period: 'Mar 2026 — Present',
    points: [
      'Automated SSL/TLS certificate renewal alerts in Nagios across all production websites',
      'Added Blackfire profiling across Drupal-based projects',
      'Integrated SonarQube into deployment pipelines for every project',
      'Deployed an ELK stack to centralise logging (rsyslog + Drupal app logs)',
    ],
  },
  {
    role: 'Engineer — Technology (DevOps)',
    org: 'PennyWise Solutions',
    place: 'Hyderabad',
    period: 'Mar 2025 — Mar 2026',
    points: [
      'Scaled architecture from 15 → 20 microservices for better modularity & performance',
      'Security hardening (Veracode, AWS Security Hub); 40% faster deployments',
      'Shifted to Private API Gateways for secure microservice communication',
    ],
  },
  {
    role: 'Associate Engineer — DevOps',
    org: 'PennyWise Solutions',
    place: 'Hyderabad',
    period: 'May 2023 — Mar 2025',
    points: [
      'Automated backups & SSL/domain checks; 50% faster processes',
      'Deployed microservices on AWS EKS (Fargate), Aurora PostgreSQL, ElastiCache, API Gateways',
      'Primary infra/CI/CD contact — cut troubleshooting time 40% via RCA tracking',
    ],
  },
  {
    role: 'Consultant — DevOps',
    org: 'PennyWise Solutions',
    place: 'Hyderabad',
    period: 'Nov 2022 — May 2023',
    points: [
      'Strengthened the Linux + DevOps foundation; built Jenkins pipelines',
      'Monitored infra (Nagios, Prometheus, Grafana) with proactive patching',
      'Ran POCs on AWS & Azure for incoming client projects',
    ],
  },
  {
    role: 'Intern',
    org: 'Cognizant',
    place: '',
    period: 'Jan 2022 — Jun 2022',
    points: [
      'Built banking app components (MySQL backend, JS frontend)',
      'Hands-on SQL + ETL (Informatica PowerCenter)',
      'Converted to a full-time offer',
    ],
  },
]

export function SectionHeader({ index, title, note, dotted }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <div ref={ref} className="mb-16 md:mb-20 max-w-6xl mx-auto px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between gap-6 border-b border-black/15 pb-8"
      >
        <div>
          <p className="eyebrow text-muted mb-4">({index})</p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight leading-none text-ink">
            {title}
          </h2>
        </div>
        {note && (
          <p className="text-hand text-2xl text-accent-warm rotate-[-3deg] hidden sm:block max-w-[200px] text-right leading-tight">
            {note}
          </p>
        )}
      </motion.div>
      {dotted && <div className="border-b border-dotted border-black/20" />}
    </div>
  )
}

export default function Resume() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="resume" className="py-28 px-6 md:px-10 bg-paper-warm border-y border-black/10">
      <div ref={ref} className="max-w-6xl mx-auto">
        <SectionHeader
          index="02"
          title="Experience"
        />

        <ol className="space-y-16">
          {experience.map((job, i) => (
            <motion.li
              key={job.role}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid md:grid-cols-12 gap-4 md:gap-8"
            >
              <div className="md:col-span-4 md:text-right">
                <p className="font-serif text-2xl text-ink md:pr-6 leading-tight">
                  {job.role}
                </p>
                <p className="eyebrow text-accent mt-2">{job.org}{job.place && ` · ${job.place}`}</p>
                <span className="hidden md:inline-block text-hand text-xl text-muted mt-4">{job.period}</span>
              </div>

              <div className="hidden md:block md:col-span-1 relative">
                <span className={`absolute top-2 md:right-0 w-3 h-3 rounded-full border-2 border-accent ${inView ? 'bg-accent' : ''}`} />
                <span className="absolute top-4 left-1/2 h-[120%] w-px bg-black/15" />
              </div>

              <div className="md:col-span-7">
                <p className="text-hand text-xl text-muted md:hidden mb-2">{job.period}</p>
                <ul className="space-y-3">
                  {job.points.map((point, pi) => (
                    <li key={pi} className="flex gap-3 text-ink-soft font-light leading-relaxed">
                      <span className="text-accent font-medium shrink-0 mt-0.5">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="mt-20 grid md:grid-cols-2 gap-8 border-t border-black/15 pt-10">
          {[
            { title: 'MCA — Osmania University', sub: '2023 — Present · Grade 8.15 · ML/AI focus' },
            { title: 'BE Electronics & Communication — CBIT', sub: '2018 — 2022 · Grade 8.6' },
          ].map(edu => (
            <div key={edu.title} className="flex items-baseline gap-4">
              <span className="font-serif text-3xl text-accent/60">“</span>
              <div>
                <p className="font-serif text-xl text-ink">{edu.title}</p>
                <p className="eyebrow text-muted mt-1">{edu.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
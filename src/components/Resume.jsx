import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase, FiBookOpen, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const education = [
  {
    title: 'Master of Computer Applications',
    period: '2023 - Present',
    place: 'Osmania University, Hyderabad, India',
    grade: 'Grade: 8.15',
    details: 'Pursuing part-time. Favorite subjects: Data Structures, Python, Statistics (ML/AI focus).',
  },
  {
    title: 'BE – Electronics & Communication',
    period: '2018 - 2022',
    place: 'Chaitanya Bharathi Institute of Technology, Hyderabad, India',
    grade: 'Grade: 8.6',
    details: 'Coursework: Computer Architecture, Microprocessors, C Programming, Data Structures.',
  },
]

const experience = [
  {
    title: 'DevSecOps Engineer',
    company: 'HID Global, Chennai',
    period: 'Mar 2026 - Present',
    highlights: [
      'Automated SSL/TLS certificate renewal alerts in Nagios for all production websites',
      'Added Blackfire profiling across Drupal-based projects',
      'Integrated SonarQube deployment pipelines for all projects',
      'Deployed an ELK stack to centralise logging, integrating rsyslog system logs and Drupal application logs',
    ],
  },
  {
    title: 'Engineer - Technology (DevOps)',
    company: 'Verticurl, Hyderabad',
    period: 'Mar 2025 - Mar 2026',
    highlights: [
      'Scaled architecture from 15→20 microservices; better modularity & performance',
      'Security hardening (Veracode, AWS Security Hub); 40% faster deployments via pipeline optimization',
      'Shifted to Private API Gateways for secure microservice communication',
    ],
  },
  {
    title: 'Associate Engineer - DevOps',
    company: 'PennyWise Solutions (Client: Verticurl) | Hyderabad',
    period: 'May 2023 - Mar 2025',
    highlights: [
      'Automated backups & SSL/domain checks; 50% faster processes',
      'Deployed microservices on AWS EKS (Fargate), Aurora PostgreSQL, ElastiCache, API Gateways',
      'Primary infra/CI/CD contact; cut troubleshooting time 40% via RCA tracking',
    ],
  },
  {
    title: 'Consultant - DevOps',
    company: 'PennyWise Solutions, Hyderabad',
    period: 'Nov 2022 - May 2023',
    highlights: [
      'Strengthened Linux + DevOps foundation; built Jenkins pipelines',
      'Monitored infra (Nagios, Prometheus, Grafana); proactive patching & security',
      'POCs on AWS & Azure for incoming client projects',
    ],
  },
  {
    title: 'Intern',
    company: 'Cognizant',
    period: 'Jan 2022 - Jun 2022',
    highlights: [
      'Built banking app components (MySQL backend, JS frontend)',
      'Hands-on SQL + ETL (Informatica PowerCenter)',
      'Converted to full-time offer',
    ],
  },
]

function TimelineItem({ item, index, type }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const isExp = type === 'experience'
  const accentColor = isExp ? '#0d6efd' : '#20c997'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isExp ? 30 : -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div
        className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2"
        style={{ borderColor: accentColor, backgroundColor: isInView ? accentColor : 'transparent' }}
      />
      {index < (isExp ? experience.length - 1 : education.length - 1) && (
        <div className="absolute left-[5px] top-4 w-0.5 h-full bg-white/10" />
      )}

      <div
        className="p-5 rounded-xl border transition-all duration-200 hover:-translate-y-1"
        style={{
          backgroundColor: `${accentColor}08`,
          borderColor: `${accentColor}20`,
          borderLeftWidth: '3px',
          borderLeftColor: accentColor,
        }}
      >
        <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
        <p className="text-sm font-medium" style={{ color: accentColor }}>{item.period}</p>
        {item.company && <p className="text-text-muted text-sm mt-1">{item.company}</p>}
        {item.place && <p className="text-text-muted text-sm mt-1">{item.place}</p>}
        {item.grade && <p className="text-text-muted text-sm mt-1">{item.grade}</p>}
        {item.details && <p className="text-text-muted text-sm mt-2">{item.details}</p>}
        {item.highlights && (
          <ul className="mt-3 space-y-1.5">
            {item.highlights.map((h, i) => (
              <li key={i} className="text-text-muted text-sm flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="resume" className="py-24 px-6 bg-bg-dark">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Resume</h2>
          <p className="text-text-muted text-lg font-medium">A bit about my education and work history :)</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FiBookOpen className="text-primary" size={22} />
              <h3 className="text-xl font-bold text-white">Summary & Education</h3>
            </div>
            <div className="mb-8 p-5 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="text-lg font-bold text-white">Dhanush Satyavolu</h4>
              <p className="text-text-muted text-sm mt-1">
                DevOps Engineer with 3.5+ years experience building cloud infrastructures that don't just work—they're
                consistent, secure, and scalable.
              </p>
              <div className="mt-3 space-y-1 text-sm text-text-muted">
                <p className="flex items-center gap-2"><FiMapPin size={14} /> Hyderabad, India</p>
                <p className="flex items-center gap-2"><FiPhone size={14} /> +91-9665664935</p>
                <p className="flex items-center gap-2"><FiMail size={14} /> satyavoludhanush@gmail.com</p>
              </div>
            </div>
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} type="education" />
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <FiBriefcase className="text-primary" size={22} />
              <h3 className="text-xl font-bold text-white">Professional Experience</h3>
            </div>
            {experience.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} type="experience" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'
import { SectionHeader } from './Resume'

const featured = [
  {
    title: 'docklean',
    tag: 'Python · CLI',
    desc: 'A dry-run-first CLI that reports Docker disk usage and prunes unused containers, images, networks and build cache. Written with only the Python standard library — nothing to pip install.',
    url: 'https://github.com/dhanushs11/docker-cleanup-tool',
  },
  {
    title: 'BMS Ticket Checker',
    tag: 'Python · Automation',
    desc: 'Watches BookMyShow for ticket availability on a specific movie, venue and date — then pings you via macOS notifications or email. Ships with Docker and a 24/7 GitHub Actions monitor.',
    url: 'https://github.com/dhanushs11/bms-ticket-checker',
  },
  {
    title: 'codex-skills',
    tag: 'Shell · Agent tooling',
    desc: 'A growing library of reusable DevOps, Linux and AI skills distilled for agent coding tools like Codex — captured from real ops work so I stop re-teaching it every session.',
    url: 'https://github.com/dhanushs11/codex-skills',
  },
  {
    title: 'This portfolio',
    tag: 'React · Vite · JS',
    desc: 'Rebuilt from a static template into React + Vite with Framer Motion and this editorial design, auto-deployed to GitHub Pages via a GitHub Actions workflow.',
    url: 'https://github.com/dhanushs11/dhanushs11.github.io',
  },
]

const libraries = [
  {
    name: 'CloudFormation',
    desc: 'AWS CloudFormation templates — API Gateway, KMS, EFS, EKS + RDS, NLB, OpenSearch, autoscaling alarms, Redis & Valkey',
    url: 'https://github.com/dhanushs11/CloudFormation',
  },
  {
    name: 'Kubernetes',
    desc: 'EKS deep-dives — Fluentbit logging on Fargate, Helm charts, dashboards and ADOT metrics',
    url: 'https://github.com/dhanushs11/Kubernetes',
  },
  {
    name: 'BashScripts',
    desc: 'Ops automation — EKS encryption, RDS dumps, Kubernetes service accounts',
    url: 'https://github.com/dhanushs11/BashScripts',
  },
]

function FeaturedRow({ project, i, inView }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="group grid md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-12 border-t border-black/10 hover:bg-paper-warm transition-colors duration-200 px-3 -mx-3"
    >
      <div className="md:col-span-5 flex items-start gap-5">
        <span className="text-hand text-3xl text-black/25 group-hover:text-accent-warm transition-colors duration-200">
          {String(i + 1).padStart(2, '0')}
        </span>
        <div>
          <p className="eyebrow text-accent mb-1">{project.tag}</p>
          <h3 className="font-serif text-3xl md:text-4xl leading-tight text-ink flex items-center gap-3">
            {project.title}
            <FiArrowUpRight
              size={26}
              className="text-muted group-hover:text-accent transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </h3>
        </div>
      </div>
      <div className="md:col-span-6 md:col-start-7 flex flex-col justify-between">
        <p className="text-ink-soft font-light leading-relaxed">{project.desc}</p>
        <span className="hidden md:inline-flex items-center gap-2 eyebrow text-muted group-hover:text-ink transition-colors duration-200 mt-6">
          <FiGithub size={14} /> github.com/dhanushs11
        </span>
      </div>
    </motion.a>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="portfolio" className="py-28 bg-paper-warm border-y border-black/10">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader index="04" title="Selected work" note="a few things I actually shipped" />

        {featured.map((p, i) => (
          <FeaturedRow key={p.title} project={p} i={i} inView={inView} />
        ))}

        <div className="mt-20 pt-12 border-t border-black/10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-hand text-2xl text-muted mb-8"
          >
            and the libraries that the day job keeps growing...
          </motion.p>

          <div className="grid md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {libraries.map((lib, i) => (
              <motion.a
                key={lib.name}
                href={lib.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className="group bg-paper-warm p-7 hover:bg-ink transition-colors duration-300 flex flex-col"
              >
                <p className="eyebrow text-muted group-hover:text-paper/50 mb-3">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h4 className="font-serif text-2xl text-ink group-hover:text-paper leading-tight mb-2">
                  {lib.name}
                </h4>
                <p className="text-sm text-ink-soft font-light leading-relaxed mb-6 group-hover:text-paper/70">
                  {lib.desc}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 eyebrow text-accent group-hover:text-accent-warm">
                  Browse the repo <FiArrowUpRight size={15} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  'AWS', 'Azure', 'Kubernetes / EKS / AKS', 'Docker',
  'CloudFormation / IaC', 'Terraform', 'Jenkins CI/CD', 'DevSecOps',
  'Prometheus / Grafana', 'Helm', 'Bash Scripting', 'Python',
  'ELK Stack', 'Nagios',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-28 px-6 md:px-10 bg-paper">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="eyebrow text-muted"
            >
              ( 01 ) — About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl leading-[1.02] tracking-tight text-ink mt-6"
            >
              Building systems
              <span className="block italic font-light text-accent">that don&rsquo;t break</span>
              <span className="text-hand text-3xl text-accent-warm block mt-3 rotate-[-2deg]">
                so you can sleep at night :)
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg leading-relaxed font-light text-ink-soft"
            >
              <p>
                I&rsquo;m Dhanush Satyavolu, a DevOps Engineer who has spent the last
                <span className="font-serif italic text-ink"> 3.5+ years </span>
                turning high-scale cloud infrastructure into something dependable.
                Mostly AWS and Azure — always with security and cost in mind.
              </p>
              <p>
                My daily toolkit: CI/CD automation, Kubernetes orchestration (EKS, AKS),
                CloudFormation and Terraform, Docker and Helm. I&rsquo;ve watched microservice
                architectures grow from 15 to 20 services and made deployments 40% faster
                along the way.
              </p>
              <p>
                AWS Certified Solutions Architect, Azure Fundamentals certified, and currently
                dabbling in AI/ML as part of my MCA coursework — because cloud platforms keep
                multiplying and I want to be fluent in all of them.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-12 border-t border-black/15 pt-8"
            >
              <p className="eyebrow text-muted mb-5">Things I actually use</p>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="eyebrow text-ink/70 border border-ink/15 rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
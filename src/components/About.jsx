import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCloud, FiBox, FiLayers, FiGitBranch, FiShield, FiBarChart2, FiTerminal, FiCode } from 'react-icons/fi'

const skills = [
  { name: 'AWS', icon: FiCloud, color: '#ff9900' },
  { name: 'Azure', icon: FiCloud, color: '#0078d4' },
  { name: 'Kubernetes / EKS / AKS', icon: FiLayers, color: '#326ce5' },
  { name: 'Docker', icon: FiBox, color: '#2496ed' },
  { name: 'CloudFormation / IaC', icon: FiLayers, color: '#ff9900' },
  { name: 'Terraform', icon: FiGitBranch, color: '#7b42bc' },
  { name: 'Jenkins CI/CD', icon: FiGitBranch, color: '#d33833' },
  { name: 'DevSecOps', icon: FiShield, color: '#20c997' },
  { name: 'Prometheus / Grafana', icon: FiBarChart2, color: '#e6522c' },
  { name: 'Helm', icon: FiLayers, color: '#0f1689' },
  { name: 'Bash Scripting', icon: FiTerminal, color: '#4eaa25' },
  { name: 'Python', icon: FiCode, color: '#3776ab' },
  { name: 'ELK Stack', icon: FiBarChart2, color: '#005571' },
  { name: 'Nagios', icon: FiShield, color: '#96313a' },
]

const info = [
  { label: 'Name', value: 'Dhanush Satyavolu' },
  { label: 'Profile', value: 'DevOps Engineer' },
  { label: 'Email', value: 'satyavoludhanush@gmail.com' },
  { label: 'Phone', value: '+91-9665664935' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 mb-10">
              {info.map(item => (
                <div key={item.label} className="flex">
                  <span className="font-semibold text-white w-28 shrink-0">{item.label}:</span>
                  <span className="text-text-muted">{item.value}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  style={{
                    backgroundColor: `${skill.color}12`,
                    color: skill.color,
                    borderColor: `${skill.color}30`,
                  }}
                >
                  <skill.icon size={14} />
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-white">About Me</h3>
            <p className="text-text-muted leading-relaxed">
              I'm Dhanush Satyavolu, a passionate DevOps Engineer with a strong focus on setting up and building scalable,
              secure, and automated cloud infrastructure. Over the past few years, I've designed and optimized infrastructure
              for high-scale applications, primarily on AWS and Azure.
            </p>
            <p className="text-text-muted leading-relaxed">
              My expertise spans CI/CD automation, Kubernetes orchestration (EKS, AKS), CloudFormation/IaC, and
              containerization with Docker and Helm. I have played an important part in creating systems that are
              robust, cost-efficient, and aligned with industry standards.
            </p>
            <p className="text-text-muted leading-relaxed">
              Additionally, I'm an AWS Certified Solutions Architect and Azure Fundamentals certified, always eager
              to learn and implement cutting-edge DevOps practices. When I'm not working on automation or cloud
              architecture, I enjoy exploring AI/ML concepts as part of my ongoing MCA coursework.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

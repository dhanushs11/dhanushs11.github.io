import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  FiArrowUpRight, FiServer, FiLock, FiFolder, FiBox, FiShare2, FiSearch,
  FiBell, FiZap, FiDatabase, FiActivity, FiNavigation, FiGrid, FiTrendingUp,
  FiArchive, FiUser,
} from 'react-icons/fi'
import { SectionHeader } from './Resume'

const filters = ['All', 'CloudFormation', 'Kubernetes', 'Bash']

const accent = {
  CloudFormation: '#003d7a',
  Kubernetes: '#326ce5',
  Bash: '#2f8f46',
}

const projects = [
  { title: 'API Gateway', cat: 'CloudFormation', icon: FiServer, url: 'https://github.com/dhanushs11/CloudFormation/blob/main/api-gateway.yaml', note: 'serverless entry point' },
  { title: 'Asymmetric KMS', cat: 'CloudFormation', icon: FiLock, url: 'https://github.com/dhanushs11/CloudFormation/blob/main/asymmetric-kms.yaml', note: 'encryption, the smart kind' },
  { title: 'Elastic File System', cat: 'CloudFormation', icon: FiFolder, url: 'https://github.com/dhanushs11/CloudFormation/blob/main/efs.yaml', note: 'shared storage, zero drama' },
  { title: 'EKS + RDS', cat: 'CloudFormation', icon: FiBox, url: 'https://github.com/dhanushs11/CloudFormation/blob/main/main.yaml', note: 'k8s meets postgres' },
  { title: 'Network Load Balancer', cat: 'CloudFormation', icon: FiShare2, url: 'https://github.com/dhanushs11/CloudFormation/blob/main/nlb-cfn.yaml', note: 'traffic, politely routed' },
  { title: 'OpenSearch', cat: 'CloudFormation', icon: FiSearch, url: 'https://github.com/dhanushs11/CloudFormation/blob/main/opensearch.yaml', note: 'search at scale' },
  { title: 'EKS Autoscaling Alarms', cat: 'CloudFormation', icon: FiBell, url: 'https://github.com/dhanushs11/CloudFormation/blob/main/pod-autoscale-alarms.yaml', note: 'wake me only when it matters' },
  { title: 'Redis', cat: 'CloudFormation', icon: FiZap, url: 'https://github.com/dhanushs11/CloudFormation/blob/main/redis.yaml', note: 'in-memory, in production' },
  { title: 'Valkey', cat: 'CloudFormation', icon: FiDatabase, url: 'https://github.com/dhanushs11/CloudFormation/blob/main/valkey.yaml', note: 'redis&rsquo;s fresh successor' },
  { title: 'Fluentbit Logging for EKS', cat: 'Kubernetes', icon: FiActivity, url: 'https://github.com/dhanushs11/Kubernetes/tree/main/Fargate%20logging%20using%20fluentbit', note: 'every log accounted for' },
  { title: 'Helm Chart Sample', cat: 'Kubernetes', icon: FiNavigation, url: 'https://github.com/dhanushs11/Kubernetes/tree/main/helm-chart-app', note: 'packaging for k8s' },
  { title: 'Kubernetes Dashboard', cat: 'Kubernetes', icon: FiGrid, url: 'https://github.com/dhanushs11/Kubernetes/tree/main/k8s-dash', note: 'see everything at a glance' },
  { title: 'K8s Metrics with ADOT', cat: 'Kubernetes', icon: FiTrendingUp, url: 'https://github.com/dhanushs11/Kubernetes/tree/main/k8s-metrics', note: 'numbers that tell the truth' },
  { title: 'EKS Encryption', cat: 'Bash', icon: FiLock, url: 'https://github.com/dhanushs11/BashScripts/blob/main/encrypt-eks.sh', note: 'encrypt the whole cluster' },
  { title: 'RDS Backup', cat: 'Bash', icon: FiArchive, url: 'https://github.com/dhanushs11/BashScripts/blob/main/psql-dump-create.sh', note: 'dumps before disasters' },
  { title: 'K8s Service Account', cat: 'Bash', icon: FiUser, url: 'https://github.com/dhanushs11/BashScripts/blob/main/kubernetes-service-account.sh', note: 'identities for workloads' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const visible = filter === 'All' ? projects : projects.filter(p => p.cat === filter)

  return (
    <section id="portfolio" className="py-28 bg-paper-warm border-y border-black/10">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader index="04" title="Selected work" />

        <div className="flex flex-wrap gap-2 mb-14">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`eyebrow px-5 py-2.5 rounded-full border transition-all duration-200 ${
                filter === f
                  ? 'bg-ink text-paper border-ink'
                  : 'border-ink/20 text-muted hover:border-ink hover:text-ink'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.a
                  key={p.title}
                  layout
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.02 }}
                  className="group block bg-paper border border-black/10 p-7 hover:border-black/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-full border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ borderColor: `${accent[p.cat]}40`, backgroundColor: `${accent[p.cat]}0d` }}
                  >
                    <Icon size={24} style={{ color: accent[p.cat] }} />
                  </div>
                  <p className="eyebrow text-accent mb-2" style={{ color: accent[p.cat] }}>{p.cat}</p>
                  <h3 className="font-serif text-2xl leading-tight text-ink flex items-start gap-3">
                    {p.title}
                    <FiArrowUpRight
                      size={20}
                      className="text-muted group-hover:text-accent mt-1 shrink-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </h3>
                  <p className="text-hand text-lg text-accent-warm mt-2">{p.note}</p>
                </motion.a>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
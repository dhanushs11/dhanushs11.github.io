import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { SectionHeader } from './Resume'

const filters = ['All', 'CloudFormation', 'Kubernetes', 'Bash']

const projects = [
  { title: 'API Gateway', cat: 'CloudFormation', img: '/portfolio/api-gateway.png', url: 'https://github.com/dhanushs11/CloudFormation/blob/main/api-gateway.yaml', note: 'serverless entry point' },
  { title: 'Asymmetric KMS', cat: 'CloudFormation', img: '/portfolio/asymmetric-kms.jpg', url: 'https://github.com/dhanushs11/CloudFormation/blob/main/asymmetric-kms.yaml', note: 'encryption, the smart kind' },
  { title: 'Elastic File System', cat: 'CloudFormation', img: '/portfolio/efs.png', url: 'https://github.com/dhanushs11/CloudFormation/blob/main/efs.yaml', note: 'shared storage, zero drama' },
  { title: 'EKS + RDS', cat: 'CloudFormation', img: '/portfolio/eks.jpg', url: 'https://github.com/dhanushs11/CloudFormation/blob/main/main.yaml', note: 'k8s meets postgres' },
  { title: 'Network Load Balancer', cat: 'CloudFormation', img: '/portfolio/elb.jpg', url: 'https://github.com/dhanushs11/CloudFormation/blob/main/nlb-cfn.yaml', note: 'traffic, politely routed' },
  { title: 'OpenSearch', cat: 'CloudFormation', img: '/portfolio/os.jpg', url: 'https://github.com/dhanushs11/CloudFormation/blob/main/opensearch.yaml', note: 'search at scale' },
  { title: 'EKS Autoscaling Alarms', cat: 'CloudFormation', img: '/portfolio/cw.png', url: 'https://github.com/dhanushs11/CloudFormation/blob/main/pod-autoscale-alarms.yaml', note: 'wake me only when it matters' },
  { title: 'Redis', cat: 'CloudFormation', img: '/portfolio/redis.png', url: 'https://github.com/dhanushs11/CloudFormation/blob/main/redis.yaml', note: 'in-memory, in production' },
  { title: 'Valkey', cat: 'CloudFormation', img: '/portfolio/valkey.png', url: 'https://github.com/dhanushs11/CloudFormation/blob/main/valkey.yaml', note: 'redis&rsquo;s fresh successor' },
  { title: 'Fluentbit Logging for EKS', cat: 'Kubernetes', img: '/portfolio/fargate.png', url: 'https://github.com/dhanushs11/Kubernetes/tree/main/Fargate%20logging%20using%20fluentbit', note: 'every log accounted for' },
  { title: 'Helm Chart Sample', cat: 'Kubernetes', img: '/portfolio/helm.jpg', url: 'https://github.com/dhanushs11/Kubernetes/tree/main/helm-chart-app', note: 'packaging for k8s' },
  { title: 'Kubernetes Dashboard', cat: 'Kubernetes', img: '/portfolio/dash.png', url: 'https://github.com/dhanushs11/Kubernetes/tree/main/k8s-dash', note: 'see everything at a glance' },
  { title: 'K8s Metrics with ADOT', cat: 'Kubernetes', img: '/portfolio/adot.png', url: 'https://github.com/dhanushs11/Kubernetes/tree/main/k8s-metrics', note: 'numbers that tell the truth' },
  { title: 'EKS Encryption', cat: 'Bash', img: '/portfolio/ekskms.png', url: 'https://github.com/dhanushs11/BashScripts/blob/main/encrypt-eks.sh', note: 'encrypt the whole cluster' },
  { title: 'RDS Backup', cat: 'Bash', img: '/portfolio/psql.png', url: 'https://github.com/dhanushs11/BashScripts/blob/main/psql-dump-create.sh', note: 'dumps before disasters' },
  { title: 'K8s Service Account', cat: 'Bash', img: '/portfolio/sa.png', url: 'https://github.com/dhanushs11/BashScripts/blob/main/kubernetes-service-account.sh', note: 'identities for workloads' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const visible = filter === 'All' ? projects : projects.filter(p => p.cat === filter)

  return (
    <section id="portfolio" className="py-28 bg-paper-warm border-y border-black/10">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeader index="04" title="Selected work" note="mostly CloudFormation, some k8s, some bash" />

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

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
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
                className="group block break-inside-avoid bg-paper border border-black/10 overflow-hidden hover:border-black/30 transition-colors duration-300"
              >
                <div className="overflow-hidden border-b border-black/10">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02] grayscale-0"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow text-accent mb-2">{p.cat}</p>
                      <h3 className="font-serif text-2xl leading-tight text-ink">{p.title}</h3>
                    </div>
                    <FiArrowUpRight
                      size={22}
                      className="text-muted group-hover:text-accent transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-hand text-lg text-accent-warm mt-2">{p.note}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
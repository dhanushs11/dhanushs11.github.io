import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const categories = ['All', 'Kubernetes', 'CloudFormation', 'Bash', 'Docs & PoCs']

const projects = [
  {
    title: 'API Gateway',
    category: 'CloudFormation',
    description: 'CloudFormation template to deploy an API Gateway on AWS',
    link: 'https://github.com/dhanushs11/CloudFormation/blob/main/api-gateway.yaml',
    img: '/portfolio/api-gateway.png',
  },
  {
    title: 'Asymmetric KMS',
    category: 'CloudFormation',
    description: 'CloudFormation template to deploy an asymmetric KMS on AWS',
    link: 'https://github.com/dhanushs11/CloudFormation/blob/main/asymmetric-kms.yaml',
    img: '/portfolio/asymmetric-kms.jpg',
  },
  {
    title: 'Elastic File System',
    category: 'CloudFormation',
    description: 'CloudFormation template to deploy an EFS on AWS',
    link: 'https://github.com/dhanushs11/CloudFormation/blob/main/efs.yaml',
    img: '/portfolio/efs.png',
  },
  {
    title: 'EKS + RDS',
    category: 'CloudFormation',
    description: 'CloudFormation template to deploy an EKS and RDS on AWS',
    link: 'https://github.com/dhanushs11/CloudFormation/blob/main/main.yaml',
    img: '/portfolio/eks.jpg',
  },
  {
    title: 'Network Load Balancer',
    category: 'CloudFormation',
    description: 'CloudFormation template to deploy a Network Load Balancer on AWS',
    link: 'https://github.com/dhanushs11/CloudFormation/blob/main/nlb-cfn.yaml',
    img: '/portfolio/elb.jpg',
  },
  {
    title: 'OpenSearch',
    category: 'CloudFormation',
    description: 'CloudFormation template to deploy an OpenSearch cluster on AWS',
    link: 'https://github.com/dhanushs11/CloudFormation/blob/main/opensearch.yaml',
    img: '/portfolio/os.jpg',
  },
  {
    title: 'EKS Autoscaling Alarms',
    category: 'CloudFormation',
    description: 'CloudFormation template for alarm mechanism during EKS autoscaling',
    link: 'https://github.com/dhanushs11/CloudFormation/blob/main/pod-autoscale-alarms.yaml',
    img: '/portfolio/cw.png',
  },
  {
    title: 'Redis',
    category: 'CloudFormation',
    description: 'CloudFormation template to deploy a Redis cluster on AWS',
    link: 'https://github.com/dhanushs11/CloudFormation/blob/main/redis.yaml',
    img: '/portfolio/redis.png',
  },
  {
    title: 'Valkey',
    category: 'CloudFormation',
    description: 'CloudFormation template to deploy a Valkey cluster on AWS',
    link: 'https://github.com/dhanushs11/CloudFormation/blob/main/valkey.yaml',
    img: '/portfolio/valkey.png',
  },
  {
    title: 'Fluentbit Logging for EKS',
    category: 'Kubernetes',
    description: 'Enabling Fluentbit logging for EKS cluster on AWS',
    link: 'https://github.com/dhanushs11/Kubernetes/tree/main/Fargate%20logging%20using%20fluentbit',
    img: '/portfolio/fargate.png',
  },
  {
    title: 'Helm Chart Sample',
    category: 'Kubernetes',
    description: 'Helm chart for Kubernetes',
    link: 'https://github.com/dhanushs11/Kubernetes/tree/main/helm-chart-app',
    img: '/portfolio/helm.jpg',
  },
  {
    title: 'Kubernetes Dashboard',
    category: 'Kubernetes',
    description: 'Kubernetes Dashboard for EKS cluster',
    link: 'https://github.com/dhanushs11/Kubernetes/tree/main/k8s-dash',
    img: '/portfolio/dash.png',
  },
  {
    title: 'K8s Metrics with ADOT',
    category: 'Kubernetes',
    description: 'Kubernetes Metrics using ADOT for EKS cluster',
    link: 'https://github.com/dhanushs11/Kubernetes/tree/main/k8s-metrics',
    img: '/portfolio/adot.png',
  },
  {
    title: 'EKS Encryption',
    category: 'Bash',
    description: 'EKS Encryption script',
    link: 'https://github.com/dhanushs11/BashScripts/blob/main/encrypt-eks.sh',
    img: '/portfolio/ekskms.png',
  },
  {
    title: 'RDS Backup',
    category: 'Bash',
    description: 'Bash script to back up an RDS database',
    link: 'https://github.com/dhanushs11/BashScripts/blob/main/psql-dump-create.sh',
    img: '/portfolio/psql.png',
  },
  {
    title: 'K8s Service Account',
    category: 'Bash',
    description: 'Script to create a service account for Kubernetes',
    link: 'https://github.com/dhanushs11/BashScripts/blob/main/kubernetes-service-account.sh',
    img: '/portfolio/sa.png',
  },
]

const badgeColors = {
  CloudFormation: { bg: 'rgba(255,153,0,0.12)', text: '#ff9900', border: 'rgba(255,153,0,0.3)' },
  Kubernetes: { bg: 'rgba(50,108,229,0.12)', text: '#6ea8fe', border: 'rgba(50,108,229,0.3)' },
  Bash: { bg: 'rgba(40,167,69,0.12)', text: '#56d364', border: 'rgba(40,167,69,0.3)' },
  'Docs & PoCs': { bg: 'rgba(139,148,158,0.12)', text: '#8b949e', border: 'rgba(139,148,158,0.3)' },
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="portfolio" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-text-muted text-lg font-semibold">Some samples of my work. FYI, I have a lot of fun doing it!</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-primary border-primary text-white'
                  : 'border-white/15 text-text-light hover:bg-white/5 hover:border-white/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group bg-[#151c2e] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <span
                    className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 border"
                    style={{
                      backgroundColor: badgeColors[project.category]?.bg,
                      color: badgeColors[project.category]?.text,
                      borderColor: badgeColors[project.category]?.border,
                    }}
                  >
                    {project.category}
                  </span>
                  <h4 className="text-base font-bold text-white mb-1">{project.title}</h4>
                  <p className="text-text-muted text-sm mb-4 leading-relaxed">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#21262d] hover:bg-[#30363d] border border-white/10 hover:border-white/20 text-text-light hover:text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <FiGithub size={14} /> View on GitHub <FiExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

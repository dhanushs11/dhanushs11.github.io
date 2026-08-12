import { FiArrowRight } from 'react-icons/fi'

const words = ['DevSecOps', 'Cloud', 'Kubernetes', 'AWS', 'Azure', 'Terraform', 'CI/CD', 'Docker', 'Observability']

export default function Marquee() {
  const row = [...words, ...words]

  return (
    <div className="bg-ink text-paper py-5 overflow-hidden border-y border-black/20">
      <div className="marquee-track flex whitespace-nowrap">
        {[0, 1].map(half => (
          <div key={half} className="flex items-center shrink-0">
            {row.map((word, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="text-hand text-3xl px-6">{word}</span>
                <FiArrowRight size={16} className="text-accent-warm opacity-60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
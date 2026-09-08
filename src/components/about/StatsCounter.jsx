import { motion } from 'framer-motion'
import CountUp from '../CountUp'

const STATS = [
  { value: '10k', suffix: '+', label: 'Active Users' },
  { value: '20', suffix: '+', label: 'Trusted Across Industries' },
  { value: '500', suffix: '+', label: 'Teams Using the Platform' },
  { value: '99.9', suffix: '%', label: 'Uptime' },
]

export default function StatsCounter() {
  return (
    <section className="py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <ul className="grid list-none grid-cols-1 gap-6 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:gap-0 lg:divide-x">
          {STATS.map((stat, i) => (
            <motion.li
              key={stat.label}
              className={`px-8 ${i === 0 ? 'lg:first:pl-0' : ''} ${i === STATS.length - 1 ? '' : 'pb-8 lg:pb-0'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="mb-2 text-5xl font-medium text-gray-900">
                <CountUp value={stat.value} suffix={stat.suffix} duration={2} />
              </h3>
              <span className="text-xl text-gray-500">{stat.label}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

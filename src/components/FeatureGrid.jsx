import Reveal from './Reveal'

const FEATURES = [
  {
    image: '/images/features/feature-lg-1.png',
    title: 'Order & Transaction Insights',
    description:
      'Monitor order status, revenue changes, and activity logs in one place. Track orders, customers, and payment status with real-time updates.',
  },
  {
    image: '/images/features/feature-lg-2.png',
    title: 'CRM / User Platforms',
    description:
      "Manage clients, accounts, permissions, and activity logs. Build custom workflows tailored to your team's needs.",
  },
  {
    image: '/images/features/feature-lg-3.png',
    title: 'User Management System',
    description:
      'Create and manage user accounts with role-based permissions. Visualize KPIs, revenue, users, retention, and trends in one dashboard.',
  },
]

export default function FeatureGrid({ sectionClassName = 'py-28' }) {
  return (
    <section className={`bg-gray-50 ${sectionClassName}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <h2 className="mb-4 text-3xl font-medium -tracking-[1.9px] text-gray-900 lg:text-5xl">
              Everything You Need to Build a SaaS Product
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-gray-500">
              Discover powerful features of SaaSly including advanced analytics, team
              collaboration tools, and integrations to boost your productivity.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 0.1}
              className="rounded-2xl bg-white p-3 shadow-feature-card"
            >
              <div>
                <img src={feature.image} className="w-full rounded-xl" alt={feature.title} />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-xl font-medium text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import Reveal from './Reveal'

const USE_CASES = [
  {
    id: 1,
    title: 'Analytics SaaS',
    description: 'Visualize KPIs, revenue, users, retention, and trends.',
    image: '/images/features/feature-lg-1.png',
    activeBorder: 'border-[#388AF3]',
  },
  {
    id: 2,
    title: 'Ecommerce / Order Tools',
    description: 'Track orders, customers, and payment status.',
    image: '/images/features/feature-lg-2.png',
    activeBorder: 'border-[#62B682]',
  },
  {
    id: 3,
    title: 'CRM / User Platforms',
    description: 'Manage clients, accounts, permissions, and activity logs.',
    image: '/images/features/feature-lg-3.png',
    activeBorder: 'border-[#FEA947]',
  },
]

export default function UseCaseTabs() {
  const [active, setActive] = useState(1)

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-12 lg:flex-row">
          <Reveal className="lg:w-5/12">
            <h2 className="mb-4 text-4xl font-medium -tracking-[1.9px] text-gray-900 lg:text-5xl">
              Built for Multiple Use Cases
            </h2>
            <p className="text-base text-gray-500">
              Everything you need to manage data, users, and operations — designed with
              flexibility, clarity, and scalability in mind.
            </p>
            <ul className="mt-11 space-y-5">
              {USE_CASES.map((useCase) => (
                <li
                  key={useCase.id}
                  onClick={() => setActive(useCase.id)}
                  className={`cursor-pointer border-l-4 px-5 py-2.5 transition ${
                    active === useCase.id ? useCase.activeBorder : 'border-gray-100'
                  }`}
                >
                  <h3 className="mb-2 text-base font-medium text-gray-900">{useCase.title}</h3>
                  <p className="text-base text-gray-500">{useCase.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="lg:w-6/12">
            <div className="rounded-2xl bg-white p-3 shadow-feature-card">
              {USE_CASES.map((useCase) => (
                <img
                  key={useCase.id}
                  src={useCase.image}
                  alt={useCase.title}
                  className={`w-full rounded-xl transition-opacity duration-300 ${
                    active === useCase.id ? 'opacity-100' : 'hidden opacity-0'
                  }`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

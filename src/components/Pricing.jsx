import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const PLANS = [
  {
    name: 'Free',
    price: { monthly: 0, annually: 0 },
    description: 'For trying the product',
    features: [
      { text: 'Basic dashboard access', included: true },
      { text: 'Limited analytics', included: true },
      { text: 'Community support', included: true },
      { text: 'Up to 5 projects', included: true },
      { text: 'Core analytics', included: false },
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Starter',
    price: { monthly: 19, annually: 15 },
    description: 'For small teams',
    features: [
      { text: 'Full dashboard access', included: true },
      { text: 'Core analytics', included: true },
      { text: 'User management', included: true },
      { text: 'Order & activity tracking', included: true },
      { text: 'Standard support', included: true },
    ],
    cta: 'Choose Plan',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: { monthly: 49, annually: 39 },
    description: 'For growing teams to scale',
    badge: 'Popular',
    features: [
      { text: 'Advanced insights', included: true },
      { text: 'Unlimited users', included: true },
      { text: 'Billing & invoice manage', included: true },
      { text: 'Role-based permissions', included: true },
      { text: 'Priority support', included: true },
    ],
    cta: 'Choose Plan',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', annually: 'Custom' },
    description: 'For who need custom features',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'Custom workflows', included: true },
      { text: 'Advanced security controls', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom onboarding', included: true },
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M8.37605 2.7251L3.82605 7.2751L1.62396 5.07304"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  const formatPrice = (plan) =>
    plan.price.monthly === 'Custom' ? 'Custom' : `$${billing === 'monthly' ? plan.price.monthly : plan.price.annually}`

  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <h2 className="mb-4 text-5xl font-medium -tracking-[1.9px] text-gray-900">
              Simple and Flexible Pricing
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-9 text-base text-gray-500">
              Start small, grow confidently, and scale without friction — choose the plan
              that fits your team today.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative inline-flex rounded-full bg-gray-200 p-1">
              <button
                type="button"
                onClick={() => setBilling('monthly')}
                className={`relative z-10 cursor-pointer rounded-full px-3 py-2 font-mono text-sm font-medium transition-colors duration-300 ease-in-out ${
                  billing === 'monthly' ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                Monthly
                {billing === 'monthly' && (
                  <motion.div
                    layoutId="billing-mode-bg"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
              <button
                type="button"
                onClick={() => setBilling('annually')}
                className={`relative z-10 cursor-pointer rounded-full px-3 py-2 font-medium transition-colors duration-300 ease-in-out ${
                  billing === 'annually' ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                Annually{' '}
                <span className="rounded-full bg-green-500/10 px-2 py-1 font-mono text-sm text-green-600">
                  -20%
                </span>
                {billing === 'annually' && (
                  <motion.div
                    layoutId="billing-mode-bg"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </button>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PLANS.map((plan) => (
            <Reveal
              key={plan.name}
              as="article"
              className={`rounded-2xl bg-white p-5 ${
                plan.highlighted ? 'relative bg-cover bg-center ring-2 ring-indigo-500' : ''
              }`}
              style={plan.highlighted ? { backgroundImage: "url('/images/covers/pricing-card-bg.jpg')" } : {}}
            >
              {plan.badge && (
                <span className="absolute top-5 right-5 inline-flex h-6 items-center rounded-full bg-linear-to-br from-[#EDF0FF] to-white px-2 py-1 text-xs font-medium text-indigo-500 shadow-inner shadow-indigo-200/50">
                  {plan.badge}
                </span>
              )}
              <span className="mb-3 inline-flex h-6 items-center rounded-full bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800">
                {plan.name}
              </span>
              <p className="mb-8 font-mono text-sm text-gray-900">{plan.description}</p>
              <h3 className="mb-7 flex items-end text-5xl font-medium">
                {formatPrice(plan)}
                {typeof plan.price.monthly === 'number' && (
                  <span className="text-base text-gray-500">/month</span>
                )}
              </h3>
              <ul className="space-y-4 border-t border-dashed border-gray-200 py-7">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`flex items-center gap-2.5 text-sm ${
                      feature.included ? 'text-gray-700' : 'text-gray-400'
                    }`}
                  >
                    <span
                      className={`inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full ${
                        feature.included ? 'bg-indigo-500' : 'bg-gray-400'
                      }`}
                    >
                      <CheckIcon />
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-block w-full rounded-lg py-2.5 px-4 text-center text-base font-medium transition-colors duration-300 ease-in-out ${
                  plan.highlighted
                    ? 'border border-indigo-500 bg-indigo-500 text-white hover:bg-indigo-600'
                    : 'border border-gray-200 bg-gray-50 text-gray-800 hover:bg-gray-100'
                }`}
              >
                {plan.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

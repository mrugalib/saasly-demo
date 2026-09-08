import { useState } from 'react'
import { motion } from 'framer-motion'
import { CompareCheckIcon, CompareCrossIcon } from './icons/ComparisonIcons'

const PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: { monthly: '$0/mo', annually: '$0/mo' },
    buttonText: 'Started Free',
    buttonStyle: 'border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50',
  },
  {
    id: 'starter',
    name: 'Starter',
    price: { monthly: '$19/mo', annually: '$15/mo' },
    buttonText: 'Choose Plan',
    buttonStyle: 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm hover:shadow-md',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: { monthly: '$49/mo', annually: '$39/mo' },
    buttonText: 'Choose Plan',
    buttonStyle: 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm hover:shadow-md',
    isHighlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: { monthly: 'Custom', annually: 'Custom' },
    buttonText: 'Choose Plan',
    buttonStyle: 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm hover:shadow-md',
  },
]

const FEATURE_ROWS = [
  { name: 'Dashboard Access', values: { free: 'Basic', starter: 'Full', pro: 'Full', enterprise: 'Full' } },
  { name: 'Analytics', values: { free: 'Basic', starter: 'Standard', pro: 'Advanced', enterprise: 'Advanced' } },
  { name: 'Users', values: { free: 'Limited', starter: 'Limited', pro: 'Unlimited', enterprise: 'Unlimited' } },
  { name: 'Billing & Invoices', values: { free: false, starter: false, pro: true, enterprise: true } },
  { name: 'User Management', values: { free: true, starter: true, pro: true, enterprise: true } },
  { name: 'Role-Based Access', values: { free: false, starter: false, pro: true, enterprise: true } },
  { name: 'Integrations', values: { free: 'Limited', starter: 'Standard', pro: 'Advanced', enterprise: 'Custom' } },
  { name: 'API Access', values: { free: false, starter: false, pro: true, enterprise: true } },
  { name: 'Custom Workflows', values: { free: false, starter: false, pro: false, enterprise: true } },
  { name: 'Support', values: { free: 'Limited', starter: false, pro: true, enterprise: true } },
]

export default function PricingComparisonTable() {
  const [billing, setBilling] = useState('monthly')
  const [hoveredId, setHoveredId] = useState(null)

  const highlightBg = (planId) => (PLANS.find((p) => p.id === planId)?.isHighlighted ? 'bg-gray-50/80' : '')

  const isLastRow = (index) => index === FEATURE_ROWS.length - 1

  return (
    <section className="py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-5xl font-medium -tracking-[1.9px] text-gray-900">Compare our plans</h2>
          <p className="mb-9 text-base text-gray-500">
            There are many variations of available but the majority have suffered alteration in
            some form.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="overflow-x-auto pb-4">
            <table className="w-full min-w-[62.5rem] border-collapse text-left">
              <thead>
                <tr className="align-bottom">
                  <th className="w-1/4 whitespace-nowrap border-b border-gray-100 px-6 py-6">
                    <div>
                      <p className="mb-5 text-lg font-medium text-gray-900">Pricing tier</p>
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
                              layoutId="billing-mode-bg-comparison"
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
                          Annually
                          <span className="ml-1 rounded-full bg-green-500/10 px-2 py-1 font-mono text-sm text-green-600">
                            -20%
                          </span>
                          {billing === 'annually' && (
                            <motion.div
                              layoutId="billing-mode-bg-comparison"
                              className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm"
                              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                          )}
                        </button>
                      </div>
                    </div>
                  </th>
                  {PLANS.map((plan) => (
                    <th
                      key={plan.id}
                      onMouseEnter={() => setHoveredId(plan.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`w-[18%] cursor-pointer border-b border-gray-100 px-6 py-6 transition-all duration-300 ease-in-out ${
                        plan.isHighlighted ? 'rounded-t-2xl' : ''
                      } ${highlightBg(plan.id)}`}
                    >
                      <div className="space-y-5">
                        <div className="flex items-center gap-1 text-center">
                          <span className="text-lg font-medium text-gray-900">{plan.name}</span>
                          <span className="text-sm font-normal text-gray-500">{plan.price[billing]}</span>
                        </div>
                        <a
                          href="#"
                          className={`block w-full rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-all duration-300 ease-in-out ${plan.buttonStyle}`}
                        >
                          {plan.buttonText}
                        </a>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {FEATURE_ROWS.map((row, rowIndex) => (
                  <tr
                    key={row.name}
                    className={`group transition-colors duration-300 ease-in-out hover:bg-gray-50/30 ${
                      isLastRow(rowIndex) ? 'rounded-b-2xl' : ''
                    }`}
                  >
                    <td className="px-6 py-5 text-sm font-medium text-gray-900">{row.name}</td>
                    {PLANS.map((plan) => {
                      const value = row.values[plan.id]
                      const roundBottom = isLastRow(rowIndex) && plan.isHighlighted
                      return (
                        <td
                          key={plan.id}
                          onMouseEnter={() => setHoveredId(plan.id)}
                          onMouseLeave={() => setHoveredId(null)}
                          className={`px-6 py-5 text-center transition-all duration-300 ease-in-out ${highlightBg(
                            plan.id
                          )} ${roundBottom ? 'rounded-b-2xl' : ''}`}
                        >
                          {typeof value === 'boolean' ? (
                            value ? (
                              <CompareCheckIcon />
                            ) : (
                              <CompareCrossIcon />
                            )
                          ) : (
                            <span
                              className={`text-sm text-gray-500 ${
                                hoveredId === plan.id ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {value}
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

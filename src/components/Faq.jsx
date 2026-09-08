import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'
import { PlusIcon, MinusIcon } from './icons/AccordionIcons'

const FAQS = [
  {
    id: 1,
    question: 'What is this platform used for?',
    answer:
      'This platform is designed to support dashboard-based SaaS products, including analytics, CRM, finance tools, internal systems, and other data-driven applications.',
  },
  {
    id: 2,
    question: 'Can I customize the UI and components?',
    answer:
      'Our analysis accuracy depends on document quality and complexity. We achieve 95%+ accuracy for standard documents with consistent formatting.',
  },
  {
    id: 3,
    question: 'Do I need technical skills to use this template?',
    answer:
      'Our analysis accuracy depends on document quality and complexity. We achieve 95%+ accuracy for standard documents with consistent formatting.',
  },
  {
    id: 4,
    question: 'Is this suitable for any SaaS niche?',
    answer:
      'Our analysis accuracy depends on document quality and complexity. We achieve 95%+ accuracy for standard documents with consistent formatting.',
  },
  {
    id: 5,
    question: 'Does the platform support integrations?',
    answer:
      'Our analysis accuracy depends on document quality and complexity. We achieve 95%+ accuracy for standard documents with consistent formatting.',
  },
]

export default function Faq() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId((current) => (current === id ? null : id))

  return (
    <section className="py-10 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <Reveal className="lg:w-5/12">
            <h2 className="mb-10 text-4xl font-medium -tracking-[1.9px] text-gray-900 lg:mb-20 lg:text-5xl">
              Frequently Asked Questions
            </h2>

            <div className="rounded-2xl bg-gray-50 p-5 sm:max-w-xs">
              <div className="mb-2 flex -space-x-3 items-center">
                <img src="/images/users/user-1.png" className="size-9 rounded-full ring-2 ring-white" alt="User 1" />
                <img src="/images/users/user-2.png" className="size-9 rounded-full ring-2 ring-white" alt="User 2" />
                <img src="/images/users/user-3.png" className="size-9 rounded-full ring-2 ring-white" alt="User 3" />
              </div>
              <p className="mb-6 text-gray-700">
                Have more questions? Reach out to our friendly support team
              </p>
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-4 py-2.5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-indigo-600"
              >
                Contact Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:w-6/12">
            <div>
              {FAQS.map((item) => {
                const isOpen = openId === item.id
                return (
                  <div key={item.id} className="border-b border-gray-200 py-6">
                    <div
                      className="flex cursor-pointer items-center justify-between"
                      onClick={() => toggle(item.id)}
                    >
                      <h3 className="text-lg font-medium -tracking-[0.18px] text-gray-900">
                        {item.question}
                      </h3>
                      <button className="ml-4 shrink-0 cursor-pointer text-gray-950">
                        {isOpen ? <MinusIcon /> : <PlusIcon />}
                      </button>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className="mt-4 text-gray-700">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

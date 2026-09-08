import { EmailIcon, LocationIcon } from '../icons/ContactIcons'
import CustomSelect from './CustomSelect'

const SUBJECT_OPTIONS = [
  { label: 'Sales Inquiry', value: 'sales' },
  { label: 'Support Request', value: 'support' },
  { label: 'Partnership', value: 'partnership' },
  { label: 'General Question', value: 'general' },
]

function InfoCard({ icon, gradient, label, description, value }) {
  return (
    <div className="rounded-xl bg-white p-7">
      <div
        className="inline-flex size-12 items-center justify-center rounded-xl"
        style={{ background: gradient }}
      >
        {icon}
      </div>
      <div className="mt-21">
        <span className="text-sm font-medium text-gray-900">{label}</span>
        <p className="mb-4 text-sm text-gray-500">{description}</p>
        <a href="#" className="text-base font-semibold text-gray-900">
          {value}
        </a>
      </div>
    </div>
  )
}

function FormField({ label, required, full = false, children }) {
  return (
    <div className={full ? 'col-span-full' : 'col-span-1'}>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputClasses =
  'w-full rounded-lg border border-gray-300 px-4 py-3 ring-offset-0 focus:border-indigo-500 focus:outline-0 focus:ring-3 focus:ring-indigo-500/30'

const textareaClasses =
  'w-full h-35 rounded-lg border border-gray-300 px-4 py-3.5 ring-offset-0 focus:border-indigo-500 focus:outline-0 focus:ring-3 focus:ring-indigo-500/30'

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-10 pt-24 lg:py-20 lg:pt-45">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-medium -tracking-[1.9px] text-gray-900 lg:text-5xl">
            Get in touch
          </h2>
          <p className="text-base text-gray-500 lg:px-16">
            Have questions, need support, or want to explore how the platform fits your
            product? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <InfoCard
                icon={<EmailIcon />}
                gradient="radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0) 0%, #E4EFFD 100%)"
                label="Email"
                description="Speak to our friendly team"
                value="hello@saasly.com"
              />
              <InfoCard
                icon={<LocationIcon />}
                gradient="radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0) 0%, #FDF6EF 100%)"
                label="Office Address"
                description="Visit our office today"
                value="2972 Westheimer Rd. Santa Ana, Illinois 85486"
              />
            </div>
          </div>

          <div className="lg:col-span-8 xl:col-span-9">
            <div className="rounded-2xl bg-white p-7 shadow-feature-card">
              <form action="#">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Full Name" required full>
                    <input type="text" placeholder="Gustavo Dokidis" className={inputClasses} />
                  </FormField>
                  <FormField label="Email" required>
                    <input type="text" placeholder="hello@saasly.com" className={inputClasses} />
                  </FormField>
                  <FormField label="Phone" required>
                    <input type="text" placeholder="(123) 456 7890" className={inputClasses} />
                  </FormField>
                  <div className="col-span-full">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <CustomSelect options={SUBJECT_OPTIONS} label="" required={false} />
                  </div>
                  <FormField label="Message" required full>
                    <textarea placeholder="Enter your message here..." className={textareaClasses} />
                  </FormField>
                </div>
              </form>
              <div className="mt-6">
                <button className="block w-full cursor-pointer rounded-lg bg-indigo-500 px-4 py-2.5 text-center text-base font-medium text-white transition duration-300 hover:bg-indigo-600">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

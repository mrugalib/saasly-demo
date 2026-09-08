import { DiscordIcon, XIcon, TelegramIcon, InstagramIcon, ArrowUpIcon } from './icons/SocialIcons'

const PRODUCT_LINKS = ['Home', 'Features', 'Pricing', 'Use Case']
const COMPANY_LINKS = ['About', 'Contact', 'Privacy Policy', 'Terms & Conditions']
const SOCIAL_LINKS = [
  { label: 'Discord', icon: DiscordIcon },
  { label: 'X(Twitter)', icon: XIcon },
  { label: 'Telegram', icon: TelegramIcon },
  { label: 'Instagram', icon: InstagramIcon },
]

function FooterNavColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-6 text-lg font-medium text-gray-800">{title}</h3>
      <nav className="space-y-5">
        {links.map((label) => (
          <a
            key={label}
            href="#"
            className="block text-base text-gray-700 transition-colors duration-300 ease-in-out hover:text-indigo-500"
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6">
        <div className="pt-10 lg:pt-18">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-4/12">
              <a href="#" className="mb-10 inline-block lg:mb-20">
                <img src="/images/logo/footer-logo.svg" alt="Saasly Logo" />
              </a>
              <p className="text-base text-gray-500 lg:pr-10">
                A flexible SaaS platform designed to help teams manage data, users, and
                operations through a clean and scalable dashboard.
              </p>
            </div>

            <div className="lg:ml-auto lg:w-6/12">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10">
                <FooterNavColumn title="Product" links={PRODUCT_LINKS} />
                <FooterNavColumn title="Company" links={COMPANY_LINKS} />
                <div className="flex lg:justify-end">
                  <div>
                    <h3 className="mb-6 text-lg font-medium text-gray-800">Social</h3>
                    <nav className="space-y-5">
                      {SOCIAL_LINKS.map(({ label, icon: Icon }) => (
                        <a
                          key={label}
                          href="#"
                          className="flex items-center gap-2 text-gray-700 transition-colors duration-300 ease-in-out hover:text-indigo-500"
                        >
                          <Icon />
                          {label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-10 pb-10 sm:flex-row lg:pt-20">
          <p className="text-base text-gray-500">
            © {new Date().getFullYear()} Saasly. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-gray-700">
            Back to top
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex size-7 cursor-pointer items-center justify-center rounded-full bg-indigo-500 text-white transition duration-300 ease-in-out hover:bg-indigo-600"
            >
              <ArrowUpIcon />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

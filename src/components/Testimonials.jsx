import Reveal from './Reveal'
import { StarIcon } from './icons/StarIcon'

function Stars() {
  return (
    <div className="mb-3 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="text-yellow-400" size={13} />
      ))}
    </div>
  )
}

function Byline({ name, role }) {
  return (
    <div>
      <h4 className="text-base font-medium text-gray-900">{name}</h4>
      <span className="text-sm text-gray-500">{role}</span>
    </div>
  )
}

const SMALL_TESTIMONIALS = [
  {
    avatar: '/images/testimonial/avatar-3.png',
    quote:
      'This template adapts perfectly to different use cases. We used it for analytics and customer management without friction.',
    name: 'Erin Philips',
    role: 'UX Lead, DataLoop',
  },
  {
    avatar: '/images/testimonial/avatar-4.png',
    quote: 'Clear structure, clean code, and a modern design language. Ideal for scalable SaaS product.',
    name: 'Erin Philips',
    role: 'UX Lead, DataLoop',
  },
  {
    avatar: '/images/testimonial/avatar-5.png',
    quote:
      'Perfect balance between flexibility and simplicity. Works for startups and enterprise tools alike.',
    name: 'Erin Philips',
    role: 'UX Lead, DataLoop',
  },
]

export default function Testimonials() {
  return (
    <section className="py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal>
            <h2 className="mb-4 text-4xl font-medium -tracking-[1.9px] text-gray-900 lg:text-5xl">
              Trusted by Expert Product Teams Worldwide
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base text-gray-500">
              Teams use this platform to launch faster, manage data smarter, and deliver
              better user experiences.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-5 rounded-2xl bg-gray-50 p-5">
          <Reveal className="col-span-12 lg:col-span-6">
            <div className="h-full rounded-xl bg-white p-6">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex-1">
                  <img
                    src="/images/testimonial/avatar-1.png"
                    className="h-72 w-full rounded-lg object-cover"
                    alt=""
                  />
                </div>
                <div className="flex w-5/12 flex-col justify-between">
                  <div>
                    <Stars />
                    <p className="text-base text-gray-700">
                      The dashboard layout is incredibly clean and easy to customize. We
                      launched our SaaS MVP weeks faster than expected.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Byline name="Erin Philips" role="UX Lead, DataLoop" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 lg:col-span-6">
            <div className="flex h-full flex-col justify-between rounded-xl bg-white p-6">
              <div>
                <Stars />
                <p className="text-base text-gray-700">
                  Everything feels thoughtfully designed. The reusable components saved us
                  from rebuilding common UI patterns.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <img src="/images/testimonial/avatar-2.png" className="size-11 rounded-lg" alt="" />
                <Byline name="Erin Philips" role="UX Lead, DataLoop" />
              </div>
            </div>
          </Reveal>

          {SMALL_TESTIMONIALS.map((t, i) => (
            <Reveal key={t.avatar} delay={0.2 + i * 0.1} className="col-span-12 md:col-span-4">
              <div className="flex h-full flex-col justify-between rounded-xl bg-white p-6">
                <div>
                  <Stars />
                  <p className="text-base text-gray-700">{t.quote}</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <img src={t.avatar} className="size-11 rounded-lg" alt="" />
                  <Byline name={t.name} role={t.role} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

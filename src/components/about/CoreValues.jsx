import Reveal from '../Reveal'
import {
  SimplicityIcon,
  FlexibilityIcon,
  ReliabilityIcon,
  CustomerFocusedIcon,
} from '../icons/CoreValueIcons'

const VALUES = [
  {
    icon: SimplicityIcon,
    gradient: 'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0) 0%, #E4EFFD 100%)',
    title: 'Simplicity',
    description: 'We believe great software should feel intuitive and effortless.',
  },
  {
    icon: FlexibilityIcon,
    gradient: 'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0) 0%, #FDF6EF 100%)',
    title: 'Flexibility',
    description: 'Our platform adapts to different workflows, products, and teams.',
  },
  {
    icon: ReliabilityIcon,
    gradient: 'radial-gradient(50% 50% at 50% 50%, rgba(239,253,245,0) 0%, #EFFDF5 100%)',
    title: 'Reliability',
    description: 'Consistency, performance, and stability are built every feature.',
  },
  {
    icon: CustomerFocusedIcon,
    gradient: 'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0) 0%, #FCEDFF 100%)',
    title: 'Customer-Focused',
    description: 'We design with real user needs at the center of every decision.',
  },
]

export default function CoreValues() {
  return (
    <section className="bg-gray-50 pt-20 pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <Reveal className="mx-auto mb-16 max-w-lg text-center">
          <h2 className="mb-4 text-3xl font-medium -tracking-[1.9px] text-gray-900 lg:text-5xl">
            Our Core Values
          </h2>
          <p className="text-base text-gray-500">
            The principles that guide how we design, build, and improve our product every day.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={0.1 + i * 0.1} className="rounded-xl bg-white p-6">
              <div
                className="inline-flex size-12 items-center justify-center rounded-xl"
                style={{ background: value.gradient }}
              >
                <value.icon />
              </div>
              <div className="mt-14">
                <h4 className="mb-2 block text-xl font-semibold text-gray-900">{value.title}</h4>
                <p className="text-base text-gray-500">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

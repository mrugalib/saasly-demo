import Reveal from '../Reveal'
import { LinkedInIcon } from '../icons/LinkedInIcon'

const TEAM = [
  { image: '/images/team/team-1.jpg', name: 'Davis Vaccaro', role: 'Founder & CEO' },
  { image: '/images/team/team-2.jpg', name: 'Alex Morgan', role: 'Product Manager' },
  { image: '/images/team/team-3.jpg', name: 'Sophia Lee', role: 'Web Engineer' },
  { image: '/images/team/team-4.jpg', name: 'Davis Vaccaro', role: 'Product Designer' },
]

export default function TeamGrid() {
  return (
    <section className="bg-gray-50 pt-20 pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <Reveal className="mx-auto mb-16 max-w-lg text-center">
          <h2 className="mb-4 text-3xl font-medium -tracking-[1.9px] text-gray-900 lg:text-5xl">
            Meet the Team
          </h2>
          <p className="text-base text-gray-500">
            A group of designers, developers, and product thinkers passionate about building
            better software experiences.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={`${member.name}-${i}`} delay={0.1 + i * 0.1}>
              <img src={member.image} className="w-full rounded-xl object-cover" alt="" />
              <div className="mt-5 flex items-center justify-between px-3">
                <div>
                  <h3 className="text-base font-medium text-gray-900">{member.name}</h3>
                  <span className="text-sm text-gray-500">{member.role}</span>
                </div>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 ease-in-out hover:text-indigo-500"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

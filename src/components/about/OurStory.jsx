import { useState } from 'react'
import Reveal from '../Reveal'

export default function OurStory() {
  const [tab, setTab] = useState('mission')

  return (
    <section className="py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-11 lg:flex-row">
          <Reveal className="lg:w-1/2">
            <h2 className="mb-4 text-4xl font-medium -tracking-[1.9px] text-gray-900 lg:text-5xl">
              Our Story
            </h2>
            <p className="left-6 mb-9 text-base text-gray-500">
              We value collaboration, transparency, and continuous improvement. Our process
              focuses on understanding problems deeply before designing solutions — ensuring
              every feature serves a real purpose.
            </p>

            <div className="mt-9">
              <nav className="flex gap-2 border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => setTab('mission')}
                  className={`cursor-pointer border-b-2 p-3 text-base font-medium transition-colors duration-300 ease-in-out ${
                    tab === 'mission' ? 'border-indigo-500 text-indigo-500' : 'border-transparent text-gray-500'
                  }`}
                >
                  Our Mission
                </button>
                <button
                  type="button"
                  onClick={() => setTab('vision')}
                  className={`cursor-pointer border-b-2 p-3 text-base font-medium transition-colors duration-300 ease-in-out ${
                    tab === 'vision' ? 'border-indigo-500 text-indigo-500' : 'border-transparent text-gray-500'
                  }`}
                >
                  Vision
                </button>
              </nav>

              <div className="mt-6">
                {tab === 'mission' && (
                  <div>
                    <p className="mb-10 text-base text-gray-500">
                      To empower teams with flexible tools that make data, users, and
                      operations easier to manage.
                    </p>
                    <ul className="list-disc space-y-1 pl-5 text-base text-gray-500">
                      <li>Secure data handling</li>
                      <li>Role-based access control</li>
                      <li>Reliable infrastructure</li>
                      <li>Privacy-focused design</li>
                    </ul>
                  </div>
                )}
                {tab === 'vision' && (
                  <div>
                    <p className="text-base text-gray-500">
                      Our vision is to build scalable, secure, and intuitive platforms that
                      help teams grow faster with confidence.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:w-1/2">
            <img src="/images/about/about-4.jpg" className="rounded-[20px]" alt="Our story" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

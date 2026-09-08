import { useEffect, useRef } from 'react'
import Reveal from './Reveal'

const LOGOS = [
  '/images/clients/logo-1.svg',
  '/images/clients/logo-2.svg',
  '/images/clients/logo-3.svg',
  '/images/clients/logo-4.svg',
  '/images/clients/logo-5.svg',
]

export default function LogoMarquee() {
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      const clone = listRef.current.cloneNode(true)
      clone.setAttribute('aria-hidden', 'true')
      listRef.current.parentElement.appendChild(clone)
    }
  }, [])

  return (
    <section className="py-10 lg:py-20">
      <Reveal className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-10 text-base text-gray-700">
            Trusted by creators, teams and developers worldwide
          </p>
          <div className="mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)] inline-flex w-full flex-nowrap overflow-hidden">
            <ul
              ref={listRef}
              className="flex animate-infinite-scroll items-center justify-center [&_img]:max-w-none [&_li]:mx-5 md:justify-start"
            >
              {LOGOS.map((src, i) => (
                <li key={i}>
                  <img src={src} alt={`Client logo ${i + 1}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

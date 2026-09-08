import Reveal from '../Reveal'

export default function AboutHero() {
  return (
    <section className="bg-gray-50 pt-45 pb-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-medium -tracking-[1.9px] text-gray-900 lg:text-5xl">
            Building Products That Help Teams Work Smarter
          </h2>
          <p className="mb-9 text-base text-gray-500">
            We design and build flexible software solutions that simplify complex workflows
            and support growing businesses.
          </p>
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-500 px-4 py-2.5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-indigo-600"
          >
            View Product Demo
          </a>
        </Reveal>

        <Reveal delay={0.2} className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <img src="/images/about/about-1.jpg" className="w-full rounded-[20px] object-cover" alt="" />
          </div>
          <div className="order-1 grid grid-cols-1 gap-6 lg:order-2">
            <div>
              <img
                src="/images/about/about-2.jpg"
                className="h-full w-full rounded-[20px] object-cover"
                alt="About Image"
              />
            </div>
            <div className="rounded-[20px] bg-gray-900 p-7">
              <img src="/images/about/about-3.png" className="size-17.5 rounded-lg" alt="About Image" />
              <h3 className="mt-10 mb-2 text-2xl font-medium text-white">
                500+ Teams Using the Platform
              </h3>
              <p className="text-lg leading-7 text-white/70">
                We started with a simple goal — to create clean, scalable, and reusable
                systems for modern SaaS products. As teams grow, their tools should grow with
                them. That belief drives how we design our platform today.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

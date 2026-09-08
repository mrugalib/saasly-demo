import Reveal from './Reveal'

export default function CtaBanner() {
  return (
    <section
      style={{ background: "url('/images/covers/cta-bg.jpg') no-repeat center center / cover" }}
      className="relative bg-cover bg-center bg-no-repeat pt-28 pb-10"
    >
      <div className="absolute bottom-0 z-20 h-25 w-full bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fff_100%)]" />

      <div className="relative z-30 mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-4xl font-medium -tracking-[1.9px] text-gray-900 lg:text-5xl">
            Start Building Your SaaS Product Faster
          </h2>
          <p className="mb-9 text-base text-gray-500">
            Use a modern, flexible dashboard template that grows with your product.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-block h-11 rounded-lg bg-indigo-500 px-4 py-2.5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-indigo-600"
            >
              Get Started Now
            </a>
            <a
              href="#"
              className="inline-block h-11 rounded-lg border border-gray-200 px-4 py-2.5 text-base font-medium text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100"
            >
              View Live Demo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

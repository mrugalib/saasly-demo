import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      style={{ background: "url('/images/covers/hero.jpg') no-repeat center center / cover" }}
      className="relative bg-cover bg-center bg-no-repeat pt-30 lg:pt-50"
    >
      <div className="absolute bottom-0 z-20 h-25 w-full bg-[linear-gradient(0deg,#fff_50%,rgba(255,255,255,0)_100%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-xl text-center lg:max-w-4xl lg:px-4">
          <Reveal>
            <div className="mb-5 inline-flex h-8 items-center gap-2 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.7)_100%)] p-1 pr-2 backdrop-blur-[3.15px]">
              <div className="flex -space-x-3">
                <img src="/images/users/user-4.png" className="size-7 rounded-full ring ring-white" alt="" />
                <img src="/images/users/user-5.png" className="size-7 rounded-full ring ring-white" alt="" />
                <img src="/images/users/user-6.png" className="size-7 rounded-full ring ring-white" alt="" />
              </div>
              <p className="text-sm text-gray-700">Rated 4.97/5 from verified reviews</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mb-5 text-center text-4xl font-semibold lg:text-6xl">
              Empower Your Business With Smarter Insights
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mb-10 text-base text-gray-500 lg:px-10">
              A modern SaaS platform that helps teams track performance, manage customers,
              and make better decisions — all in one intuitive dashboard.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col items-center justify-center gap-4 pb-10 sm:flex-row lg:pb-20">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-4 py-2.5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-indigo-600"
              >
                Get Started Now
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-base font-medium text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.375 5.93126L6.375 18.0687C6.375 19.2416 7.66045 19.9607 8.6599 19.347L18.5433 13.2783C19.4967 12.6928 19.4967 11.3072 18.5433 10.7217L8.65989 4.65301C7.66045 4.03931 6.375 4.75844 6.375 5.93126Z"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                View Live Demo
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mx-auto max-w-[68.75rem] rounded-t-[26px] border border-white bg-[linear-gradient(180deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_100%)] p-3">
            <img src="/images/covers/hero-image.png" className="w-full rounded-t-[14px]" alt="" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

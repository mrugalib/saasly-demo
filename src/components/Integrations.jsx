import Reveal from './Reveal'
import {
  DockerIcon,
  GitLabIcon,
  ExcelIcon,
  NotionIcon,
  ChromeIcon,
  VSCodeIcon,
  GoogleDriveIcon,
  GitHubIcon,
  FigmaIcon,
  IndigoAppIcon,
  PayPalIcon,
} from './icons/IntegrationIcons'

function Tile({ className, children }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-white bg-white/50 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  )
}

const DIM = 'opacity-20'

const ROW_1 = [
  { key: 'r1-0', className: `hidden size-14 lg:size-18 lg:inline-flex ${DIM}` },
  { key: 'r1-1', className: `hidden size-14 lg:size-18 lg:inline-flex ${DIM}` },
  { key: 'docker', className: 'size-14 lg:size-18 hidden sm:inline-flex', icon: <DockerIcon /> },
  { key: 'gitlab', className: 'size-14 lg:size-18 inline-flex', icon: <GitLabIcon /> },
  { key: 'excel', className: 'size-14 lg:size-18 inline-flex', icon: <ExcelIcon /> },
  { key: 'notion', className: 'size-14 lg:size-18 inline-flex', icon: <NotionIcon /> },
  { key: 'chrome', className: 'size-14 lg:size-18 inline-flex', icon: <ChromeIcon /> },
  { key: 'vscode', className: 'size-14 lg:size-18 inline-flex', icon: <VSCodeIcon /> },
  { key: 'r1-8', className: `hidden size-18 lg:inline-flex ${DIM}` },
]

const ROW_2 = [
  { key: 'r2-0', className: `hidden size-18 lg:inline-flex ${DIM}` },
  { key: 'r2-1', className: `hidden size-14 lg:size-18 lg:inline-flex ${DIM}` },
  { key: 'r2-2', className: `hidden size-14 lg:size-18 lg:inline-flex ${DIM}` },
  { key: 'drive', className: 'size-14 lg:size-18 inline-flex', icon: <GoogleDriveIcon /> },
  { key: 'github', className: 'size-14 lg:size-18 inline-flex', icon: <GitHubIcon /> },
  { key: 'figma', className: 'size-14 lg:size-18 inline-flex', icon: <FigmaIcon /> },
  { key: 'indigo-app', className: 'size-14 lg:size-18 inline-flex', icon: <IndigoAppIcon /> },
  { key: 'paypal', className: 'size-14 lg:size-18 inline-flex', icon: <PayPalIcon /> },
  { key: 'r2-6', className: `hidden size-18 lg:inline-flex ${DIM}` },
  { key: 'r2-7', className: `hidden size-18 lg:inline-flex ${DIM}` },
]

export default function Integrations() {
  return (
    <section
      style={{ background: "url('/images/covers/integration-bg.jpg') no-repeat center center / cover" }}
      className="relative pt-10 pb-10 lg:pt-28 lg:pb-20"
    >
      <div className="absolute bottom-0 z-20 h-25 w-full bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#fff_100%)]" />

      <div className="relative z-30 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center lg:mb-16">
          <Reveal>
            <h2 className="mb-3 text-2xl font-medium -tracking-[1.9px] text-gray-900 lg:mb-4 lg:text-5xl">
              Connect With the Tools You Already Use
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm text-gray-500 lg:text-base">
              Seamlessly integrate with popular platforms to streamline workflows, sync data,
              and work faster — without switching tools.
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.2}
          className="mx-auto max-w-full space-y-4 overflow-hidden text-center mask-[linear-gradient(to_right,transparent_0,black_64px,black_calc(100%-64px),transparent_100%)] lg:mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)] lg:max-w-[64.5rem] lg:space-y-6"
        >
          <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
            {ROW_1.map((tile) => (
              <Tile key={tile.key} className={tile.className}>
                {tile.icon}
              </Tile>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
            {ROW_2.map((tile) => (
              <Tile key={tile.key} className={tile.className}>
                {tile.icon}
              </Tile>
            ))}
          </div>
        </Reveal>

        <div className="text-center">
          <a
            href="#"
            className="mt-10 inline-block rounded-lg bg-indigo-500 px-4 py-2.5 text-base font-medium text-white transition duration-300 hover:bg-indigo-600"
          >
            See All Integration
          </a>
        </div>
      </div>
    </section>
  )
}

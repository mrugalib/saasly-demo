import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/features', label: 'Features' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

function HamburgerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75L4 6.75C3.58579 6.75 3.25 6.41422 3.25 6ZM3.25 18C3.25 17.5858 3.58579 17.25 4 17.25L20 17.25C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75L4 18.75C3.58579 18.75 3.25 18.4142 3.25 18ZM4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75L20 12.75C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25L4 11.25Z"
        fill="#374151"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
        fill="#374151"
      />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onMouseDown(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isActive = (path) => (path === '/' ? location.pathname === '/' : location.pathname.startsWith(path))

  return (
    <header
      className={`left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'fixed top-0 py-3' : 'absolute top-8'
      }`}
    >
      <nav>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between rounded-[18px] bg-white backdrop-blur-md py-3 pr-3 pl-6 transition-all duration-300">
            <div>
              <Link to="/">
                <img src="/images/logo/nav-logo.svg" alt="Logo" />
              </Link>
            </div>

            <div className="hidden lg:block">
              <ul className="flex">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`inline-block px-3 py-3 transition-colors duration-300 ease-in-out ${
                        isActive(link.path) ? 'text-indigo-500' : 'text-gray-800 hover:text-indigo-500'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden gap-4 lg:flex">
              <a className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-base font-medium text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100">
                Login
              </a>
              <a className="rounded-lg bg-gray-950 px-4 py-2.5 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-gray-800">
                Start Free Trial
              </a>
            </div>

            <div className="flex lg:hidden">
              <button
                ref={buttonRef}
                onClick={() => setMenuOpen((open) => !open)}
                className="cursor-pointer"
                aria-label="Toggle menu"
              >
                {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div ref={menuRef} className="mt-3 rounded-[18px] bg-white p-6 lg:hidden">
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block px-3 py-2 transition-colors duration-300 ease-in-out ${
                        isActive(link.path) ? 'text-indigo-500' : 'text-gray-800 hover:text-indigo-500'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-3">
                <a className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-center text-base font-medium text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100">
                  Login
                </a>
                <a className="rounded-lg bg-gray-950 px-4 py-2.5 text-center text-base font-medium text-white transition duration-300 ease-in-out hover:bg-gray-800">
                  Start Free Trial
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

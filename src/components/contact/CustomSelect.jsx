import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '../icons/ContactIcons'

export default function CustomSelect({ options, label, required = false }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    function onMouseDown(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [])

  const choose = (option) => {
    setSelected(option)
    setOpen(false)
  }

  return (
    <div className="col-span-full">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative" ref={ref}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-3 text-left font-normal text-gray-700 ring-offset-0 transition duration-300 ease-in-out hover:border-gray-400 focus:border-indigo-500 focus:ring-3 focus:ring-indigo-500/30 focus:outline-0"
        >
          <span>{selected?.label || 'Select an option'}</span>
          <ChevronDownIcon
            className={`h-5 w-5 text-gray-500 transition-transform duration-300 ease-in-out ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>
        {open && (
          <div className="absolute top-full right-0 left-0 z-50 mt-2 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
            <div className="space-y-1 p-2">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => choose(option)}
                  className={`w-full cursor-pointer rounded-lg px-4 py-3 text-left font-normal transition duration-300 ease-in-out ${
                    selected?.value === option.value
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

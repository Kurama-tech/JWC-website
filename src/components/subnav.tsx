import { Fragment, JSX, Key, useState} from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useAppContext } from '@/store/store'
import Link from 'next/link'





const products = [
  { name: 'CCTV Cables', description: 'CCTV Cables', href: '#', icon: ChartPieIcon },
  { name: 'Co-axial Cables', description: 'Co-axial Cables', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Flexible Wires', description: 'Flexible Wires', href: '#', icon: FingerPrintIcon },
  { name: 'Hook-up Wires', description: 'Hook-up Wires', href: '#', icon: SquaresPlusIcon },
  { name: 'Microphone Cables', description: 'Microphone Cables', href: '#', icon: ArrowPathIcon },
  { name: 'Moulded Cords', description: 'Moulded Cords', href: '#', icon: ArrowPathIcon },
  { name: 'Multicore Power Cables', description: 'Multicore Power Cables', href: '#', icon: ArrowPathIcon },
  { name: 'Multicore Sheilded Wire', description: 'Multicore Sheilded Wire', href: '#', icon: ArrowPathIcon },
  { name: 'Multicore Unsheilded Wire', description: 'Multicore Unsheilded Wire', href: '#', icon: ArrowPathIcon },
  { name: 'Multimeter Test Prod Wires', description: 'Multimeter Test Prod Wires', href: '#', icon: ArrowPathIcon },
  { name: 'Speaker Wires', description: 'Speaker Wires', href: '#', icon: ArrowPathIcon },
  { name: 'Wire Harness', description: 'Wire Harness', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function BreadCrumbs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { state, setState } = useAppContext();
  

 
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">JWC</span>
            <img className="w-auto h-12 lg:h-20" src="https://firebasestorage.googleapis.com/v0/b/mamun-public.appspot.com/o/jwclogo.png?alt=media&token=120110d3-ec71-435a-9d40-c5c870bb3cb2" alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
       <Popover.Group className="hidden text-md lg:flex lg:gap-x-12">
       {/* <Popover className="relative">
        <Popover.Button className="flex items-center gap-x-1 leading-6 text-gray-900">
          Products
          <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 overflow-auto h-96">
              {state.mainItems.map((item: any) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="flex-auto">
                    <Link href="#" className="block font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </Link>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>  */}
      <Link href="/categories" className="leading-6 text-gray-900">
          Main Products
        </Link>
        <Link href="/products" className="leading-6 text-gray-900">
          Sub Products
        </Link>
       
      </Popover.Group>
      {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Contact <span aria-hidden="true">&rarr;</span>
      </Link>
    </div> */}
    </nav><Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">JWC India</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        Products
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true" />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                <Link
                  href="/categories"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Main Products
                </Link>
                <Link
                  href="/products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sub Products
                </Link>
              </div>
              
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

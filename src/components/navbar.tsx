import { Fragment, JSX, Key, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
    EnvelopeIcon,
    BuildingStorefrontIcon,
    RectangleStackIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useAppContext } from '@/store/store'
import Link from 'next/link'
import { addChildToParent } from '@/store/utils'
import { useRouter } from 'next/router';
import { URL } from 'url'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


const NestedMenu = ({ item }: { item: any }) => {
    const router = useRouter();
    const routeto = (id: string) => {
        router.push("/product/" + id)
    }

    return (
        <Disclosure as="div" className="-mx-3">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                        {item.name}
                        <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true" />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                        <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={"/product/" + item.id}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                            All {item.name}
                        </Disclosure.Button>
                        {item?.child?.map((value: any) => (
                            <Disclosure.Button
                                key={value.name}
                                as="a"
                                href={"/product/" + value.id}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                {value.name}
                            </Disclosure.Button>
                        ))}
                    </Disclosure.Panel></>)}
        </Disclosure>
    );
};

const callsToAction = [
    // { name: 'Categories', href: '/categories', icon: RectangleStackIcon },
    { name: 'All Products', href: '/products', icon: BuildingStorefrontIcon },
]



export default function NavBar({ data }: any) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [opened, setopened] = useState(false);
    const { state, setState } = useAppContext();
    const router = useRouter();

    const products2 = addChildToParent(data.items)

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const routeto = (id: string) => {
        router.push("/product/" + id)
    }

    const toggleNestedDropdown = () => {
        setIsNestedDropdownOpen(!isNestedDropdownOpen);
    };

    const toggleOpened = () => {
        setopened(!opened);
    };



    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">JWC</span>
                        <div className="flex">
                            <img className="w-auto h-12 lg:h-20" src="/jwclogo.png" alt="" />
                            <div className="border-r w-2 border-spacing-2 border-orange-600"></div>
                            <img className="px-1 h-12 w-auto lg:h-20" src="/push.png" alt="" />
                        </div>
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
                    <Link href="/" className="leading-6 text-gray-900">
                        Home
                    </Link>
                    <Popover className="relative">
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
                                    {products2?.map((item: any) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >{item?.child?.length > 0 ? (
                                            <Disclosure as="div" className="-mx-3">
                                                {({ open }) => (
                                                    <>
                                                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 font-semibold leading-7 hover:bg-gray-50">
                                                            {item.name}
                                                            <ChevronDownIcon
                                                                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                                aria-hidden="true" />
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className="mt-2 space-y-2">
                                                            <ul className="flex-auto">
                                                                <li key={"default-" + item.name}>
                                                                    <Popover.Button as={Link} className="block font-semibold text-gray-900" href={"/product/" + item.id}>
                                                                        All {item.name}

                                                                    </Popover.Button>
                                                                </li>
                                                                {item?.child?.map((value: any) => (

                                                                    <li key={"default-" + value.name}>
                                                                        <Popover.Button as={Link} className="block font-semibold text-gray-900" href={"/product/" + value.id}>
                                                                            {value.name}
                                                                        </Popover.Button>
                                                                    </li>

                                                                ))}
                                                            </ul>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ) : (
                                            <div className="flex-auto">
                                                <Popover.Button as={Link} href={"/product/" + item.id} className="block font-semibold text-gray-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Popover.Button>
                                            </div>
                                        )}

                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <Popover.Button as={Link}
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                            {item.name}
                                        </Popover.Button>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Link href="/#about" className="leading-6 text-gray-900">
                        About
                    </Link>
                    <Link href="/#contact" className="leading-6 text-gray-900">
                        Contact
                    </Link>

                </Popover.Group>
                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a
                        href='mailto:info@jwcindia.com'
                        className="rounded-md px-3.5 bg-orange-600 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                         <span><EnvelopeIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        info@jwcindia.com</span>
                    </a>
                </div> */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="mailto:info@jwcindia.com" className="text-sm font-semibold leading-3 text-gray-900 underline" style={{ display: "flex", alignItems: "center" }}>
                        info@jwcindia.com <span aria-hidden="true"><EnvelopeIcon className="px-2 h-5 flex-none" aria-hidden="true" /></span>
                    </a>
                </div>

            </nav><Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">JWC India</span>
                            <div className="flex">
                            <img className="w-auto h-12 lg:h-20" src="/jwclogo.png" alt="" />
                            <img className="h-12 w-auto lg:h-20" src="/push.png" alt="" />
                        </div>
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
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                Products
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true" />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {products2?.map((item: any) => (
                                                    <div key={item.id}>
                                                        {item?.child?.length <= 0 ? (
                                                            <Disclosure.Button
                                                                key={item.name}
                                                                as="a"
                                                                href={"/product/" + item.id}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                            >
                                                                {item.name}
                                                            </Disclosure.Button>
                                                        ) : (
                                                            <NestedMenu item={item} />
                                                        )}

                                                    </div>

                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    href="/products"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    All Products
                                </Link>
                                <Link
                                    href="/#about"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/#contact"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header >
    )
}

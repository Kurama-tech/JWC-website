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
    BuildingStorefrontIcon,
    RectangleStackIcon
} from '@heroicons/react/24/outline'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useAppContext } from '@/store/store'
import Link from 'next/link'
import { addChildToParent } from '@/store/utils'
import { useRouter } from 'next/router';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
interface Props {
    data?: any
    // any props th at come into the component
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
                        {item.child.map((item: any) => (
                            <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={"/product/" + item.id}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                {item.name}
                            </Disclosure.Button>
                        ))}
                    </Disclosure.Panel></>)}
        </Disclosure>
    );
};

const callsToAction = [
    { name: 'Categories', href: '/categories', icon: RectangleStackIcon },
    { name: 'Products', href: '/products', icon: BuildingStorefrontIcon },
]



export default function NavBar({ data }: Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { state, setState } = useAppContext();
    const router = useRouter();

    const products2 = addChildToParent(data?.items)

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
                            <Popover.Panel className="origin-top-right absolute right-0 mt-2 w-screen max-w-md rounded-md shadow-lg bg-white ring-1 ring-gray-900/5 ring-opacity-5">
                                <div className="py-1 max-h-96" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {products2?.map((item: any) => (
                                        <div  key={item.name}>
                                            {item.child.length <= 0 ? (
                                                <div
                                                    key={item.name}
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                >

                                                    <div className="flex-auto">
                                                        <Link href={"/product/" + item.id} className="block font-semibold text-gray-900">
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </Link>

                                                    </div>
                                                </div>
                                            ) :
                                                (
                                                    <Popover className="relative">
                                                        <Popover.Button
                                                            className="block w-full text-left px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 hover:text-gray-900"
                                                            onMouseEnter={toggleNestedDropdown}
                                                            onMouseLeave={toggleNestedDropdown}
                                                            onClick={(e) => { routeto(item.id) }}
                                                            role="menuitem"
                                                        >
                                                            {item.name}
                                                        </Popover.Button>
                                                        <Transition
                                                            show={isNestedDropdownOpen}
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0 translate-y-1"
                                                            enterTo="opacity-100 translate-y-0"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100 translate-y-0"
                                                            leaveTo="opacity-0 translate-y-1"
                                                        >
                                                            <Popover.Panel
                                                                className="origin-top-right absolute left-full mt-2 -ml-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                                                onMouseEnter={toggleNestedDropdown}
                                                                onMouseLeave={toggleNestedDropdown}
                                                            >
                                                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                                    {item.child.map((subitem: any) => (
                                                                        <div
                                                                            key={subitem.name}
                                                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                                        >

                                                                            <div className="flex-auto">
                                                                                <Link href={"/product/" + subitem.id} className="block font-semibold text-gray-900">
                                                                                    {subitem.name}
                                                                                    <span className="absolute inset-0" />
                                                                                </Link>

                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </Popover>
                                                )}

                                        </div>
                                    ))}
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
                    <Link href="/" className="leading-6 text-gray-900">
                        Home
                    </Link>
                </Popover.Group>
            </nav><Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">JWC India</span>
                            <img
                                className="h-8 w-auto"
                                src="https://firebasestorage.googleapis.com/v0/b/mamun-public.appspot.com/o/jwclogo.png?alt=media&token=120110d3-ec71-435a-9d40-c5c870bb3cb2"
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
                                                        {item.child.length <= 0 ? (
                                                            <Disclosure.Button
                                                                key={item.name}
                                                                as="a"
                                                                href={item.href}
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
                                    href="/categories"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Categories
                                </Link>
                                <Link
                                    href="/products"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Products
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
        </header>
    )
}
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
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSecondaryDropdownOpen, setIsSecondaryDropdownOpen] = useState(false);
    const router = useRouter();
    const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState(false);

    const products2 = addChildToParent(data.items);



    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const routeto = (id: string) => {
        router.push("/product/" + id);
    };

    const toggleNestedDropdown = () => {
        setIsNestedDropdownOpen(!isNestedDropdownOpen);
    };

    const triggers = {
        onMouseEnter: () => setIsDropdownOpen(true),
        onMouseLeave: () => setIsDropdownOpen(false),
      };

    /* const secondaryDropDownToggleOpen = (index: number) => {
      console.log("triggered mouseenter")
      const temp = isSecondaryDropdownOpen
      temp[index] = true
      setIsSecondaryDropdownOpen(temp)
    }

    const secondaryDropDownToggleClose = (index: number) => {
      const temp = isSecondaryDropdownOpen
      temp[index] = false
      setIsSecondaryDropdownOpen(temp)
    } */

    return (
        <header className="bg-white">
            <nav className="mx-auto flex items-center justify-between p-6 lg:px-8 " aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5" scroll={false}>
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
                <div className="hidden text-md lg:flex lg:gap-x-12">
                    <Link href="/#home" className="leading-6 text-gray-900" scroll={false}>
                        Home
                    </Link>
                    <Link href="/#about" className="leading-6 text-gray-900" scroll={false}>
                        About
                    </Link>
                    <Menu open={isDropdownOpen} handler={setIsDropdownOpen}>
                        <MenuHandler>
                            <Link
                                href='#'
                                className="flex items-center gap-x-1 leading-6 text-gray-900"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                Products
                                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                            </Link>
                        </MenuHandler>
                        <MenuList
                            className="max-h-62 text-gray-900"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >{products2?.map((item: any, index: number) => (
                            <div key={item.name}>
                                {item?.child?.length > 0 ? (
                                    <Menu placement="right-start" offset={15} allowHover>
                                    <MenuHandler>
                                        <MenuItem>{item.name}</MenuItem>
                                    </MenuHandler>
                                    <MenuList className="max-h-72 text-gray-900">
                                        <MenuItem>
                                        <Link href={'/product/' + item.id}>
                                                All {item.name}
                                            </Link>
                                        </MenuItem>
                                        {item?.child?.map((value: any) => (
                                            <MenuItem key={value.id}>
                                            <Link href={'/product/' + value.id}>
                                                {value.name}
                                            </Link>
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu>
                                ) : (
                                    <MenuItem>
                                     <Link href={'/product/' + item.id}>
                                                {item.name}
                                    </Link>
                                    </MenuItem>
                                )}
                            </div>
                        ))}
                           
                        </MenuList>
                    </Menu>

                    <Link href="/#enquire" className="leading-6 text-gray-900" scroll={false}>
                        Enquiry
                    </Link>
                </div>
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
                                    scroll={false}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/#enquire"
                                    scroll={false}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Enquiry
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header >
    )
}

import Footer from '@/components/footer'
import { ReactNode, useLayoutEffect } from 'react'
import BreadCrumbs from '@/components/subnav'


interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function SubLayout({ children }: Props) {

    

    return (
        <div className='mx-auto w-full max-w-screen-xl'>
            <header className='sticky top-0 z-50'>
                <BreadCrumbs />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
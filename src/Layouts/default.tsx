import NavBar from '@/components/navcompnent'
import Footer from '@/components/footer'
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function Layout({ children }: Props) {
    return (
        <>
            <header className='sticky top-0 z-50'>
                <NavBar />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
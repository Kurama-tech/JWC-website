import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { ReactNode, useLayoutEffect } from 'react'
import Banner from '@/components/banner'
import Footer2 from '@/components/footer2'
  

interface Props {
    children?: any
    // any props that come into the component
}

export default function Layout({ children }: Props) {
    return (
        <div className='mx-auto w-full max-w-screen-xl'>
            <header className='sticky top-0 z-50'>
                
                 <NavBar data={children.props.children.props} />
                
            </header>
            <main>{children}</main>
            
            <footer>
                <Footer2 />
                {/* <Footer /> */}
            </footer>
        </div>
    )
}
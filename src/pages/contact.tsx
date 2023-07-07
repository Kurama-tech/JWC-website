
import Head from 'next/head';
import Products from '@/components/products';

import Layout from '@/Layouts/default';
import AboutNew from '@/components/aboutnew';
import Services from '@/components/services';
import Contact from '@/components/contact';
import ContactForm from '@/components/contactform';
export default function ContactPage() {
    

    return (
        <>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Jai Wire & Cables offers a wide range of flexible wires, hookup wires, CCTV wires, co-axial cables, and shielded cables. We are a trusted manufacturer and supplier of high-quality wires and cables for various applications." />
              <meta name="keywords" content="wires and cables, flexible wires, hookup wires, CCTV wires, co-axial cable, shielded cable, electrical cables, industrial cables, power cables, communication cables, cable manufacturer, cable supplier, cable solutions" />
                <title>Jai Wires & Cables</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>

            <div id='contact'>
                  <Contact />
                  <ContactForm />
            </div>

            </main>
        </>
    )
}

ContactPage.getLayout = function (page: any) {
    return <Layout>{page}</Layout>;
};

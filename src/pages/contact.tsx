
import Head from 'next/head';
import Products from '@/components/products';

import Layout from '@/Layouts/default';
import AboutNew from '@/components/aboutnew';
import Services from '@/components/services';
import Contact from '@/components/contact';
import ContactForm from '@/components/contactform2';
import { fetchHomeData, fetchTables, fetchItemsData } from '@/requests/requests';
import { useAppContext } from '@/store/store';
import { trimChild, setDataChild, setDataParents } from '@/store/utils';
import { useEffect } from 'react';
export default function ContactPage({ homedata, items, tables }: any) {

    const { state, setState } = useAppContext();

    useEffect(() => {
      setState({
        ...state,
        homedata: homedata,
        items: items,
        itemsHome: trimChild(items),
        childItems: setDataChild(items),
        childHome: trimChild(setDataChild(items)),
        mainHome: trimChild(setDataParents(items)),
        mainItems: setDataParents(items),
        Tables: tables,
      });
    }, []);
  
    

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
                 {/*  <Contact /> */}
                  <ContactForm />
            </div>

            </main>
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const homedata = await fetchHomeData()
              const tables = await fetchTables()
  
              const items = await fetchItemsData()
              return {
                props: {homedata, items, tables},
    };
    
  }

ContactPage.getLayout = function (page: any) {
    return <Layout>{page}</Layout>;
};

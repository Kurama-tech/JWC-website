import Layout from '@/Layouts/default';
import Head from 'next/head';
import Hero from '@/components/hero';
import MainProducts, { MixedProducts } from '@/components/mainproducts';
import Products from '@/components/products';
import Services from '@/components/services';
import Contact from '@/components/contact';
import { fetchHomeData, fetchItemsData, fetchTables } from '@/requests/requests';
import About from '@/components/about';
import { useAppContext } from '@/store/store';
import { useEffect } from 'react';
import { trimChild, setDataChild, setDataParents, addChildToParent } from '@/store/utils';
import ContactForm from '@/components/contactform';
import AboutNew from '@/components/aboutnew';

export default function Home({ homedata, items, tables }: any) {

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


                <Hero data={homedata} />

                {/* <About /> */}


                {/* <HeroSection/>  */}

                <MixedProducts trim={true} />


                {/* <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <ShopByCategoryGrid/>
        </div> 

        <Products trim={true} />*/}

                {/* <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
         <ProdsGrid/>
        </div> */}

                <div id='about'>
                  <AboutNew />
                  <Services />
                </div>

                <div id='contact'>
                  <Contact />
                  <ContactForm />
                </div>

                {/*  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
         <OurServices/>
        </div> */}

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

            Home.getLayout = function (page: any) {
  return <Layout>{page}</Layout>;
};

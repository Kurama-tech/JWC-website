import Layout from '@/Layouts/default';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>JWC India</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <h1>helloooo</h1>
        </div>

      </main>
    </>
  )
}

Home.getLayout = function (page: any) {
  return <Layout>{page}</Layout>;
};

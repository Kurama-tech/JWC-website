import '@/styles/globals.css'
import { AppProps } from "next/app";
import { ReactNode } from 'react';
import { NextPage } from 'next';
import Layout from '@/Layouts/default';


type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};


export default function MyApp({ Component, pageProps }: Props) {
  const renderWithLayout =
    Component?.getLayout ||
    function (page: any) {
      return <Layout>{page}</Layout>;
    };

  return renderWithLayout(<Component {...pageProps} />);
}
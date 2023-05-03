import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Head from 'next/head';

interface Props {
  pageTitle: string;
  children?: ReactNode;
}

function PrimaryLayout(props: Props) {
  const { pageTitle, children } = props;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className='grid min-h-screen grid-rows-primary-layout'>
        <Header />
        <main className='container mx-auto my-4 px-6'>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default PrimaryLayout;

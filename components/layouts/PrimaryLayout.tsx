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
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PrimaryLayout;

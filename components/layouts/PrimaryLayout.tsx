import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface Props {
  children?: ReactNode;
}

function PrimaryLayout(props: Props) {
  const { children } = props;

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default PrimaryLayout;

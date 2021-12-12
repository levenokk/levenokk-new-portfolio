import Head from 'next/head';
import React from 'react';

import { Footer, FormSection, Header, UpButton } from '../../components';
import { MainSection } from './MainSection/MainSection';

export default function Works() {
  return (
    <>
      <Head>
        <title>Максим Строило - web разработчик | работы</title>
      </Head>
      <Header />
      <MainSection />
      <FormSection isBackground />
      <Footer />
      <UpButton />
    </>
  );
}

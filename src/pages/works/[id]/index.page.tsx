import React from 'react';

import { Footer, FormSection, Header, UpButton } from '../../../components';
import { MainSection } from './MainSection/MainSection';
import { SimilarWorksSection } from './SimilarWorksSection/SimilarWorksSection';

export default function Work() {
  return (
    <>
      <Header />
      <MainSection />
      <SimilarWorksSection />
      <FormSection />
      <Footer />
      <UpButton />
    </>
  );
}

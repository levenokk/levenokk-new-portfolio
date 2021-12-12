import React from 'react';

import { Footer, FormSection, Header, UpButton } from '../../../components';
import { SimilarWorksSection } from './SimilarWorksSection/SimilarWorksSection';

export default function Work() {
  return (
    <>
      <Header />
      <SimilarWorksSection />
      <FormSection />
      <Footer />
      <UpButton />
    </>
  );
}

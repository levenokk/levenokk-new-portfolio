import { useTheme } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { animateScroll } from 'react-scroll';

import { Footer, FormSection, Header, UpButton } from '../../components';
import {
  ResumeEntityResponse,
  WorkEntityResponseCollection,
} from '../../graphql/generated/graphql';
import { AboutSection } from './AboutSection/AboutSection';
import { MainSection } from './MainSection/MainSection';
import { PortfolioSection } from './PortfolioSection/PortfolioSection';

type Props = {
  pageData: WorkEntityResponseCollection;
  resumeData: ResumeEntityResponse;
};

export default function Home({ pageData, resumeData }: Props) {
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.to && router?.query?.to === 'about') {
      const elem = document.querySelector('[name="about"]') as HTMLElement;

      if (elem) {
        animateScroll.scrollTo(elem?.offsetTop);
      }
    }
  }, [router]);

  return (
    <>
      <Head>
        <meta name='theme-color' content={theme.palette.background.default} />
        <title>Максим Строило - web разработчик</title>
      </Head>
      <Header />
      <MainSection />
      <AboutSection resumeData={resumeData} />
      <PortfolioSection works={pageData?.data} />
      <FormSection />
      <Footer resumeData={resumeData} works={pageData?.data?.slice(0, 3)} />
      <UpButton />
    </>
  );
}

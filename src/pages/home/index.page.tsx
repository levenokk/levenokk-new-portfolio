import { useTheme } from '@mui/material';
import Head from 'next/head';

import { Footer, FormSection, Header, UpButton } from '../../components';
import { AboutSection } from './AboutSection/AboutSection';
import { MainSection } from './MainSection/MainSection';
import { PortfolioSection } from './PortfolioSection/PortfolioSection';

export default function Home() {
  const theme = useTheme();

  const color = theme.palette.background.default;
  return (
    <>
      <Head>
        <meta name='theme-color' content={color} />
        <title>Максим Строило - web разработчик</title>
      </Head>
      <Header />
      <MainSection />
      <AboutSection />
      <PortfolioSection />
      <FormSection />
      <Footer />
      <UpButton />
    </>
  );
}

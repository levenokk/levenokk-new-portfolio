import { Footer, Header, Layout } from '../../components';
import { AboutSection } from './AboutSection/AboutSection';
import { FormSection } from './FormSection/FormSection';
import { MainSection } from './MainSection/MainSection';
import { PortfolioSection } from './PortfolioSection/PortfolioSection';

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <AboutSection />
      <PortfolioSection />
      <FormSection />
      <Footer />
    </>
  );
}

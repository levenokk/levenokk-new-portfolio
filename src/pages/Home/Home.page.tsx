import { Header, Layout } from '../../components';
import { AboutSection } from './AboutSection/AboutSection';
import { FormSection } from './FormSection/FormSection';
import { MainSection } from './MainSection/MainSection';
import { PortfolioSection } from './PortfolioSection/PortfolioSection';

export default function Home() {
  return (
    <Layout>
      <Header />
      <MainSection />
      <AboutSection />
      <PortfolioSection />
      <FormSection />
    </Layout>
  );
}

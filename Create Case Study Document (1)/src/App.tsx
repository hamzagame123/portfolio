import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { UserResearch } from './components/UserResearch';
import { DesignPrinciples } from './components/DesignPrinciples';
import { UserJourney } from './components/UserJourney';
import { BeforeAfter } from './components/BeforeAfter';
import { Features } from './components/Features';
import { TechPivot } from './components/TechPivot';
import { DesignJourney } from './components/DesignJourney';
import { WebApp } from './components/WebApp';
import { Screenshots } from './components/Screenshots';
import { Challenges } from './components/Challenges';
import { Results } from './components/Results';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import mainScreenshot from 'figma:asset/cd6b5bfc39fc369b349f1604a7d6dbe3e73cfb7a.png';
import settingsScreenshot from 'figma:asset/7776b2e3d5c09fa5c797f97d8effe7a1e48169c1.png';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Hero />
      <Overview />
      <UserResearch />
      <DesignPrinciples />
      <UserJourney />
      <BeforeAfter />
      <Features />
      <TechPivot />
      <DesignJourney />
      <WebApp />
      <Challenges />
      <Screenshots 
        mainScreenshot={mainScreenshot}
        settingsScreenshot={settingsScreenshot}
      />
      <Results />
      <CallToAction />
      <Footer />
    </div>
  );
}
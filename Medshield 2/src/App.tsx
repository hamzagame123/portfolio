import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { UserResearch } from './components/UserResearch';
import { DesignPrinciples } from './components/DesignPrinciples';

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

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50" style={{ paddingTop: '64px' }}>
      <TopNav />
      <section id="overview">
        <Hero />
        <Overview />
      </section>
      <section id="research">
        <UserResearch />
      </section>
      <section id="design">
        <DesignPrinciples />

        <BeforeAfter />
        <TechPivot />
        <DesignJourney />
      </section>
      <section id="features">
        <Features />
        <WebApp />
        <Challenges />
        <Screenshots />
      </section>
      <section id="results">
        <Results />
        <CallToAction />
      </section>
      <Footer />
    </div>
  );
}
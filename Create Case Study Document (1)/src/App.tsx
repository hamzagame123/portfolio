import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { DesignJourney } from './components/DesignJourney';
import { WebApp } from './components/WebApp';
import { Results } from './components/Results';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import './reading.css';

export default function App() {
  return <div className="case-study min-h-screen bg-neutral-50">
    <TopNav />
    <section id="overview"><Hero /><Overview /></section>
    <section id="design"><DesignJourney /></section>
    <section id="features"><WebApp /></section>
    <section id="results"><Results /><CallToAction /></section>
    <Footer />
  </div>;
}

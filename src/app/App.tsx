import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { GitHub } from './components/GitHub';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div style={{ background: 'var(--p-bg)', color: 'var(--p-text)', fontFamily: "'Syne', sans-serif", overflowX: 'hidden' }}>
      {/* Noise overlay */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 999, opacity: 0.4,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
      }} />
      <Header />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <GitHub />
      <Contact />
      <Footer />
    </div>
  );
}

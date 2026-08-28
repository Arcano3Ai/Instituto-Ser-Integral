import Navbar from './components/Navbar';
import SystemicPhysics from './components/SystemicPhysics';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Quotes from './components/Quotes';
import Features from './components/Features';
import Services from './components/Services';
import Timeline from './components/Timeline';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <main className="app-main">
      <SystemicPhysics />
      <Navbar />
      <Hero />
      <Philosophy />
      <Quotes />
      <Features />
      <Services />
      <Timeline />
      <Resources />
      <Testimonials />
      <Newsletter />
      <FAQ />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default App;

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyMarquee } from './components/CompanyMarquee';
import { Introduction } from './components/Introduction';
import { CompanyShowcase } from './components/CompanyShowcase';

import { Philosophy } from './components/Philosophy';
import { ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-text-light">
      <Navbar />
      <Hero />
      <CompanyMarquee />
      <Introduction />
      <CompanyShowcase />

      <Philosophy />
      <ContactFooter />
    </div>
  );
}

export default App;

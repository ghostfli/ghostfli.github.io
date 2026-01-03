import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { CircuitBackground } from './components/CircuitBackground';
import { CircuitPattern } from './components/CircuitPattern';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      <CircuitPattern />
      <CircuitBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2026 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
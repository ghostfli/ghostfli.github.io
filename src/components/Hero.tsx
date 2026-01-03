import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-lg shadow-blue-500/50">
            <span className="text-5xl">👨‍💻</span>
          </div>
        </div>

        <h1 className="text-white mb-4">
          Hi, I'm <span className="text-blue-400">Your Name</span>
        </h1>
        <h2 className="text-gray-300 mb-6">Software Engineer</h2>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          I build exceptional digital experiences with a focus on clean code, scalable
          architecture, and user-centric design. Passionate about creating innovative
          solutions that make a difference.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
          >
            Get In Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-500/10 transition-colors"
          >
            View Resume
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={28} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="text-gray-500 hover:text-blue-400 transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
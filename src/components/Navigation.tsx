import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBooksClick = () => {
    navigate('/books');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleProjectsClick = () => {
    navigate('/projects');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleHomeClick = () => {
    navigate('/');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div className={`px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 border-slate-700/50 shadow-2xl shadow-cyan-500/10' 
          : 'bg-slate-800/60 border-slate-600/30 shadow-lg'
      }`}>
        <div className="flex items-center space-x-6">
          <button
            onClick={handleHomeClick}
            className="text-lg font-bold text-white hover:text-cyan-300 transition-colors duration-300"
          >
            Me
          </button>
          <div className="hidden md:flex items-center space-x-4">
            {[
              { name: 'Education', action: () => scrollToSection('education') },
              { name: 'Experience', action: () => scrollToSection('experience') },
              { name: 'Skills', action: () => scrollToSection('skills') },
              { name: 'Extracurricular', action: () => scrollToSection('extracurricular') },
              { name: 'Projects', action: handleProjectsClick },
              { name: 'Books', action: handleBooksClick },
              { name: 'Contact', action: () => scrollToSection('contact') }
            ].map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 transform px-3 py-1.5 rounded-full hover:bg-cyan-500/20 text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

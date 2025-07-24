import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check which section is currently in view
      if (location.pathname === '/') {
        const sections = ['education', 'experience', 'case-comp', 'community', 'skills'];
        const scrollPosition = window.scrollY + 200; // Offset for better detection
        
        let currentSection = 'home';
        
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              currentSection = sectionId;
              break;
            }
          }
        }
        
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

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



  const handleHomeClick = () => {
    navigate('/');
    setActiveSection('home');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const getNavItemStyle = (sectionId: string) => {
    const isActive = activeSection === sectionId || 
      (location.pathname === '/projects' && sectionId === 'projects') ||
      (location.pathname === '/awards' && sectionId === 'awards');
    
    return `text-gray-300 transition-all duration-300 transform px-3 py-1.5 rounded-full text-sm font-medium ${
      isActive 
        ? 'text-primary bg-primary/20 scale-105 shadow-lg shadow-primary/25 border border-primary/30' 
        : 'hover:text-white hover:scale-105 hover:bg-primary/10'
    }`;
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div className={`px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 border-slate-700/50 shadow-2xl shadow-primary/10' 
          : 'bg-slate-800/60 border-slate-600/30 shadow-lg'
      }`}>
        <div className="flex items-center space-x-6">
          <button
            onClick={handleHomeClick}
            className={`text-lg font-bold transition-all duration-300 px-3 py-1.5 rounded-full ${
              activeSection === 'home' 
                ? 'text-primary bg-primary/20 shadow-lg shadow-primary/25 border border-primary/30' 
                : 'text-white hover:text-primary'
            }`}
          >
            Me
          </button>
          <div className="hidden md:flex items-center space-x-4">
            {[
              { name: 'Education', action: () => scrollToSection('education'), id: 'education' },
              { name: 'Experience', action: () => scrollToSection('experience'), id: 'experience' },
              { name: 'Awards', action: () => scrollToSection('case-comp'), id: 'case-comp' },
              { name: 'Community', action: () => scrollToSection('community'), id: 'community' },
              { name: 'Skills', action: () => scrollToSection('skills'), id: 'skills' },
              { name: 'Projects', action: () => navigate('/projects'), id: 'projects' },
              { name: 'Awards', action: () => navigate('/awards'), id: 'awards' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className={getNavItemStyle(item.id)}
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

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      } else if (location.pathname === '/projects') {
        setActiveSection('projects');
      } else if (location.pathname === '/awards') {
        setActiveSection('awards');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call immediately to set initial state
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

  const getCurrentSectionName = () => {
    if (location.pathname === '/projects') return 'Projects';
    if (location.pathname === '/awards') return 'Awards';
    
    switch (activeSection) {
      case 'education': return 'Education';
      case 'experience': return 'Experience';
      case 'case-comp': return 'Case Comp';
      case 'community': return 'Community';
      case 'skills': return 'Skills';
      default: return 'Me';
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
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
            <div className="flex items-center space-x-4">
              {[
                { name: 'Education', action: () => scrollToSection('education'), id: 'education' },
                { name: 'Experience', action: () => scrollToSection('experience'), id: 'experience' },
                { name: 'Case Comp', action: () => scrollToSection('case-comp'), id: 'case-comp' },
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
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 right-4 z-50">
        <div className={`flex items-center space-x-3 px-4 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/90 border-slate-700/50 shadow-2xl shadow-primary/10' 
            : 'bg-slate-800/60 border-slate-600/30 shadow-lg'
        }`}>
          <span className="text-primary font-bold text-lg">{getCurrentSectionName()}</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-xl overflow-hidden">
            <button
              onClick={() => {
                handleHomeClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-white hover:bg-primary/20 hover:text-primary transition-colors"
            >
              Me
            </button>
            {[
              { name: 'Education', action: () => scrollToSection('education') },
              { name: 'Experience', action: () => scrollToSection('experience') },
              { name: 'Case Comp', action: () => scrollToSection('case-comp') },
              { name: 'Community', action: () => scrollToSection('community') },
              { name: 'Skills', action: () => scrollToSection('skills') },
              { name: 'Projects', action: () => navigate('/projects') },
              { name: 'Awards', action: () => navigate('/awards') }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  item.action();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-white hover:bg-primary/20 hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;

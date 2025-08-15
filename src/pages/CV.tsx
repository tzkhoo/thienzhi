import { ArrowLeft, Download, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CV = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(true); // Default to mobile for safety

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
      const isSmallScreen = window.innerWidth < 1024; // Increased threshold
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      setIsMobile(isMobileDevice || isSmallScreen || isTouchDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative">
      <div className="relative z-10 p-6">
        <button 
          onClick={() => navigate('/')}
          className="fixed top-6 left-6 flex items-center space-x-2 px-4 py-2 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-full text-gray-300 hover:text-white transition-all duration-300 z-50"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-slate-700/50">
              <h1 className="text-2xl md:text-3xl font-bold text-white text-center">Thien Zhi KHOO - Curriculum Vitae</h1>
            </div>
            
            {/* Mobile-friendly CV display */}
            {isMobile ? (
              <div className="p-4 md:p-6 text-center">
                <div className="bg-slate-800/50 rounded-lg p-6 md:p-8 mb-6">
                  <Eye className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-lg md:text-xl font-semibold text-white mb-2">📱 Mobile Optimized View</h2>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">
                    Mobile browsers have restrictions for displaying PDFs inline. Choose an option below:
                  </p>
                  <div className="flex flex-col gap-3 max-w-sm mx-auto">
                    <a 
                      href="/ThienZhi_CV.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg text-sm"
                      onClick={(e) => {
                        // Fallback for blocked popups
                        setTimeout(() => {
                          window.location.href = "/ThienZhi_CV.pdf";
                        }, 100);
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Open PDF in Browser
                    </a>
                    <a 
                      href="/ThienZhi_CV.pdf" 
                      download="ThienZhi_KHOO_CV.pdf"
                      className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary/25 text-sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF to Device
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    💡 Tip: If buttons don't work, try using a different browser or desktop version
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="relative w-full h-[80vh]">
                  <iframe
                    src="/ThienZhi_CV.pdf"
                    className="w-full h-full"
                    title="Thien Zhi KHOO - CV"
                  />
                </div>
                
                <div className="p-6 border-t border-slate-700/50 text-center">
                  <a 
                    href="/ThienZhi_CV.pdf" 
                    download="ThienZhi_KHOO_CV.pdf"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary/25"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
import { ArrowLeft, Download, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CV = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
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
              <div className="p-6 text-center">
                <div className="bg-slate-800/50 rounded-lg p-8 mb-6">
                  <Eye className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-xl font-semibold text-white mb-2">View on Mobile</h2>
                  <p className="text-gray-300 mb-6">
                    For the best viewing experience on mobile, please download the CV or open it in a new tab.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a 
                      href="/ThienZhi_CV.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View CV in New Tab
                    </a>
                    <a 
                      href="/ThienZhi_CV.pdf" 
                      download="ThienZhi_KHOO_CV.pdf"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary/25"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </a>
                  </div>
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
import { ArrowLeft, ExternalLink, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CV = () => {
  const navigate = useNavigate();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

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
              <h1 className="text-3xl font-bold text-white text-center">Thien Zhi KHOO - Curriculum Vitae</h1>
            </div>
            
            {isMobile ? (
              <div className="flex flex-col items-center justify-center gap-6 py-16 px-6 text-center">
                <p className="text-gray-300 text-lg">PDF preview is not supported on mobile browsers.</p>
                <a
                  href="/ThienZhi_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open CV
                </a>
                <a
                  href="/ThienZhi_CV.pdf"
                  download="ThienZhi_KHOO_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            ) : (
              <div className="relative w-full h-[80vh]">
                <iframe
                  src="/ThienZhi_CV.pdf"
                  className="w-full h-full"
                  title="Thien Zhi KHOO - CV"
                />
              </div>
            )}
            
            {!isMobile && (
              <div className="p-6 border-t border-slate-700/50 text-center">
                <a 
                  href="/ThienZhi_CV.pdf" 
                  download="ThienZhi_KHOO_CV.pdf"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary/25"
                >
                  Download CV
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
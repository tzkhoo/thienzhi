import { projectsData } from "@/data/projects-data";
import { useNavigate } from "react-router-dom";

// Import local images
import KarkaramImg from "@/assets/Karkaram.jpg";
import KiranImg from "@/assets/Kiran.png";

const Projects = () => {
  const navigate = useNavigate();
  
  // Show only first 3 projects on homepage
  const featuredProjects = projectsData.slice(0, 3);

  const getImageSrc = (imagePath: string) => {
    // Handle local asset paths
    if (imagePath.includes('Karkaram.jpg')) return KarkaramImg;
    if (imagePath.includes('Kiran.png')) return KiranImg;
    // Return external URLs as-is
    return imagePath;
  };

  const handleShowAllProjects = () => {
    navigate('/projects');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredProjects.map((project) => (
            <div 
              key={project.title}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden h-48 bg-slate-700/30">
                <img 
                  src={getImageSrc(project.image)}
                  alt={project.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-cyan-500/80 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-slate-600/50 text-gray-400 rounded text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{project.role}</span>
                  <span>{project.period}</span>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Projects Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleShowAllProjects}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/25"
          >
            Show All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

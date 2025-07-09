import { userInfo } from "@/data/user-data";

// Import local images
import RoboticsImg from "@/assets/Robotics Team.png";
import AffinityImg from "@/assets/Affinity.png";
import ProjectMeloImg from "@/assets/Project Melo.jpg";

const Extracurricular = () => {
  const getImageSrc = (imagePath: string) => {
    // Handle local asset paths
    if (imagePath.includes('Robotics Team.png')) return RoboticsImg;
    if (imagePath.includes('Affinity.png')) return AffinityImg;
    if (imagePath.includes('Project Melo.jpg')) return ProjectMeloImg;
    // Return external URLs as-is
    return imagePath;
  };

  return (
    <section id="extracurricular" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          Community Engagement
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {userInfo.co_curricular_activities.map((activity) => (
            <div 
              key={activity.title}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden h-48 bg-slate-700/30">
                <img 
                  src={getImageSrc(activity.image)}
                  alt={activity.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {activity.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {activity.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{activity.role}</span>
                  <span>{activity.period}</span>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a 
                    href={activity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular; 
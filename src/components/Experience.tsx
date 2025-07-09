import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { userInfo } from "@/data/user-data";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Experience
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My professional and academic work experience
            </p>
          </div>

          <div className="space-y-8">
            {userInfo.work_experience.map((exp, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-white text-xl mb-1">{exp.role}</CardTitle>
                      <CardDescription className="text-cyan-300 text-lg">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-300 font-semibold">{exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

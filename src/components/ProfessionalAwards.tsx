import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { userInfo } from "@/data/user-data";

const ProfessionalAwards = () => {
  const navigate = useNavigate();
  
  // Show only the first 3 awards
  const featuredAwards = userInfo.certifications_achievements.slice(0, 3);

  const handleShowAllAwards = () => {
    navigate('/awards');
  };

  return (
    <section id="awards" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Professional Awards
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Recognition for academic excellence and professional achievements
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {featuredAwards.map((award, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-xl mb-2">{award.title}</CardTitle>
                  <CardDescription className="text-cyan-300 text-lg">
                    {award.issuer}
                  </CardDescription>
                  <p className="text-gray-300 font-semibold">
                    {award.date || award.period}
                  </p>
                </CardHeader>
                {award.details && (
                  <CardContent>
                    <p className="text-gray-300">{award.details}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleShowAllAwards}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
            >
              Show All Awards
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalAwards;
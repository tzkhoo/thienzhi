import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { userInfo } from "@/data/user-data";
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';

const Awards = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-yellow-dark via-gradient-yellow-mid to-gradient-yellow-dark relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-cyan-400 mr-3" />
                  <h1 className="text-4xl md:text-6xl font-bold text-white">
                    All Professional Awards
                  </h1>
                </div>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Complete collection of my academic and professional achievements
                </p>
                <Button 
                  onClick={handleBackToHome}
                  variant="outline"
                  className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {userInfo.certifications_achievements.map((award, index) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
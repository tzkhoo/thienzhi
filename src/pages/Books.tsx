import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { bookData } from '@/data/book-data';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';

const Books = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      <Navigation />
      <AnimatedBackground />
      <div className="relative z-10">
        {/* Header */}
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center mb-6">
              <Book className="w-8 h-8 text-cyan-400 mr-3" />
              <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
                My Reading List
              </h1>
            </div>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Books that have shaped my thinking
            </p>
          </div>
        </div>

        {/* Books Content */}
        <div className="container mx-auto px-6 pb-20">
          <div className="max-w-7xl mx-auto space-y-12">
            {bookData.authors.map((author, authorIndex) => (
              <div key={authorIndex} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-cyan-500/30 pb-2">
                  {author.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {author.books.map((book, bookIndex) => (
                    <Card key={bookIndex} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 flex flex-col justify-center">
                      <CardHeader className="text-center">
                        <CardTitle className="text-white text-lg">{book}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-cyan-500/30 pb-2">
                Other Notable Reads
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookData.otherReads.map((book, bookIndex) => (
                  <Card key={bookIndex} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 flex flex-col justify-center">
                    <CardHeader className="text-center">
                      <CardTitle className="text-white text-lg">{book.title}</CardTitle>
                      <CardDescription className="text-cyan-300">
                        by {book.author}
                      </CardDescription>
                    </CardHeader>
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

export default Books;

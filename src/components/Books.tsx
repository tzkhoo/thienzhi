
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book } from 'lucide-react';

const Books = () => {
  const bookCategories = [
    {
      title: "Computer Science Fundamentals",
      books: [
        {
          title: "Introduction to Algorithms",
          author: "Thomas H. Cormen",
          rating: 5,
          review: "Essential for understanding algorithmic thinking and complexity analysis."
        },
        {
          title: "Clean Code",
          author: "Robert C. Martin",
          rating: 5,
          review: "Changed how I approach writing maintainable and readable code."
        },
        {
          title: "Design Patterns",
          author: "Gang of Four",
          rating: 4,
          review: "Great foundation for understanding software architecture patterns."
        }
      ]
    },
    {
      title: "Web Development",
      books: [
        {
          title: "JavaScript: The Good Parts",
          author: "Douglas Crockford",
          rating: 4,
          review: "Helped me understand JavaScript's core concepts and best practices."
        },
        {
          title: "You Don't Know JS",
          author: "Kyle Simpson",
          rating: 5,
          review: "Deep dive into JavaScript fundamentals and advanced concepts."
        }
      ]
    },
    {
      title: "System Design & Architecture",
      books: [
        {
          title: "Designing Data-Intensive Applications",
          author: "Martin Kleppmann",
          rating: 5,
          review: "Excellent for understanding distributed systems and data architecture."
        },
        {
          title: "System Design Interview",
          author: "Alex Xu",
          rating: 4,
          review: "Practical approach to system design problems and solutions."
        }
      ]
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="books" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Book className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Books I've Read
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of books that have shaped my understanding of computer science and software development
            </p>
          </div>

          <div className="space-y-12">
            {bookCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-purple-500/30 pb-2">
                  {category.title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.books.map((book, bookIndex) => (
                    <Card key={bookIndex} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="text-white text-lg">{book.title}</CardTitle>
                        <CardDescription className="text-purple-300">
                          by {book.author}
                        </CardDescription>
                        <div className="flex items-center space-x-1">
                          {renderStars(book.rating)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {book.review}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Currently Reading</h3>
              <div className="max-w-md mx-auto">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">The Pragmatic Programmer</CardTitle>
                    <CardDescription className="text-purple-300">
                      by David Thomas & Andrew Hunt
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      Learning practical approaches to software development and craftsmanship.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;

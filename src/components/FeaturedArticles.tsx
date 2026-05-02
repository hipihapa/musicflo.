import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Clock, User, Eye } from 'lucide-react';

import img1 from "../assets/20.jpg"
import img2 from "../assets/1.jpeg"
import img3 from "../assets/15.jpeg"


const FeaturedArticles = () => {
  const articles = [
    {
      id: 1,
      title: "The Rise of a Star: How passion led to a successful music career",
      
      description: "Simon Kumangye a young sensational gospel artsist is set to release a soundtrack. CAN'T WAIT!🔥",
      author: "Sarah Akuffo",
      readTime: "1 day ago",
      category: "Trends",
      image: img1,
      featured: true,
      views: "3.5K"
    },
    {
      id: 2,
      title: "AfroGosple Jams: Fire Festival is back again in 2025",
      description: "Come with your dancing boots and enjoy moments from this music festival. SIGN UP NOW!",
      author: "Emma Thompson",
      readTime: "10hrs ago",
      category: "Events",
      image: img3,
      featured: false,
      views: "15.7K"
    },
     {
      id: 3,
      title: "Fraternity Festival: Togetherness and sound 2025",
      description: "A deep dive into the latest synthwave masterpiece that's captivating listeners globally.",
      author: "Alfred Boakye",
      readTime: "5 months ago",
      category: "Review",
      image: img2,
      featured: false,
      views: "8.2K"
    },
  ];

  return (
    <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="fade-in text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">Stories</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Dive into the latest insights, reviews, and stories from the music world
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-2 lg:items-stretch">
        {/* Featured Article — spans both rows so its height matches the two cards on the right */}
        <div className="scale-in flex min-h-0 lg:row-span-2 lg:col-start-1 lg:row-start-1">
          <Card className="group flex h-full w-full min-h-0 flex-col overflow-hidden border-gray-700 bg-dark-card/80 backdrop-blur-sm transition-all duration-300 hover:border-accent-teal/50">
            <div className="relative shrink-0 overflow-hidden">
              <img 
                src={articles[0].image} 
                alt={articles[0].title}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 lg:h-72"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-gradient-to-r from-accent-teal to-accent-green text-white">
                  Featured
                </Badge>
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-dark-bg/60 backdrop-blur-sm px-2 py-1 rounded-full">
                <Eye className="h-3 w-3 text-gray-300" />
                <span className="text-xs text-gray-300">{articles[0].views}</span>
              </div>
            </div>
            <CardHeader className="flex flex-1 flex-col">
              <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
                <Badge variant="outline" className="border-gray-600 text-gray-300">
                  {articles[0].category}
                </Badge>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {articles[0].readTime}
                </span>
              </div>
              <CardTitle className="text-2xl lg:text-3xl text-white leading-tight group-hover:text-accent-teal transition-colors">
                {articles[0].title}
              </CardTitle>
              <CardDescription className="flex-1 text-lg text-gray-300">
                {articles[0].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto shrink-0">
              <div className="flex items-center gap-2 text-gray-400">
                <User className="h-4 w-4" />
                <span>By {articles[0].author}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Articles — one grid row each so combined height drives the featured column */}
        {articles.slice(1).map((article, index) => (
          <div
            key={article.id}
            className={cn(
              "scale-in flex min-h-0 lg:col-start-2",
              index === 0 ? "lg:row-start-1" : "lg:row-start-2"
            )}
          >
            <Card className="group flex h-full min-h-0 w-full flex-col overflow-hidden border-gray-700 bg-dark-card/80 backdrop-blur-sm transition-all duration-300 hover:border-accent-teal/50 sm:flex-row">
                <div className="relative h-48 shrink-0 overflow-hidden sm:h-full sm:w-48 sm:self-stretch">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-dark-bg/60 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Eye className="h-3 w-3 text-gray-300" />
                      <span className="text-xs text-gray-300">{article.views}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {article.category}
                        </Badge>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-accent-teal transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-2 text-gray-400">
                        <User className="h-4 w-4" />
                        <span>By {article.author}</span>
                      </div>
                    </CardContent>
                  </div>
              </Card>
            </div>
          ))}
        </div>
    </section>
  );
};

export default FeaturedArticles;

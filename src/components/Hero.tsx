
import { Button } from '@/components/ui/button';
import { Play, TrendingUp, Users, Music } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-bg to-dark-card">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0YWRlODAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the
            <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent"> Future </span>
            of Music
          </h1>
          <p className="text-xl md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your premier destination for discovering emerging artists, promoting incredible music, and staying updated with the hottest concerts in Ghana.
          </p>
        </div>

        <div className="fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#artists">
            <Button className="bg-gradient-to-r from-accent-teal to-accent-green hover:from-accent-teal/80 hover:to-accent-green/80 text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
           >
            <Play className="mr-2 h-5 w-5" />
            Explore Music
          </Button>
          </a>
          <Button variant="outline" className="border-accent-teal text-accent-teal hover:bg-accent-teal hover:text-white font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300">
            Submit Your Track
          </Button>
        </div>

        {/* Stats */}
        <div className="scale-in grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-8 w-8 text-accent-teal mr-2" />
              <span className="text-3xl font-bold text-white">7K+</span>
            </div>
            <p className="text-gray-300">Artists Promoted</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Music className="h-8 w-8 text-accent-green mr-2" />
              <span className="text-3xl font-bold text-white">1M+</span>
            </div>
            <p className="text-gray-300">Tracks Discovered</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-8 w-8 text-warm-yellow mr-2" />
              <span className="text-3xl font-bold text-white">100K+</span>
            </div>
            <p className="text-gray-300">Monthly Readers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

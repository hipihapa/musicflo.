
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Heart, Share2, Eye } from 'lucide-react';

const LatestReleases = () => {
  const releases = [
    {
      id: 1,
      title: "Midnight Frequencies",
      artist: "Luna Wavelength",
      type: "Single",
      coverArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
      releaseDate: "2024-01-15",
      genre: "Synthwave",
      duration: "3:42",
      isNew: true,
      plays: "156K"
    },
    {
      id: 2,
      title: "Electric Dreams",
      artist: "Neon Pulse",
      type: "EP",
      coverArt: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
      releaseDate: "2024-01-10",
      genre: "Electronic",
      duration: "18:24",
      isNew: true,
      plays: "89K"
    },
    {
      id: 3,
      title: "Cosmic Journey",
      artist: "Digital Nomad",
      type: "Album",
      coverArt: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&q=80",
      releaseDate: "2024-01-08",
      genre: "Ambient",
      duration: "42:15",
      isNew: false,
      plays: "234K"
    },
    {
      id: 4,
      title: "Urban Nights",
      artist: "City Lights",
      type: "Single",
      coverArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
      releaseDate: "2024-01-05",
      genre: "Lo-fi Hip Hop",
      duration: "4:18",
      isNew: false,
      plays: "67K"
    },
    {
      id: 5,
      title: "Retro Wave",
      artist: "Synth Master",
      type: "Single",
      coverArt: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
      releaseDate: "2024-01-03",
      genre: "Synthwave",
      duration: "5:12",
      isNew: false,
      plays: "123K"
    },
    {
      id: 6,
      title: "Morning Coffee",
      artist: "Café Vibes",
      type: "EP",
      coverArt: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&q=80",
      releaseDate: "2024-01-01",
      genre: "Jazz",
      duration: "22:30",
      isNew: false,
      plays: "45K"
    }
  ];

  return (
    <section id="releases" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="fade-in text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Latest <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">Releases</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Fresh tracks, EPs, and albums from our featured artists and emerging talents
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {releases.map((release, index) => (
          <div key={release.id} className="scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="bg-dark-card/80 backdrop-blur-sm border-gray-700 hover:border-accent-teal/50 transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={release.coverArt} 
                  alt={release.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="rounded-full bg-accent-teal/20 backdrop-blur-sm border-accent-teal/30 hover:bg-accent-teal hover:text-white transition-all duration-300"
                    variant="outline"
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                {release.isNew && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gradient-to-r from-accent-teal to-accent-green text-white">
                      New
                    </Badge>
                  </div>
                )}
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="bg-dark-bg/50 backdrop-blur-sm border-gray-600 text-gray-300">
                    {release.type}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-dark-bg/60 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Eye className="h-3 w-3 text-gray-300" />
                  <span className="text-xs text-gray-300">{release.plays}</span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{release.title}</h3>
                  <p className="text-gray-300 font-medium">{release.artist}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <span>{release.genre}</span>
                    <span>•</span>
                    <span>{release.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-red-400 p-2">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400 p-2">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500">
                    {new Date(release.releaseDate).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestReleases;

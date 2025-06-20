
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Users, Music, Eye } from 'lucide-react';

import img1 from "../assets/12.jpeg"
import img2 from "../assets/13.jpeg"
import img3 from "../assets/22.jpeg"

const ArtistSpotlight = () => {
  const artists = [
    {
      id: 1,
      name: "Jehovah Overdo",
      genre: "Ps.Kofi Dartey ft. Joe Mettle & Diana..",
      image: img1,
      followers: "22.1K",
      monthlyListeners: "200K",
      description: "Creating ethereal soundscapes that transport listeners to otherworldly realms.",
      spotifyUrl: "https://open.spotify.com/track/35R0HrjEQw3Mlf2i1Sksi8?si=f693064343a34dfa",
      instagramUrl: "https://www.instagram.com/kofi_dartey?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      profileViews: "45K"
    },
    {
      id: 2,
      name: "Be Still",
      genre: "Enuonyam ft Luigi Maclean",
      image: img2,
      followers: "39.5K",
      monthlyListeners: "20K",
      description: "Raw energy meets melodic sophistication in this emerging song.",
      spotifyUrl: "https://youtu.be/A07XByuk6WA?si=lKdGYL5IN3_JnPwu",
      instagramUrl: "https://www.instagram.com/enuonyam_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      profileViews: "32K"
    },
    {
      id: 3,
      name: "Gospel Funk",
      genre: "Frank Mensah Jnr",
      image: img3,
      followers: "1K",
      monthlyListeners: "5K",
      description: "Crafting the perfect sound for praise sessions.",
      spotifyUrl: "https://www.youtube.com/@frankmensahjnr/videos",
      instagramUrl: "https://www.instagram.com/frankmensahjnr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      profileViews: "2.5K"
    }
  ];

  return (
    <section id="artists" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="fade-in text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Artist <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">Spotlight</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Discover the next generation of musical innovators who are reshaping the industry
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist, index) => (
          <div key={artist.id} className="scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="bg-dark-card/80 backdrop-blur-sm border-gray-700 hover:border-accent-teal/50 transition-all duration-300 group overflow-hidden h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-dark-bg/60 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Eye className="h-3 w-3 text-gray-300" />
                  <span className="text-xs text-gray-300">{artist.profileViews}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{artist.name}</h3>
                  <p className="text-gray-300 font-medium">{artist.genre}</p>
                </div>
                <Button 
                  size="sm" 
                  className="absolute top-4 right-4 rounded-full bg-accent-teal/20 backdrop-blur-sm border-accent-teal/30 hover:bg-accent-teal hover:text-white transition-all duration-300"
                  variant="outline"
                  onClick={() => window.open(artist.spotifyUrl, "_blank")}
                >
                  <Play className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{artist.description}</p>
                
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>{artist.followers} followers</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Music className="h-4 w-4" />
                    <span>{artist.monthlyListeners} monthly</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
<Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-accent-teal to-accent-green hover:from-accent-teal/80 hover:to-accent-green/80 text-white"
                    onClick={() => window.open(artist.spotifyUrl, "_blank")}
                  >
                    Listen Now
                  </Button>
<Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-accent-teal hover:text-white hover:border-accent-teal"
                    onClick={() => window.open(artist.instagramUrl, "_blank")}
                  >
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistSpotlight;

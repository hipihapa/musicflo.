
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Ticket, Eye } from 'lucide-react';

import img1 from "../assets/11.jpeg"
import img2 from "../assets/2.jpeg"
import img3 from "../assets/7.jpeg"
import img4 from "../assets/8.jpeg"
import img5 from "../assets/9.jpeg"
import img6 from "../assets/6.jpeg"

const ConcertListings = () => {
  const concerts = [
    {
      id: 1,
      artist: "Praise Reloaded",
      venue: "Elwak Stadium",
      city: "Accra, Ghana",
      date: "2025-06-29",
      time: "5:00 PM",
      price: "₵Free",
      image: img1,
      genre: "Gospel",
      status: "Free",
      ticketsLeft: "Limited",
      interested: "2.3K",
      ticketUrl: "#"
    },
    {
      id: 2,
      artist: "Fire Festival",
      venue: "CCB Auditorium KNUST",
      city: "Kumasi, Ghana",
      date: "2025-06-21",
      time: "5:0 PM",
      price: "₵Free",
      image: img2,
      genre: "Afro Gospel",
      status: "Free",
      ticketsLeft: "Few Seats Left",
      interested: "1.8K",
      ticketUrl: "#"

    },
    {
      id: 3,
      artist: "Upper Room Experience",
      venue: "Black and Phamous Lounge",
      city: "Accra, Ghana",
      date: "2025-06-21",
      time: "6:00 PM",
      price: "₵Free",
      image: img3,
      genre: "Gospel",
      status: "Free",
      ticketsLeft: "Free Entry",
      interested: "3.1K",
      ticketUrl: "#"
    },
    {
      id: 4,
      artist: "Covers and Medleys",
      venue: "CEYC Airpot City",
      city: "Accra, Ghana",
      date: "2025-04-08",
      time: "6:00 PM",
      price: "₵Free",
      image: img4,
      genre: "Worship Medley",
      status: "Free",
      ticketsLeft: "Free",
      interested: "4.2K",
      ticketUrl: "#"
    },
    {
      id: 5,
      artist: "Ofata Ayeyi Joyful Way Inc.",
      venue: "National Theatre",
      city: "Accra, Ghana",
      date: "2025-07-08",
      time: "5:30 PM",
      price: "₵100",
      image: img5,
      genre: "Gospel",
      status: "Coming Soon",
      ticketsLeft: "Soon",
      interested: "1.5K",
      ticketUrl: "https://joyfulwayinc.com/"
    },
    {
      id: 6,
      artist: "Efua Darko",
      venue: "UNER",
      city: "Tamale, Ghana",
      date: "2024-07-25",
      time: "5:00 PM",
      price: "₵Free",
      image: img6,
      genre: "Jams",
      status: "Free",
      ticketsLeft: "Few Seats Left",
      interested: "987",
      ticketUrl: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selling Fast': return 'bg-red-600';
      case 'Limited': return 'bg-orange-600';
      case 'On Sale': return 'bg-green-600';
      case 'Pre-Sale': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <section id="concerts" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="fade-in text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Upcoming <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">Concerts</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Don't miss out on live performances from your favorite artists around Ghana
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concerts.map((concert, index) => (
          <div key={concert.id} className="scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-700/50 hover:border-accent-teal/50 transition-all duration-300 group overflow-hidden h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={concert.image} 
                  alt={concert.artist}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <Badge className={`${getStatusColor(concert.status)} text-white`}>
                    {concert.ticketsLeft}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="outline" className="bg-dark-bg/50 backdrop-blur-sm border-gray-600 text-gray-300">
                    {concert.genre}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-dark-bg/60 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Eye className="h-3 w-3 text-gray-300" />
                  <span className="text-xs text-gray-300">{concert.interested}</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-xl font-bold text-white">{concert.artist}</h3>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-teal" />
                  {concert.venue}
                </CardTitle>
                <p className="text-gray-300">{concert.city}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(concert.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span>{concert.time}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{concert.price}</div>
                  {concert.status === "Free" ? (
                    <Button
                      className="bg-gradient-to-r from-accent-teal to-accent-green hover:from-accent-teal/80 hover:to-accent-green/80 text-white"
                      disabled
                    >
                      <Ticket className="mr-2 h-4 w-4" />
                      Free
                    </Button>
                  ) : (
                    <a
                      href={concert.ticketUrl}
                      className="text-sm bg-gradient-to-r from-accent-teal to-accent-green hover:from-accent-teal/80 hover:to-accent-green/80 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal"
                    >
                      <div className="flex">
                      <Ticket className="mr-2 h-4 w-4" />
                      Get Ticket
                      </div>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConcertListings;


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Music, TrendingUp, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to MusicFlo!",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail('');
    }
  };

  const features = [
    {
      icon: Music,
      title: "New Releases",
      description: "Be the first to discover fresh tracks and albums"
    },
    {
      icon: TrendingUp,
      title: "Trending Artists",
      description: "Get insights on rising stars and viral hits"
    },
    {
      icon: Calendar,
      title: "Concert Updates",
      description: "Never miss a show with our event notifications"
    }
  ];

  return (
<section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="fade-in">
        <Card className="bg-gradient-to-br from-dark-card/80 to-dark-bg/80 backdrop-blur-sm border-gray-700 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-12 w-12 text-accent-teal" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay in the <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">Loop</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join over 100,000 music lovers who get exclusive access to new releases, artist interviews, and concert announcements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {features.map((feature, index) => (
                <div key={feature.title} className="scale-in text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-center mb-3">
                    <feature.icon className="h-8 w-8 text-accent-teal" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-dark-bg/50 backdrop-blur-sm border-gray-600 text-white placeholder:text-gray-400 focus:border-accent-teal"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-accent-teal to-accent-green hover:from-accent-teal/80 hover:to-accent-green/80 text-white font-semibold px-8 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;

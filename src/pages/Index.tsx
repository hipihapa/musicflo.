
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedArticles from '@/components/FeaturedArticles';
import ArtistSpotlight from '@/components/ArtistSpotlight';
import LatestReleases from '@/components/LatestReleases';
import ConcertListings from '@/components/ConcertListings';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo('.fade-in', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.scale-in', 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.scale-in',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg font-poppins">
      <Header />
      <Hero />
      <FeaturedArticles />
      <ArtistSpotlight />
      {/* <LatestReleases /> */}
      <ConcertListings />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

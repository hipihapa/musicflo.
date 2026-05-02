import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /** Same order as the homepage: Hero → Featured articles → Artists → Concerts → Newsletter */
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Articles', href: '#articles' },
    { name: 'Artists', href: '#artists' },
    { name: 'Concerts', href: '#concerts' },
    { name: 'About', href: '#newsletter' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg/40 backdrop-blur-md border-b border-gray-800/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-accent-teal" />
            <a href="#home">
              <span className="text-2xl font-bold text-white">MusicFlo.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-accent-teal transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-gradient-to-r from-accent-teal to-accent-green px-6 py-2 font-semibold text-white hover:from-accent-teal/80 hover:to-accent-green/80"
            >
              <Link to="/admin/login">Sign in</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-card/70 backdrop-blur-md rounded-lg mt-2 p-4 border border-gray-800/30">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-accent-teal py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              asChild
              className="mt-4 w-full rounded-full bg-gradient-to-r from-accent-teal to-accent-green py-2 font-semibold text-white hover:from-accent-teal/80 hover:to-accent-green/80"
            >
              <Link to="/admin/login" onClick={() => setIsMenuOpen(false)}>
                Sign in
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

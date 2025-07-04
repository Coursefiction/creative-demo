
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src="https://res.cloudinary.com/drcknphjv/image/upload/v1739380220/My%20Brand/cf_portal_ico_-_Made_with_PosterMyWall_1_kxlact.png" 
                alt="Creative by Coursefiction" 
                className="h-8 w-8 animate-float"
              />
              <span className="font-serif font-bold text-xl gradient-text group-hover:scale-105 transition-transform">
                Creative by Coursefiction
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-creative-blue ${
                    location.pathname === link.path 
                      ? 'text-creative-blue' 
                      : 'text-gray-700 hover:text-creative-blue'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 creative-gradient rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg glass-effect"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown className={`h-5 w-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-creative-blue bg-creative-blue/10'
                      : 'text-gray-700 hover:text-creative-blue hover:bg-creative-blue/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://res.cloudinary.com/drcknphjv/image/upload/v1739380220/My%20Brand/cf_portal_ico_-_Made_with_PosterMyWall_1_kxlact.png" 
                  alt="Creative by Coursefiction" 
                  className="h-8 w-8"
                />
                <span className="font-serif font-bold text-xl">Creative by Coursefiction</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming ideas into stunning visual experiences. We bring creativity and innovation to every project.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-gray-400">
                Ready to bring your creative vision to life? Let's collaborate!
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Creative by Coursefiction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

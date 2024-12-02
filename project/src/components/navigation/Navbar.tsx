import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Menu, X, MessageSquare, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Communities', path: '/communities' },
    { name: 'Events', path: '/events' }
  ];

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-purple-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Heart className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">SoulConnect</span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white hover:text-purple-300 transition-colors duration-300 ${
                  location.pathname === item.path ? 'border-b-2 border-white' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/messaging">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-white p-2 hover:bg-white/10 rounded-full"
              >
                <MessageSquare className="w-6 h-6" />
              </motion.div>
            </Link>
            <Link to="/profile">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-white p-2 hover:bg-white/10 rounded-full"
              >
                <User className="w-6 h-6" />
              </motion.div>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-900 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 text-white hover:text-purple-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 mt-4">
              <Link to="/messaging" className="text-white">
                <MessageSquare className="w-6 h-6" />
              </Link>
              <Link to="/profile" className="text-white">
                <User className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
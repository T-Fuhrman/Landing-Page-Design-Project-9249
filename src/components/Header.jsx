import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiChevronRight, FiUser } = FiIcons;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Custom navigation items - Edit this array to change navigation
  const navigationItems = [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDashboard = location.pathname === '/dashboard';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Greta</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isDashboard && navigationItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            {isDashboard && (
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Home
              </Link>
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isDashboard ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-600"
              >
                <SafeIcon icon={FiUser} className="w-5 h-5" />
                <span className="font-medium">Profile</span>
              </motion.div>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Sign In
                </motion.button>
                <Link to="/dashboard">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <span>Get Started</span>
                    <SafeIcon icon={FiChevronRight} className="w-4 h-4" />
                  </motion.button>
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <SafeIcon
              icon={isOpen ? FiX : FiMenu}
              className="w-6 h-6 text-gray-900"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 py-4"
          >
            <div className="flex flex-col space-y-4">
              {!isDashboard && navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {isDashboard && (
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              )}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                {!isDashboard ? (
                  <>
                    <button className="text-gray-600 hover:text-gray-900 font-medium text-left">
                      Sign In
                    </button>
                    <Link to="/dashboard">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium w-full">
                        Get Started
                      </button>
                    </Link>
                  </>
                ) : (
                  <button className="text-gray-600 hover:text-gray-900 font-medium text-left flex items-center space-x-2">
                    <SafeIcon icon={FiUser} className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
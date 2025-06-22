import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

import MobileMenu from './components/MobileMenu';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    // Check user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Apply theme
    document.documentElement.classList.toggle('dark', prefersDark);

    // Add scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              className="text-2xl font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                JASHU
              </span>
              <span className={`${scrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}>
                ARTS
              </span>
            </motion.h1>
            
            <div className="hidden md:flex items-center space-x-8">
              <Navbar scrolled={scrolled} />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${
                  scrolled
                    ? 'hover:bg-gray-200 dark:hover:bg-gray-700'
                    : 'hover:bg-white/20'
                }`}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>
            
            <div className="flex items-center space-x-4 md:hidden">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                className={`p-2.5 rounded-full transition-colors ${
                  scrolled
                    ? 'hover:bg-gray-200 dark:hover:bg-gray-700 bg-white/80 dark:bg-gray-800/80'
                    : 'hover:bg-white/20 bg-black/30 backdrop-blur-sm'
                } ${mobileMenuOpen ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen 
                  ? <X size={24} className="text-white" /> 
                  : <Menu size={24} className={scrolled ? 'text-gray-800 dark:text-white' : 'text-white'} />
                }
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${
                  scrolled
                    ? 'hover:bg-gray-200 dark:hover:bg-gray-700 bg-white/80 dark:bg-gray-800/80'
                    : 'hover:bg-white/20 bg-black/30 backdrop-blur-sm'
                }`}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-white" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
      
      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
      </AnimatePresence>
      
      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
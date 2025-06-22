import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/images/1740483873phpWWtob4.jpeg';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPos = window.scrollY;
        const opacity = Math.max(1 - scrollPos / 500, 0.1);
        const translateY = scrollPos * 0.3;
        
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.85)'
        }}
      ></motion.div>

      {/* Gradient Overlay Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 z-1 bg-gradient-to-b from-black/40 via-transparent to-black/60"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
            radial-gradient(circle at 50% 50%, rgba(128, 90, 213, 0.15) 0%, transparent 70%),
            radial-gradient(circle at 100% 0%, rgba(255, 156, 189, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 0% 100%, rgba(255, 222, 233, 0.15) 0%, transparent 60%)
          `
        }}
      >
        {/* Animated particles */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'particleFloat 25s linear infinite'
        }}></div>
      </motion.div>
      
      {/* Content Layer */}
      <div 
        ref={heroRef}
        className="relative z-10 text-center p-4 max-w-4xl transition-transform duration-300"
      >
        <div className="mb-8 relative">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Animated gradient text */}
            <span className="inline-block relative">
              <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-purple-600/30 via-pink-500/30 to-red-500/30 rounded-lg"></span>
              <span className="relative bg-gradient-to-r from-white via-purple-100 to-pink-50 text-transparent bg-clip-text">
                {"Jashu Arts".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterAnimation}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </span>
          </motion.h1>
        </div>

        <motion.p 
          className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-100 drop-shadow-lg font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="block mb-2 bg-gradient-to-r from-purple-200 to-pink-200 text-transparent bg-clip-text">
            Transforming imagination into masterpieces,
          </span>
          <span className="block bg-gradient-to-r from-pink-200 to-red-200 text-transparent bg-clip-text">
            one stroke at a time
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const gallerySection = document.getElementById('gallery');
              if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative px-10 py-4 text-lg font-medium rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 backdrop-blur-md group-hover:from-purple-600/30 group-hover:via-pink-600/30 group-hover:to-red-600/30 transition-all duration-500"></span>
            <span className="absolute inset-0 border border-white/30 rounded-full"></span>
            <span className="relative text-white group-hover:text-white/90 transition-colors duration-300">
              Explore Gallery
            </span>
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-25px) translateX(15px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 
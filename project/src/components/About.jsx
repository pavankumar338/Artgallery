import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import profileImage from '@/assets/images/profile.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="about" 
      className="py-24 px-4 min-h-screen bg-gradient-to-b from-black via-purple-950/30 to-black"
      ref={ref}
    >
      <motion.div 
        className="container mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 text-transparent bg-clip-text"
        >
          Jashu
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            variants={itemVariants}
            className="md:w-1/2"
          >
            <div className="relative group">
              {/* Animated gradient border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-pink-500 to-indigo-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-full shadow-2xl bg-gradient-to-br from-purple-900 via-black to-indigo-900 p-2">
                <motion.div 
                  className="aspect-square overflow-hidden rounded-full ring-2 ring-purple-500/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.img
                    src={profileImage}
                    alt="Jashu - Artist profile"
                    className="w-full h-full object-cover scale-125"
                    initial={{ scale: 1.75 }}
                    whileHover={{ scale: 1.75 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="md:w-1/2 space-y-8"
          >
            <div className="space-y-6">
              <motion.p 
                variants={itemVariants}
                className="text-xl leading-relaxed text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text"
              >
                Hi, I'm Jashu, an artist who weaves emotions into visual stories. My art is a journey through colors, textures, and feelings, creating pieces that speak to the soul.
              </motion.p>
              
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 via-black/40 to-indigo-900/20 backdrop-blur-sm border border-purple-500/10"
              >
                <p className="text-lg text-purple-100/90">
                  "Art is not what you see, but what you make others see. Each stroke, each color choice is a word in the visual story I'm telling."
                </p>
              </motion.div>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg leading-relaxed text-purple-100/80"
              >
                Through my artwork, I explore the boundaries between reality and imagination, creating pieces that invite viewers to discover their own interpretations and emotions.
              </motion.p>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-6"
            >
              {['Imagination', 'Emotion', 'Color', 'Story'].map((word, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-200/90 text-sm"
                >
                  {word}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 
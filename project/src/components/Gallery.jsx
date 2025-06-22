import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { artworks } from '../data/artworks';
import LightBox from './LightBox';

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (artwork) => {
    setSelectedArtwork(artwork);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group cursor-pointer w-full aspect-[4/5]"
              onClick={() => openLightbox(artwork)}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-full rounded-lg overflow-hidden bg-gray-900">
                <div className="absolute inset-[2px] rounded-lg overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src={artwork.imageUrl}
                      alt={artwork.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {isLightboxOpen && selectedArtwork && (
        <LightBox artwork={selectedArtwork} onClose={closeLightbox} />
      )}
    </section>
  );
};

export default Gallery; 
import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { artworks } from '../data/artworks';

const LightBox = ({ artwork, onClose }) => {
  const [currentArtwork, setCurrentArtwork] = useState(artwork);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        navigateArtwork('prev');
        break;
      case 'ArrowRight':
        navigateArtwork('next');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentArtwork]);

  const navigateArtwork = (direction) => {
    const currentIndex = artworks.findIndex((a) => a.id === currentArtwork.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? artworks.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === artworks.length - 1 ? 0 : currentIndex + 1;
    }

    setCurrentArtwork(artworks[newIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>
      
      <button
        onClick={() => navigateArtwork('prev')}
        className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors"
        aria-label="Previous artwork"
      >
        <ChevronLeft size={48} />
      </button>
      
      <button
        onClick={() => navigateArtwork('next')}
        className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors"
        aria-label="Next artwork"
      >
        <ChevronRight size={48} />
      </button>
      
      <div className="max-w-5xl w-full">
        <img
          src={currentArtwork.imageUrl}
          alt={currentArtwork.title}
          className="max-h-[70vh] object-contain mx-auto"
        />
        <div className="text-white mt-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{currentArtwork.title}</h2>
          <p className="text-gray-300 mb-2">{currentArtwork.category} · {currentArtwork.year}</p>
          <p className="max-w-2xl mx-auto">{currentArtwork.description}</p>
        </div>
      </div>
    </div>
  );
};

export default LightBox; 
import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className="flex space-x-8">
        <li>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Gallery
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('about')}
            className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            About
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 
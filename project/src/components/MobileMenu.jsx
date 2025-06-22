import React from 'react';
import { motion } from 'framer-motion';

const MobileMenu = ({ onClose }) => {
  const menuItems = [
    { title: 'Home', href: '#' },
    { title: 'Gallery', href: '#gallery' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' }
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      x: '100%',
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    })
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      className="fixed inset-0 z-40 md:hidden"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu panel */}
      <div className="absolute right-0 top-0 h-full w-64 bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Menu items */}
          <div className="flex-1 px-4 py-6 mt-16">
            <nav className="space-y-2">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  custom={i}
                  variants={itemVariants}
                  onClick={onClose}
                  className="block px-4 py-3 text-lg font-medium rounded-lg relative group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                    {item.title}
                  </span>
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-4 text-center border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Jashu Arts
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu; 
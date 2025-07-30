import React from 'react';
import { NavLink } from 'react-router-dom';
import { Construction } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center bg-accent-1 text-text-base font-sans">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center p-6 rounded-2xl bg-white shadow-xl border border-primary/20 max-w-lg w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="flex justify-center mb-4"
        >
          <Construction className="text-primary" size={48} />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
          🚧 Under Construction!
        </h1>
        <p className="text-text-light text-lg mb-6">
          Our contact page is still getting a fresh coat of paint. Hang tight while we make it awesome! 😎
        </p>
        <NavLink
          to="/"
          className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-dark hover:scale-105 transition-all duration-300"
        >
          ⬅ Back to Home
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Contact;

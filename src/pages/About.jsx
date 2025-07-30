import React from 'react';
import { NavLink } from 'react-router-dom';
import { Info } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center bg-accent-1 text-text-base font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center p-6 rounded-2xl bg-white shadow-xl border border-primary/20 max-w-lg w-full"
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="flex justify-center mb-4"
        >
          <Info className="text-primary" size={48} />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
          📖 About Page Under Construction!
        </h1>
        <p className="text-text-light text-lg mb-6">
          We’re crafting our story. Come back soon to learn more about us! 🛠️
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

export default About;

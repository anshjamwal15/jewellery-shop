'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToCollection = () => {
    const element = document.querySelector('#collection');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cormorant font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="font-baskerville italic">Exquisite</span>
          <br />
          <span className="text-gold-400 font-dancing text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Jewelry</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-crimson font-light italic leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Discover our collection of handcrafted jewelry pieces, 
          where timeless elegance meets modern sophistication.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <button
            onClick={scrollToCollection}
            className="btn-primary text-lg px-8 py-4"
          >
            Explore Collection
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-lg px-8 py-4"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={scrollToCollection}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 bg-gold-400 rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-6 h-6 bg-gold-300 rounded-full opacity-40"
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-gold-500 rounded-full opacity-50"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 2,
        }}
      />
    </section>
  );
};

export default Hero;

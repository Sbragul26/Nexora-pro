import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import Scene3D from '../Scene3D';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for buttons
  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  // Animation variants for floating elements
  const floatVariants = {
    animate: {
      y: [-20, 20],
      rotate: [0, 5, -5, 0],
      transition: {
        y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
        rotate: { duration: 8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-slate-900">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene3D />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-10"
        >
          {/* Logo Animation */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 150, damping: 10 }}
        >
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="relative z-11 w-40 h-40 object-contain"
            />

        </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Nexora
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Creations
            </span>
          </motion.h1>

          {/* Slogan */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl font-poppins font-light text-gray-200 max-w-4xl mx-auto tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Empowering Your{' '}
            <motion.span
              className="text-accent font-medium"
              whileHover={{ scale: 1.05, color: "#60a5fa" }}
              transition={{ duration: 0.3 }}
            >
              Digital Future
            </motion.span>
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            We craft innovative digital solutions that transform businesses and create extraordinary user experiences through cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection('services')}
              className="relative bg-gradient-to-r from-accent to-blue-500 text-white px-10 py-4 rounded-full font-poppins font-medium text-lg shadow-lg overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-accent/50"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight size={20} />
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('portfolio')}
              className="relative border-2 border-accent text-accent px-10 py-4 rounded-full font-poppins font-medium text-lg group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span
                className="absolute inset-0 bg-accent/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center space-x-2 group-hover:text-white">
                <Play size={20} />
                <span>View Portfolio</span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>


      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-16 left-8 w-24 h-24 bg-accent/30 rounded-full shadow-lg"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-32 right-12 w-16 h-16 bg-blue-400/30 rounded-full shadow-lg"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-20 h-20 bg-purple-400/30 rounded-full shadow-lg"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />

      {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.div
              className="w-6 h-12 border-2 border-gray-300 rounded-full flex justify-center"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1.5 h-3 bg-accent rounded-full mt-2"
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
          
    </section>
    
  );
};

export default HeroSection;
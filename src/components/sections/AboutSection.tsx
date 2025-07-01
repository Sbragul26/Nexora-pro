
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const CounterCard = ({ icon: Icon, number, label, delay }: { icon: any, number: string, label: string, delay: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 text-center border border-gray-700 hover:border-accent/50 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="bg-gradient-to-r from-accent to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon size={32} className="text-white" />
      </div>
      <motion.h3
        className="text-3xl font-bold text-accent font-poppins mb-2"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: delay + 0.3 }}
      >
        {number}
      </motion.h3>
      <p className="text-gray-300 font-poppins">{label}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white font-poppins mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About{' '}
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Nexora Creations
            </span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white font-poppins">
              Innovating the Future of Digital Solutions
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed font-poppins">
              Nexora Creations is a dynamic tech startup founded on the belief that innovation, 
              collaboration, and simplicity are the cornerstones of digital transformation. 
              We specialize in creating cutting-edge solutions that empower businesses to thrive 
              in the digital age.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed font-poppins">
              Our mission is to bridge the gap between complex technology and user-friendly 
              experiences. We collaborate closely with our clients to understand their unique 
              challenges and deliver tailored solutions that drive growth and success.
            </p>

            {/* Mission Points */}
            <div className="space-y-4 pt-4">
              {[
                { icon: Target, title: "Innovation First", desc: "Leveraging cutting-edge technologies to solve complex problems" },
                { icon: Users, title: "Client Collaboration", desc: "Working closely with clients to exceed expectations" },
                { icon: Lightbulb, title: "Simplified Solutions", desc: "Making complex technology accessible and user-friendly" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <item.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-poppins">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative bg-gradient-to-br from-accent/20 to-blue-400/20 rounded-3xl p-8 backdrop-blur-lg border border-gray-700">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-gradient-to-br from-accent to-blue-500 rounded-2xl opacity-80"></div>
                <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-60"></div>
                <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-60"></div>
                <div className="h-32 bg-gradient-to-br from-pink-500 to-accent rounded-2xl opacity-80"></div>
              </div>
              
              {/* Floating Icon */}
              <motion.div
                className="absolute -top-4 -right-4 bg-accent p-4 rounded-full shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Award size={32} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <CounterCard
            icon={Target}
            number="3+"
            label="Years of Experience"
            delay={0.2}
          />
          <CounterCard
            icon={Users}
            number="50+"
            label="Projects Completed"
            delay={0.4}
          />
          <CounterCard
            icon={Award}
            number="98%"
            label="Client Satisfaction"
            delay={0.6}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

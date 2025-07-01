
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Smartphone, Shield, Briefcase, TrendingUp, X } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js.",
    details: "We create responsive, fast, and scalable web applications that provide exceptional user experiences. Our expertise includes frontend frameworks, backend APIs, database design, and cloud deployment.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    details: "From concept to deployment, we build mobile apps using Flutter, React Native, and native technologies. Our apps are optimized for performance, user engagement, and app store success.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
    details: "We provide security audits, penetration testing, secure code reviews, and implement robust security measures to protect your business from cyber threats and data breaches.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Briefcase,
    title: "Freelancing Solutions",
    description: "Flexible project-based solutions tailored to your specific business needs.",
    details: "Whether you need a quick prototype, consulting, or temporary development resources, our freelancing services provide the flexibility and expertise you need to get projects done efficiently.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "SEO, paid advertising, and growth campaigns to boost your online presence.",
    details: "Our digital marketing experts help you reach your target audience through strategic SEO optimization, Google Ads, social media marketing, and data-driven growth campaigns that deliver measurable results.",
    color: "from-yellow-500 to-orange-500"
  }
];

const ServiceCard = ({ service, index, onOpenModal }: { service: any, index: number, onOpenModal: (service: any) => void }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-accent/50 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={() => onOpenModal(service)}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
      
      {/* Icon */}
      <motion.div
        className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <service.icon size={32} className="text-white" />
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white font-poppins mb-4 group-hover:text-accent transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed mb-6 font-poppins">
        {service.description}
      </p>

      {/* Learn More Button */}
      <motion.button
        className="bg-accent/20 hover:bg-accent text-accent hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Learn More</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.div>
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-accent/10 to-blue-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

const Modal = ({ service, onClose }: { service: any, onClose: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl p-8 max-w-2xl mx-4 border border-gray-700"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`bg-gradient-to-r ${service.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
              <service.icon size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white font-poppins">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <p className="text-gray-300 leading-relaxed text-lg font-poppins">
          {service.details}
        </p>
        
        <motion.button
          onClick={onClose}
          className="mt-6 bg-accent hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Got it!
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-primary to-slate-900 relative overflow-hidden">
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
            Our{' '}
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent to-blue-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onOpenModal={setSelectedService}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard
              key={index + 3}
              service={service}
              index={index + 3}
              onOpenModal={setSelectedService}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <Modal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;

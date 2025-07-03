
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contact@nexoracreations.com",
      link: "mailto:contact@nexoracreations.com"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91-9876543210",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Coimbatore, Tamil Nadu, India",
      //link: "https://maps.google.com/?q=Coimbatore,Tamil+Nadu,India"
    }
  ];

  const socialLinks = [
    { icon: Instagram, link: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, link: "#", color: "hover:text-blue-500" },
    { icon: Github, link: "#", color: "hover:text-gray-400" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-primary relative overflow-hidden">
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
            Contact{' '}
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Us
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
            Ready to start your next project? Let's discuss how we can help bring your ideas to life
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white font-poppins mb-6">
              Get In Touch
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="flex items-center space-x-4 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 hover:border-accent/50 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-accent to-blue-400 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-poppins group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className="text-white font-semibold font-poppins mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className={`bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-gray-300 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white font-poppins mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label className="block text-gray-300 font-medium mb-2 font-poppins">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors duration-300"
                  placeholder="Your full name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label className="block text-gray-300 font-medium mb-2 font-poppins">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label className="block text-gray-300 font-medium mb-2 font-poppins">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent to-blue-500 hover:from-blue-500 hover:to-accent text-white px-8 py-4 rounded-xl font-poppins font-medium text-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

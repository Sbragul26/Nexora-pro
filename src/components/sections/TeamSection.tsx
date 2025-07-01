
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Ragul Balajii",
    role: "Founder & Lead Developer",
    specialties: ["React", "Node.js", "Cybersecurity"],
    bio: "Visionary leader with expertise in full-stack development and cybersecurity. Passionate about creating secure, scalable solutions that drive business growth.",
    image: "",
    social: {
      linkedin: "#",
      github: "#",
      email: "ragul@nexoracreations.com"
    }
  },
  {
    name: "Deepika K",
    role: "Digital Marketing Head",
    specialties: ["SEO", "Meta Ads", "Growth Hacking"],
    bio: "Results-driven marketing strategist specializing in data-driven campaigns that maximize ROI and accelerate business growth through innovative digital strategies.",
    image: "",
    social: {
      linkedin: "#",
      github: "#",
      email: "deepika@nexoracreations.com"
    }
  },
  {
    name: "Arjun S",
    role: "UI/UX Designer",
    specialties: ["Figma", "Tailwind", "Adobe XD"],
    bio: "Creative designer focused on crafting intuitive user experiences and visually stunning interfaces that seamlessly blend form with function.",
    image: "",
    social: {
      linkedin: "#",
      github: "#",
      email: "arjun@nexoracreations.com"
    }
  },
  {
    name: "Rahul M",
    role: "App Developer",
    specialties: ["Flutter", "Kotlin", "Android Studio"],
    bio: "Mobile development expert specializing in cross-platform solutions that deliver native performance and exceptional user experiences across all devices.",
    image: "",
    social: {
      linkedin: "#",
      github: "#",
      email: "rahul@nexoracreations.com"
    }
  },
  {
    name: "Rahul M",
    role: "App Developer",
    specialties: ["Flutter", "Kotlin", "Android Studio"],
    bio: "Mobile development expert specializing in cross-platform solutions that deliver native performance and exceptional user experiences across all devices.",
    image: "",
    social: {
      linkedin: "#",
      github: "#",
      email: "rahul@nexoracreations.com"
    }
  },
  {
    name: "Rahul M",
    role: "App Developer",
    specialties: ["Flutter", "Kotlin", "Android Studio"],
    bio: "Mobile development expert specializing in cross-platform solutions that deliver native performance and exceptional user experiences across all devices.",
    image: "",
    social: {
      linkedin: "#",
      github: "#",
      email: "rahul@nexoracreations.com"
    }
  }
];

const TeamCard = ({ member, index }: { member: any, index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-accent/50 transition-all duration-300"
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-blue-400/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
      
      {/* Profile Image */}
      <motion.div
        className="relative mx-auto mb-6 w-32 h-32"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full rounded-full object-cover border-4 border-accent/30 group-hover:border-accent transition-colors duration-300"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Name and Role */}
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-white font-poppins mb-2 group-hover:text-accent transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-accent font-medium font-poppins mb-3">
          {member.role}
        </p>
        
        {/* Specialties */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {member.specialties.map((specialty: string, idx: number) => (
            <span
              key={idx}
              className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>

      {/* Bio */}
      <p className="text-gray-300 text-center leading-relaxed mb-6 font-poppins text-sm">
        {member.bio}
      </p>

      {/* Social Links */}
      <div className="flex justify-center space-x-4">
        <motion.a
          href={member.social.linkedin}
          className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin size={20} />
        </motion.a>
        <motion.a
          href={member.social.github}
          className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={20} />
        </motion.a>
        <motion.a
          href={`mailto:${member.social.email}`}
          className="bg-gray-700 hover:bg-accent p-3 rounded-full text-gray-300 hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={20} />
        </motion.a>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-slate-900 to-primary relative overflow-hidden">
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
            Meet Our{' '}
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              Team
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
            The passionate individuals behind Nexora Creations, each bringing unique expertise and creativity to every project
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-300 text-lg mb-6 font-poppins">
            Ready to work with our amazing team?
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-accent to-blue-500 hover:from-blue-500 hover:to-accent text-white px-8 py-4 rounded-full font-poppins font-medium text-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

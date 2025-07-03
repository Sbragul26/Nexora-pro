import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: "Siddhartha",
    role: "Founder & CEO",
    specialties: ["Digital Marketing", "UI/UX", "Editor", "Graphic Designer"],
    bio: "Visionary leader driving innovative digital solutions.",
    image: "/public/Team/siddhu.jpeg",
    social: {
      linkedin: "#",
      github: "#",
      email: "siddhartha@example.com"
    }
  },
  {
    name: "Ragul Balajii",
    role: "Co-Founder",
    specialties: ["Web & App Developer", "Digital Marketing", "UI/UX", "Blockchain Developer"],
    bio: "Tech enthusiast crafting cutting-edge web experiences.",
    image: "/public/Team/ragul.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/ragulbalajii/",
      github: "https://github.com/Sbragul26",
      email: "sbragul26@gmail.com"
    }
  },
  {
    name: "Parithi Krishnan",
    role: "Co-Founder",
    specialties: ["Cyber-Security", "Pentester", "Developer", "Exploiter"],
    bio: "Security expert ensuring robust digital protection.",
    image: "/public/Team/parithi.jpeg",
    social: {
      linkedin: "#",
      github: "#",
      email: "parithi@example.com"
    }
  },
  {
    name: "Anish Narayan",
    role: "Co-Founder",
    specialties: ["Web & App Developer", "Digital Marketing", "Cyber-Security"],
    bio: "Creative developer building seamless digital solutions.",
    image: "/public/Team/anish.jpg",
    social: {
      linkedin: "#",
      github: "https://github.com/anish-narayan",
      email: "anish@example.com"
    }
  },
  {
    name: "Kiruthick",
    role: "Co-Founder",
    specialties: ["UI/UX Designer", "Developer"],
    bio: "Design maestro creating intuitive user experiences.",
    image: "/public/Team/kiru.webp",
    social: {
      linkedin: "#",
      github: "#",
      email: "kiruthick@example.com"
    }
  }
];

const TeamCard = ({ member, index }: { member: any, index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-600/50 hover:border-blue-500/50 shadow-xl transition-all duration-500 overflow-hidden"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -12, scale: 1.03, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)" }}
    >
      {/* Animated Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

      {/* Profile Image */}
      <motion.div
        className="relative mx-auto mb-6 w-36 h-36"
        whileHover={{ scale: 1.15, rotate: 2 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full rounded-full object-cover border-4 border-blue-500/30 group-hover:border-blue-500 transition-all duration-400 shadow-lg"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </motion.div>

      {/* Name and Role */}
      <div className="text-center mb-4">
        <motion.h3
          className="text-2xl font-bold text-white font-poppins mb-2 group-hover:text-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {member.name}
        </motion.h3>
        <p className="text-blue-400 font-medium font-poppins mb-3">
          {member.role}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {member.specialties.map((specialty: string, idx: number) => (
            <motion.span
              key={idx}
              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30 group-hover:bg-blue-500/30 transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.4)" }}
            >
              {specialty}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bio */}
      <motion.p
        className="text-gray-200 text-center leading-relaxed mb-6 font-poppins text-sm line-clamp-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {member.bio}
      </motion.p>

      {/* Social Links */}
      <div className="flex justify-center space-x-4">
        {[
          { icon: <Linkedin size={22} />, href: member.social.linkedin, color: "hover:bg-blue-600" },
          { icon: <Github size={22} />, href: member.social.github, color: "hover:bg-gray-600" },
          { icon: <Mail size={22} />, href: `mailto:${member.social.email}`, color: "hover:bg-blue-500" }
        ].map((social, idx) => (
          <motion.a
            key={idx}
            href={social.href}
            className={`bg-gray-700 p-3 rounded-full text-gray-200 ${social.color} transition-all duration-300`}
            whileHover={{ scale: 1.2, rotate: 5, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/public/grid-pattern.svg')] opacity-5 bg-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-white font-poppins mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet Our{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Visionary Team
            </span>
          </motion.h2>

          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover the brilliant minds at Nexora Creations, blending creativity and expertise to redefine digital innovation.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
          <p className="text-gray-200 text-lg mb-6 font-poppins">
            Ready to collaborate with our dynamic team?
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg shadow-xl transition-all duration-400"
            whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Connect With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
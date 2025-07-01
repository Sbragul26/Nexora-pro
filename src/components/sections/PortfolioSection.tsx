import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web",
    description: "Modern e-commerce solution with advanced features including real-time inventory, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/nexora/ecommerce"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile",
    description: "Secure banking application with biometric authentication, transaction history, and financial analytics.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB", "JWT", "Biometric API"],
    liveUrl: "https://app.bank-example.com",
    githubUrl: "https://github.com/nexora/banking-app"
  },
  {
    id: 3,
    title: "Brand Growth Campaign",
    category: "Marketing",
    description: "Successful social media marketing campaign that increased brand awareness by 300% and generated 5x ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Facebook Ads", "Google Analytics", "Hootsuite", "Canva"],
    liveUrl: "https://campaign-results.com",
    githubUrl: null
  },
  {
    id: 4,
    title: "Enterprise Security Audit",
    category: "Security",
    description: "Comprehensive security audit tool for web applications with vulnerability scanning and reporting.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    technologies: ["Python", "Django", "PostgreSQL", "Docker", "OWASP"],
    liveUrl: "https://security-tool.com",
    githubUrl: "https://github.com/nexora/security-audit"
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Web",
    description: "Property listing platform with advanced search features, virtual tours, and mortgage calculator.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Mapbox", "Tailwind CSS"],
    liveUrl: "https://realestate-platform.com",
    githubUrl: "https://github.com/nexora/real-estate"
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    category: "Mobile",
    description: "Cross-platform mobile app for fitness tracking with social features, workout plans, and progress analytics.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Firebase", "Dart", "Google Fit API", "HealthKit"],
    liveUrl: "https://play.google.com/store",
    githubUrl: "https://github.com/nexora/fitness-app"
  },
  {
    id: 7,
    title: "Corporate Website",
    category: "Web",
    description: "Professional corporate website with content management system, blog functionality, and SEO optimization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Contentful"],
    liveUrl: "https://example-corp.com",
    githubUrl: "https://github.com/nexora/corporate-site"
  },
  {
    id: 8,
    title: "Cryptocurrency Exchange",
    category: "Security",
    description: "High-security cryptocurrency trading platform with advanced encryption and multi-factor authentication.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "Redis", "WebSocket", "Blockchain"],
    liveUrl: "https://crypto-exchange.com",
    githubUrl: "https://github.com/nexora/crypto-exchange"
  }
];

const categories = ["All", "Web", "Mobile", "Marketing", "Security"];

const ProjectCard = ({ project, index, onOpenModal }) => {
  return (
    <motion.div
      className="group relative bg-slate-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={() => onOpenModal(project)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
          {project.category}
        </div>
        <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.liveUrl}
            className="bg-white/20 backdrop-blur-sm hover:bg-blue-500 text-white p-2 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} />
          </motion.a>
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              className="bg-white/20 backdrop-blur-sm hover:bg-gray-600 text-white p-2 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </motion.a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-800/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-slate-700 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-6">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
              {project.category}
            </div>
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3">Technologies Used:</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </motion.a>
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                <span>Source Code</span>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "85+", label: "Happy Clients" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Statistics
            </span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Combined filtering logic from both components
  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent)] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore our diverse range of successful projects across web development, mobile apps, 
              cybersecurity, and digital marketing. Each project showcases our commitment to excellence and innovation.
            </motion.p>
          </motion.div>

          {/* Enhanced Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4 w-full justify-center">
              <Filter className="h-5 w-5 text-blue-400" />
              <span className="text-white font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700 hover:text-white border border-slate-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter size={16} />
                  <span>{category}</span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                    {category === "All" ? projects.length : projects.filter(p => p.category === category).length}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid with Enhanced Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${selectedCategory}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onOpenModal={handleOpenModal}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No projects found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioSection;
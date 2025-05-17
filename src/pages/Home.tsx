import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import image from "../assets/about.jpg";
import bookimage from "../assets/image.png";
import ecommerce from "../assets/ecommerce.png";

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB'],
      imageUrl: ecommerce
    },
    {
      id: 2,
      title: 'Book Management App',
      description: 'A productivity app for managing tasks with drag-and-drop functionality',
      tags: ['HTML', 'CSS', 'JS'],
      imageUrl: bookimage
    }
  ];

  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS',
    'Git', 'REST APIs', 'MongoDB', 'Firebase', 'Python'
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-sm -z-10 scale-110 opacity-30"></div>
              <img 
                src={image} 
                alt="Kaif Zaki" 
                className="w-48 h-48 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Hi, I'm Kaif Zaki
            </h1>
            <h2 className="text-2xl text-gray-700 dark:text-gray-300 font-medium mb-6 relative inline-block">
              FullStack Developer
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-indigo-400 dark:bg-indigo-600 rounded-full"></span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10 text-lg">
              I build exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/projects"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 rounded-full font-medium shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-24 -left-20 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            A showcase of my most impactful and exciting development projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-20 left-1/3 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            A toolkit of languages, frameworks, and platforms I work with.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map(skill => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-indigo-100 via-white to-purple-100 dark:from-indigo-900/40 dark:via-gray-900 dark:to-purple-900/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
            Ready to collaborate?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            I'm open to freelance gigs, team projects, and full-time roles.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

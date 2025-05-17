import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SkillBadge from '../components/SkillBadge'
import "tailwindcss";
import image from "../assets/about.jpg"
import bookimage from "../assets/image.png"
import ecommerce from "../assets/ecommerce.png"




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

    
  ]

  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 
    'Git', 'REST APIs', 'MongoDB', 'Firebase', 'Python'
  ]

  return (
    <div>
      <section className="py-12 text-center">
<img src={image} alt="" className="w-48 h-48 object-cover mb-4 mx-auto" />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Hi, I'm kaif Zaki</h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">FullStack Developer</h2>
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-8">
          I build exceptional digital experiences with modern web technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            to="/projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View My Work
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/projects" 
            className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Skills & Technologies</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map(skill => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </section>
    </div>
  )
}
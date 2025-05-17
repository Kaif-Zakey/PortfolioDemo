import ProjectCard from '../components/ProjectCard'
import "tailwindcss";
import portfolio from "../assets/portfolio.png"
import calculator from "../assets/calculator.png"
import connect4Game from "../assets/connect4game.png"
import ecommerce from "../assets/ecommerce.png"



export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB'],
      imageUrl: ecommerce,
      githubUrl: 'https://github.com/Kaif-Zakey/WindsorBookshop_FrontEnd.git',
      liveUrl: 'https://youtu.be/xdA5sqPQ2iY'
    },
    {
      id: 2,
      title: 'portfolio',
      description: 'A complete portfolio website showcasing my work and skills',
      tags: ['HTML', 'CSS', 'JS'],
      imageUrl: portfolio,
      githubUrl: 'https://github.com/Kaif-Zakey/Portfolio.git',
      liveUrl: 'https://portfolio-6unf.vercel.app/'
    },
    {
      id: 3,
      title: 'Connect Four Game',
      description: 'Real-time weather information with 5-day forecast',
      tags: ['java'],
      imageUrl: connect4Game,
      githubUrl: 'https://github.com/Kaif-Zakey/Connect-four-Game.git',
    },
    {
      id: 4,
      title: 'calculator',
      description: 'Search and save your favorite recipes',
      tags: ['HTML', 'CSS', 'JS'],
      imageUrl: calculator,
      githubUrl: 'https://github.com/Kaif-Zakey/Assignment-10-Calculator.git',
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project}/>
        ))}
      </div>
    </div>
  )
}
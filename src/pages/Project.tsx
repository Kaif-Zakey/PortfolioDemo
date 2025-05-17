import ProjectCard from '../components/ProjectCard';
import portfolio from '../assets/portfolio.png';
import calculator from '../assets/calculator.png';
import connect4Game from '../assets/connect4game.png';
import ecommerce from '../assets/ecommerce.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB'],
      imageUrl: ecommerce,
      githubUrl: 'https://github.com/Kaif-Zakey/WindsorBookshop_FrontEnd.git',
      liveUrl: 'https://youtu.be/xdA5sqPQ2iY',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A complete portfolio website showcasing my work and skills',
      tags: ['HTML', 'CSS', 'JS'],
      imageUrl: portfolio,
      githubUrl: 'https://github.com/Kaif-Zakey/Portfolio.git',
      liveUrl: 'https://portfolio-6unf.vercel.app/',
    },
    {
      id: 3,
      title: 'Connect Four Game',
      description: 'A classic two-player Connect Four game in Java',
      tags: ['Java'],
      imageUrl: connect4Game,
      githubUrl: 'https://github.com/Kaif-Zakey/Connect-four-Game.git',
    },
    {
      id: 4,
      title: 'Calculator App',
      description: 'A simple and responsive calculator using HTML, CSS and JavaScript',
      tags: ['HTML', 'CSS', 'JS'],
      imageUrl: calculator,
      githubUrl: 'https://github.com/Kaif-Zakey/Assignment-10-Calculator.git',
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300 dark:bg-indigo-800 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 dark:bg-purple-800 rounded-full opacity-20 blur-3xl z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          A collection of applications, games, and web platforms I’ve built with passion and precision.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

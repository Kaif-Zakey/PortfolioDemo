import type { Project } from '../types'
import SkillBadge from './SkillBadge'



interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <SkillBadge key={tag} skill={tag} />
          ))}
        </div>
        
        <div className="flex space-x-3">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
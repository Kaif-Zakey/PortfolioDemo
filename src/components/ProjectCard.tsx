import type { Project } from "../types";
import SkillBadge from "./SkillBadge";

interface ProjectCardProps {
  project: Project;
  isDarkMode?: boolean;
}

export default function ProjectCard({
  project,
  isDarkMode = true,
}: ProjectCardProps) {
  return (
    <div
      className={`border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800 ${
        !isDarkMode ? "bg-white border-gray-300" : ""
      }`}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3
          className={`text-xl font-semibold text-gray-900 dark:text-white mb-2 ${
            !isDarkMode ? "text-black" : ""
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-gray-900 dark:text-gray-300 mb-4 ${
            !isDarkMode ? "text-black" : ""
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <SkillBadge key={tag} skill={tag} isDarkMode={isDarkMode} />
          ))}
        </div>

        <div className="flex space-x-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="text-sm text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="text-sm text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

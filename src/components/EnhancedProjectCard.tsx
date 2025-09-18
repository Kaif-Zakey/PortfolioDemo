import React from "react";
import { motion } from "framer-motion";

interface EnhancedProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
  };
  isDarkMode: boolean;
}

const EnhancedProjectCard: React.FC<EnhancedProjectCardProps> = ({
  project,
  isDarkMode,
}) => {
  return (
    <motion.div
      className={`relative group overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-500 h-full flex flex-col ${
        isDarkMode
          ? "bg-gray-900/20 border-gray-700/30 hover:border-indigo-500/50"
          : "bg-white/20 border-gray-200/30 hover:border-indigo-400/50"
      } shadow-2xl hover:shadow-indigo-500/20`}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image */}
      <div className="relative overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="relative p-6 flex-1 flex flex-col">
        <h3
          className={`text-xl font-bold mb-3 transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-sm leading-relaxed mb-4 transition-colors duration-300 flex-1 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border transition-all duration-300 ${
                isDarkMode
                  ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                  : "bg-indigo-100/80 text-indigo-700 border-indigo-200/50"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex justify-between items-center gap-2">
          {project.liveUrl && project.githubUrl ? (
            // Two buttons - Live Demo on left, View Code on right
            <>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs md:text-sm font-medium rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-indigo-500/30"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs md:text-sm font-medium rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-purple-500/30"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="hidden sm:inline">View Code</span>
                <span className="sm:hidden">Code</span>
              </a>
            </>
          ) : project.liveUrl ? (
            // Only Live Demo button - center it
            <div className="w-full flex justify-center">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white text-xs md:text-sm font-medium rounded-full shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-indigo-500/30"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </a>
            </div>
          ) : project.githubUrl ? (
            // Only GitHub button - center it
            <div className="w-full flex justify-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs md:text-sm font-medium rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-purple-500/30"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-3 h-3 md:w-4 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="hidden sm:inline">View Code</span>
                <span className="sm:hidden">Code</span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedProjectCard;

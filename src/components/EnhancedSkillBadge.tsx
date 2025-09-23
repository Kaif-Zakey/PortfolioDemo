import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiMongoose,
  SiBootstrap,
  SiFigma,
  SiAngular,
  SiDocker,
  SiKubernetes,
  SiPostman,
  SiSpring,
  SiMysql,
} from "react-icons/si";

interface EnhancedSkillBadgeProps {
  skill: string;
  isDarkMode: boolean;
  proficiency?: number; // 1-5 scale
}

const EnhancedSkillBadge: React.FC<EnhancedSkillBadgeProps> = ({
  skill,
  isDarkMode,
  proficiency = Math.floor(Math.random() * 3) + 3, // Random proficiency 3-5 for demo
}) => {
  const getSkillIcon = (skillName: string) => {
    const iconMap: {
      [key: string]: React.ComponentType<{ size?: number; className?: string }>;
    } = {
      React: SiReact,
      TypeScript: SiTypescript,
      JavaScript: SiJavascript,
      "Node.js": SiNodedotjs,
      "Tailwind CSS": SiTailwindcss,
      Git: SiGit,
      MongoDB: SiMongodb,
      Firebase: SiFirebase,
      Python: SiPython,
      HTML: SiHtml5,
      CSS: SiCss3,
      "Next.js": SiNextdotjs,
      // New technologies
      SQL: SiMysql,
      Mongoose: SiMongoose,
      Bootstrap: SiBootstrap,
      "React Native": SiReact,
      Native: SiReact,
      Figma: SiFigma,
      Angular: SiAngular,
      Docker: SiDocker,
      Kubernetes: SiKubernetes,
      Postman: SiPostman,
      "Spring Boot": SiSpring,
      // Fallbacks for technologies without specific icons
      Express: SiNodedotjs,
      PostgreSQL: SiMongodb,
      AWS: SiNodedotjs,
      GraphQL: SiReact,
      Redux: SiReact,
      Java: SiNodedotjs, // Using Node.js icon as fallback
      Hibernate: SiMongodb, // Using MongoDB icon as fallback
    };

    const IconComponent = iconMap[skillName] || SiReact;
    return (
      <IconComponent
        size={24}
        className={`transition-colors duration-300 ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      />
    );
  };

  const getProficiencyColor = (level: number) => {
    switch (level) {
      case 5:
        return "from-emerald-400 to-teal-500";
      case 4:
        return "from-blue-400 to-indigo-500";
      case 3:
        return "from-purple-400 to-violet-500";
      case 2:
        return "from-indigo-400 to-purple-500";
      case 1:
        return "from-slate-400 to-slate-500";
      default:
        return "from-indigo-400 to-purple-500";
    }
  };

  return (
    <motion.div
      className={`relative group w-24 h-24 rounded-2xl backdrop-blur-xl border transition-all duration-500 cursor-pointer overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-gray-700/50 hover:border-indigo-400/70 hover:from-indigo-900/50 hover:to-purple-900/50"
          : "bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200/50 hover:border-indigo-300/70 hover:from-indigo-50/70 hover:to-purple-50/70"
      } shadow-lg hover:shadow-xl hover:shadow-indigo-500/30`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getProficiencyColor(
          proficiency
        )} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full gap-2 p-3">
        {/* Technology Icon */}
        <motion.div
          className={`p-2 rounded-xl transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-700/70 hover:bg-gray-600/90"
              : "bg-gray-100/80 hover:bg-white/90"
          } shadow-sm hover:shadow-md`}
          whileHover={{ rotate: 5 }}
        >
          {getSkillIcon(skill)}
        </motion.div>

        {/* Proficiency indicator dots */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-1 h-1 rounded-full ${
                i < proficiency
                  ? `bg-gradient-to-r ${getProficiencyColor(proficiency)}`
                  : isDarkMode
                  ? "bg-gray-600"
                  : "bg-gray-300"
              }`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced hover particles effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-0.5 h-0.5 bg-gradient-to-r ${getProficiencyColor(
                proficiency
              )} rounded-full opacity-0 group-hover:opacity-80`}
              style={{
                top: `${Math.sin((i * 45 * Math.PI) / 180) * 25}px`,
                left: `${Math.cos((i * 45 * Math.PI) / 180) * 25}px`,
              }}
              animate={{
                scale: [0, 1.2, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle border animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-transparent"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${
            isDarkMode ? "rgba(139, 92, 246, 0.3)" : "rgba(139, 92, 246, 0.2)"
          }, transparent)`,
          backgroundClip: "padding-box",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default EnhancedSkillBadge;

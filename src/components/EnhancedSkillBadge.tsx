import React from "react";
import { motion } from "framer-motion";

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

  const getProficiencyLabel = (level: number) => {
    switch (level) {
      case 5:
        return "Expert";
      case 4:
        return "Advanced";
      case 3:
        return "Intermediate";
      case 2:
        return "Beginner";
      case 1:
        return "Learning";
      default:
        return "Intermediate";
    }
  };

  return (
    <motion.div
      className={`relative group w-32 min-w-32 max-w-40 px-4 py-3 rounded-2xl backdrop-blur-xl border transition-all duration-500 cursor-pointer overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/40 hover:border-indigo-400/60 hover:from-indigo-900/40 hover:to-purple-900/40"
          : "bg-gradient-to-br from-gray-50/70 to-gray-100/70 border-gray-300/40 hover:border-indigo-300/60 hover:from-indigo-50/60 hover:to-purple-50/60"
      } shadow-lg hover:shadow-indigo-500/25`}
    >
      {/* Background glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${getProficiencyColor(
          proficiency
        )} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}
      ></div>

      {/* Proficiency indicator */}
      <div className="absolute top-2 right-2 flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i < proficiency
                ? `bg-gradient-to-r ${getProficiencyColor(proficiency)}`
                : isDarkMode
                ? "bg-gray-600"
                : "bg-gray-300"
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center gap-1">
        <span
          className={`font-semibold text-xs sm:text-sm transition-colors duration-300 text-center leading-tight ${
            isDarkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          {skill}
        </span>

        <span
          className={`text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center leading-tight ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {getProficiencyLabel(proficiency)}
        </span>

        {/* Enhanced animated dot */}
        <motion.div
          className={`w-2 h-2 rounded-full bg-gradient-to-r ${getProficiencyColor(
            proficiency
          )}`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
            boxShadow: [
              "0 0 0 rgba(139, 92, 246, 0)",
              "0 0 6px rgba(139, 92, 246, 0.4)",
              "0 0 0 rgba(139, 92, 246, 0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Enhanced hover particles effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${getProficiencyColor(
                proficiency
              )} rounded-full opacity-0 group-hover:opacity-100`}
              style={{
                top: `${Math.sin((i * 60 * Math.PI) / 180) * 20}px`,
                left: `${Math.cos((i * 60 * Math.PI) / 180) * 20}px`,
              }}
              animate={{
                scale: [0, 1.05, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Subtle border animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        style={{
          background: `conic-gradient(from 0deg, transparent, rgba(139, 92, 246, 0.25), transparent)`,
          backgroundClip: "padding-box",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

export default EnhancedSkillBadge;

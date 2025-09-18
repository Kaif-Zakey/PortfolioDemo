interface SkillBadgeProps {
  skill: string;
  isDarkMode?: boolean;
}

export default function SkillBadge({
  skill,
  isDarkMode = true,
}: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-200 ${
        !isDarkMode ? "bg-white text-black border border-gray-300" : ""
      }`}
    >
      {skill}
    </span>
  );
}

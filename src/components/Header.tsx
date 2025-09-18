import { useState } from "react";
import { motion } from "framer-motion";
import logoImage from "../assets/logowithoutbg.png";

interface HeaderProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export default function Header({ isDarkMode, onThemeToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
        isDarkMode
          ? "bg-gray-900/20 border-gray-700/30"
          : "bg-white/20 border-gray-200/30"
      } shadow-2xl`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="transition-all duration-300 hover:scale-105"
          >
            <img
              src={logoImage}
              alt="Kaif Zaki Logo"
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.button
              onClick={() => scrollToSection("home")}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group ${
                isDarkMode
                  ? "text-gray-300 hover:text-indigo-400"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Home</span>
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("about")}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group ${
                isDarkMode
                  ? "text-gray-300 hover:text-indigo-400"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">About</span>
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("projects")}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group ${
                isDarkMode
                  ? "text-gray-300 hover:text-indigo-400"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Projects</span>
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("skills")}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group ${
                isDarkMode
                  ? "text-gray-300 hover:text-indigo-400"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Skills</span>
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("blog")}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group ${
                isDarkMode
                  ? "text-gray-300 hover:text-indigo-400"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Blog</span>
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 group overflow-hidden ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-white"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
            </motion.button>

            {/* Theme Toggle Button */}
            <button
              onClick={onThemeToggle}
              className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-indigo-400/70 hover:bg-indigo-500/20"
                  : "bg-white/50 border-gray-300/50 hover:border-indigo-400/70 hover:bg-indigo-100/50"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                // Sun icon for light mode
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-indigo-400/70 hover:bg-indigo-500/20"
                  : "bg-white/50 border-gray-300/50 hover:border-indigo-400/70 hover:bg-indigo-100/50"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700/50 hover:border-indigo-400/70 hover:bg-indigo-500/20"
                  : "bg-white/50 border-gray-300/50 hover:border-indigo-400/70 hover:bg-indigo-100/50"
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-5 h-5 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-left ${
                  isDarkMode
                    ? "text-gray-300 hover:text-indigo-400 hover:bg-indigo-500/20"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-100/50"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-left ${
                  isDarkMode
                    ? "text-gray-300 hover:text-indigo-400 hover:bg-indigo-500/20"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-100/50"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-left ${
                  isDarkMode
                    ? "text-gray-300 hover:text-indigo-400 hover:bg-indigo-500/20"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-100/50"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-left ${
                  isDarkMode
                    ? "text-gray-300 hover:text-indigo-400 hover:bg-indigo-500/20"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-100/50"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-left ${
                  isDarkMode
                    ? "text-gray-300 hover:text-indigo-400 hover:bg-indigo-500/20"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-100/50"
                }`}
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 text-left ${
                  isDarkMode
                    ? "text-gray-300 hover:text-indigo-400 hover:bg-indigo-500/20"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-100/50"
                }`}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

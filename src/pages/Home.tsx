import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EnhancedProjectCard from "../components/EnhancedProjectCard";
import EnhancedSkillBadge from "../components/EnhancedSkillBadge";
import AnimatedCounter from "../components/AnimatedCounter";
import StarField from "../components/StarField";
import hero from "../assets/Home.jpeg";
import homePic from "../assets/hero.png";
import ecommerce from "../assets/ecommerce.png";
import portfolio from "../assets/portfolio.png";
import calculator from "../assets/calculator.png";
import connect4Game from "../assets/connect4game.png";
import cvFile from "../assets/lib/Kaif_Zaki_CV.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

export default function Home({ isDarkMode }: { isDarkMode: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [showAllProjects, setShowAllProjects] = useState(false);

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const jobTitles = useMemo(
    () => [
      "Full Stack Developer",
      "DevOps Engineer",
      "Web Developer",
      "React Developer",
    ],
    []
  );

  useEffect(() => {
    const currentTitle = jobTitles[currentTitleIndex];
    let timeout: number;

    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 100); // Speed of typing (100ms per character)
      } else {
        // Finished typing, wait before starting to delete
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Wait 2 seconds before deleting
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Speed of deleting (50ms per character - faster than typing)
      } else {
        // Finished deleting, move to next title
        setCurrentTitleIndex((prevIndex) =>
          prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
        );
        // Small delay before starting to type the next word
        setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentTitleIndex, jobTitles]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your .env file."
        );
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: "kaifzakey22@gmail.com", // Hardcoded for now
        message: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setShowSuccessMessage(true);
      setFormData({ name: "", email: "", message: "" });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again or contact me directly at kaifzakey22@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB"],
      imageUrl: ecommerce,
      githubUrl: "https://github.com/Kaif-Zakey/WindsorBookshop_FrontEnd.git",
      liveUrl: "https://youtu.be/xdA5sqPQ2iY",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A complete portfolio website showcasing my work and skills",
      tags: ["HTML", "CSS", "JS"],
      imageUrl: portfolio,
      githubUrl: "https://github.com/Kaif-Zakey/Portfolio.git",
      liveUrl: "https://portfolio-6unf.vercel.app/",
    },
    {
      id: 3,
      title: "Connect Four Game",
      description: "A classic two-player Connect Four game in Java",
      tags: ["Java"],
      imageUrl: connect4Game,
      githubUrl: "https://github.com/Kaif-Zakey/Connect-four-Game.git",
    },
  ];

  const allProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      tags: ["React", "Node.js", "MongoDB"],
      imageUrl: ecommerce,
      githubUrl: "https://github.com/Kaif-Zakey/WindsorBookshop_FrontEnd.git",
      liveUrl: "https://youtu.be/xdA5sqPQ2iY",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A complete portfolio website showcasing my work and skills",
      tags: ["HTML", "CSS", "JS"],
      imageUrl: portfolio,
      githubUrl: "https://github.com/Kaif-Zakey/Portfolio.git",
      liveUrl: "https://portfolio-6unf.vercel.app/",
    },
    {
      id: 3,
      title: "Connect Four Game",
      description: "A classic two-player Connect Four game in Java",
      tags: ["Java"],
      imageUrl: connect4Game,
      githubUrl: "https://github.com/Kaif-Zakey/Connect-four-Game.git",
    },
    {
      id: 4,
      title: "Calculator App",
      description:
        "A simple and responsive calculator using HTML, CSS and JavaScript",
      tags: ["HTML", "CSS", "JS"],
      imageUrl: calculator,
      githubUrl: "https://github.com/Kaif-Zakey/Assignment-10-Calculator.git",
    },
  ];

  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "REST APIs",
    "MongoDB",
    "Firebase",
    "Python",
    "HTML",
    "CSS",
    "Next.js",
    "SQL",
    "Mongoose",
    "Bootstrap",
    "React Native",
    "Native",
    "Figma",
    "Angular",
    "Docker",
    "Kubernetes",
    "Postman",
    "Spring Boot",
    "Java",
    "Hibernate",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      excerpt:
        "Learn how to set up a new project with React and TypeScript for type-safe development.",
      date: "May 15, 2025",
      readTime: "5 min read",
      url: "https://dev.to/kaif_zaki_c96b5d3db7a801f/getting-started-with-react-typescript-a-beginners-guide-3n3b",
    },
    {
      id: 2,
      title: "Tailwind CSS: Utility-First Approach",
      excerpt:
        "Why I switched to Tailwind CSS and how it improved my development workflow.",
      date: "september 20, 2025",
      readTime: "7 min read",
      url: "https://dev.to/kaif_zaki_c96b5d3db7a801f/tailwind-css-the-utility-first-approach-explained-4gdf",
    },
    {
      id: 3,
      title: "State Management in 2025",
      excerpt:
        "Comparing different state management solutions for React applications.",
      date: "september 19, 2025",
      readTime: "10 min read",
      url: "https://dev.to/kaif_zaki_c96b5d3db7a801f/state-management-in-2025-what-you-need-to-know-32c8",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCVDownload = () => {
    // Create a link element to download the PDF
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Kaif_Zaki_CV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBlogPostClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900/30 via-gray-800/10 to-gray-900/30"
          : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      }`}
    >
      {/* Stars Background for Dark Mode */}
      {isDarkMode && <StarField />}

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-visible min-h-[80vh] sm:min-h-[85vh] md:min-h-screen flex items-center"
      >
        {/* Modern gradient overlays */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div
            className={`absolute -top-12 sm:-top-16 md:-top-24 -right-12 sm:-right-16 md:-right-24 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse ${
              isDarkMode ? "opacity-20 sm:opacity-30 bg-gray-700" : "opacity-0"
            }`}
          ></div>
          <div
            className={`absolute -bottom-12 sm:-bottom-16 md:-bottom-24 -left-12 sm:-left-16 md:-left-24 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full blur-3xl animate-pulse ${
              isDarkMode ? "opacity-20 sm:opacity-30 bg-gray-600" : "opacity-0"
            }`}
          ></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-28 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Content Section - Left Side */}
            <motion.div
              className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center md:text-left order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-3 sm:mb-4 drop-shadow-lg"
                style={{
                  WebkitTextStroke: isDarkMode
                    ? "1px rgba(255,255,255,0.3)"
                    : "1px rgba(0,0,0,0.2)",
                  filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
                }}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              >
                Hi, I'm Kaif Zaki
              </motion.h1>

              <motion.h2
                className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-gray-300 font-medium mb-4 sm:mb-6 relative inline-block ${
                  !isDarkMode ? "text-black" : ""
                }`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              >
                <div className="relative h-6 sm:h-8 md:h-10 lg:h-12 flex items-center justify-center md:justify-start">
                  <motion.span
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } font-semibold relative text-sm sm:text-base md:text-lg lg:text-xl`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="relative z-10">{displayedText}</span>
                    {/* Subtle glow effect */}
                    <span
                      className={`absolute inset-0 ${
                        isDarkMode ? "text-indigo-400" : "text-indigo-600"
                      } opacity-20 blur-sm`}
                      style={{ filter: "blur(1px)" }}
                    >
                      {displayedText}
                    </span>
                  </motion.span>

                  {/* Animated cursor */}
                  <motion.span
                    className="ml-1 h-4 sm:h-5 md:h-6 lg:h-7 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"
                    animate={{
                      opacity: [1, 1, 0],
                      scaleY: [1, 1, 0.8],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <span className="absolute -bottom-1 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-indigo-400 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-full animate-pulse"></span>
              </motion.h2>

              <motion.p
                className={`max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-xl mx-auto md:mx-0 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                I build exceptional digital experiences with modern web
                technologies, creating innovative solutions that push the
                boundaries of what's possible.
              </motion.p>

              {/* Enhanced Stats Section */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-6 mb-6 sm:mb-8 md:mb-12">
                <motion.div
                  className="group text-center md:text-left"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <div className="relative">
                    <AnimatedCounter
                      end={30}
                      suffix="+"
                      className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p
                    className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-1 sm:mt-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Projects Completed
                  </p>
                </motion.div>
                <motion.div
                  className="group text-center md:text-left"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.85 }}
                >
                  <div className="relative">
                    <AnimatedCounter
                      end={2}
                      suffix="+"
                      className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p
                    className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-1 sm:mt-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Years Experience
                  </p>
                </motion.div>
                <motion.div
                  className="group text-center md:text-left"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                >
                  <div className="relative">
                    <AnimatedCounter
                      end={100}
                      suffix="%"
                      className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p
                    className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-1 sm:mt-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Client Satisfaction
                  </p>
                </motion.div>
                <motion.div
                  className="group text-center md:text-left"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.95 }}
                >
                  <div className="relative">
                    <AnimatedCounter
                      end={25}
                      suffix="+"
                      className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p
                    className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-1 sm:mt-2 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Technologies
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 lg:gap-6 w-full sm:w-auto"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
              >
                <motion.button
                  onClick={handleCVDownload}
                  className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white rounded-full font-medium shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download CV
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="group relative px-6 sm:px-8 py-2.5 sm:py-3 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50 rounded-full font-medium shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Let's Talk
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Enhanced Image Section - Right Side */}
            <motion.div
              className="relative group order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative max-w-56 sm:max-w-64 md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
                {/* Multiple gradient layers for depth */}
                <div className="absolute -inset-3 sm:-inset-4 md:-inset-5 lg:-inset-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse"></div>
                <div className="absolute -inset-2 sm:-inset-2.5 md:-inset-3 lg:-inset-4 bg-gradient-to-r from-purple-500 via-cyan-500 to-indigo-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="absolute -inset-1 sm:-inset-1.5 md:-inset-2 lg:-inset-3 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500"></div>

                <motion.img
                  src={homePic}
                  alt="Kaif Zaki - Full Stack Developer"
                  className="relative w-full rounded-2xl object-cover shadow-2xl border-2 sm:border-4 border-white/20 backdrop-blur-sm transition-all duration-500 group-hover:scale-105"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl"></div>

                {/* Enhanced floating elements with better animations */}
                <motion.div
                  className="absolute -top-3 sm:-top-4 md:-top-5 lg:-top-6 -right-3 sm:-right-4 md:-right-5 lg:-right-6 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg"
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-3 sm:-bottom-4 md:-bottom-5 lg:-bottom-6 -left-3 sm:-left-4 md:-left-5 lg:-left-6 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg"
                  animate={{
                    y: [10, -10, 10],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                ></motion.div>

                {/* Additional decorative elements */}
                <motion.div
                  className="absolute top-1/4 -left-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.div
                  className="absolute bottom-1/4 -right-4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-5">
          <div
            className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl z-0 ${
              isDarkMode ? "bg-gray-700 opacity-20" : "opacity-0"
            }`}
          ></div>
          <div
            className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl z-0 ${
              isDarkMode ? "bg-gray-600 opacity-20" : "opacity-0"
            }`}
          ></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span
                className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
                style={{
                  WebkitTextStroke: isDarkMode
                    ? "1px rgba(255,255,255,0.3)"
                    : "1px rgba(0,0,0,0.2)",
                  filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
                }}
              >
                About Me
              </span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img
                  src={hero}
                  alt="Kaif Zaki - Full Stack Developer"
                  className="relative w-full max-w-md mx-auto rounded-2xl object-cover shadow-2xl border-4 border-white/10 backdrop-blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse delay-1000"></div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div>
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Passionate Full Stack Developer
                </h3>
                <div className="space-y-4">
                  <p
                    className={`text-lg leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Hello! I'm{" "}
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                      Kaif Zaki
                    </span>
                    , a passionate Full Stack Developer with 5 years of
                    experience crafting modern web applications that combine
                    beautiful design with robust functionality.
                  </p>
                  <p
                    className={`text-lg leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    I specialize in{" "}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      React, TypeScript, Node.js, and Java
                    </span>
                    , creating responsive, user-friendly interfaces that solve
                    real-world problems. My journey in web development began
                    during college, and I've been hooked ever since.
                  </p>
                  <p
                    className={`text-lg leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open-source projects, or
                    enjoying outdoor activities like hiking and photography.
                  </p>
                </div>
              </div>

              {/* Enhanced Key Highlights with Animated Counters */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div
                  className={`group p-4 rounded-xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70"
                      : "bg-white/50 border-gray-200/50 hover:bg-white/70"
                  } shadow-lg hover:shadow-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="relative mb-2">
                      <AnimatedCounter
                        end={2}
                        suffix="+"
                        className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                      />
                      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Years Experience
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className={`group p-4 rounded-xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70"
                      : "bg-white/50 border-gray-200/50 hover:bg-white/70"
                  } shadow-lg hover:shadow-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <div className="relative mb-2">
                      <AnimatedCounter
                        end={30}
                        suffix="+"
                        className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent"
                      />
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Projects Completed
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Section */}
          <motion.section
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3
              className={`text-2xl sm:text-3xl font-bold  mb-8 text-center ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Experience
            </h3>
            <div className="space-y-8">
              <motion.div
                className={`group backdrop-blur-sm p-6 rounded-xl shadow-md border-l-4 border-gray-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${
                  isDarkMode
                    ? "bg-gray-800 text-white hover:bg-gray-800/80"
                    : "bg-white text-black hover:bg-gray-50/80"
                }`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4
                      className={`text-xl font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Senior Frontend Developer
                    </h4>
                    <p
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Tech Corp Inc. • 2020 - Present
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse"></div>
                </div>
                <p
                  className={`text-gray-900 dark:text-gray-300 leading-relaxed ${
                    !isDarkMode ? "text-black" : ""
                  }`}
                >
                  Lead the frontend development team, architecting scalable
                  React applications and mentoring junior developers.
                  Implemented modern development practices and improved team
                  productivity by 40%.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs rounded-full font-medium border border-indigo-200 dark:border-indigo-800">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium border border-purple-200 dark:border-purple-800">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-xs rounded-full font-medium border border-cyan-200 dark:border-cyan-800">
                    Next.js
                  </span>
                </div>
              </motion.div>
              <motion.div
                className={`group backdrop-blur-sm p-6 rounded-xl shadow-md border-l-4 border-gray-600 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${
                  isDarkMode
                    ? "bg-gray-800 text-white hover:bg-gray-800/80"
                    : "bg-white text-black hover:bg-gray-50/80"
                }`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4
                      className={`text-xl font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Frontend Developer
                    </h4>
                    <p
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Web Solutions Ltd. • 2018 - 2020
                    </p>
                  </div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
                </div>
                <p
                  className={`text-gray-900 dark:text-gray-300 leading-relaxed ${
                    !isDarkMode ? "text-black" : ""
                  }`}
                >
                  Developed responsive web applications using React and
                  implemented CI/CD pipelines. Collaborated with design teams to
                  create pixel-perfect user interfaces.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-xs rounded-full font-medium border border-emerald-200 dark:border-emerald-800">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-200 dark:border-blue-800">
                    React
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 text-xs rounded-full font-medium border border-slate-200 dark:border-slate-700">
                    SCSS
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="projects"
        className="relative py-16 md:py-24 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6"
                style={{
                  WebkitTextStroke: isDarkMode
                    ? "1px rgba(255,255,255,0.3)"
                    : "1px rgba(0,0,0,0.2)",
                  filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
                }}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Featured Projects
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.p
                className={`max-w-2xl mx-auto text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                A showcase of my most impactful and exciting development
                projects that demonstrate cutting-edge technologies.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(showAllProjects ? allProjects : featuredProjects).map(
                (project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <EnhancedProjectCard
                      project={project}
                      isDarkMode={isDarkMode}
                    />
                  </motion.div>
                )
              )}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
              >
                {showAllProjects ? "Show Less" : "View All Projects"}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6"
                style={{
                  WebkitTextStroke: isDarkMode
                    ? "1px rgba(255,255,255,0.3)"
                    : "1px rgba(0,0,0,0.2)",
                  filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
                }}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Skills & Technologies
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.p
                className={`max-w-2xl mx-auto text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                A comprehensive toolkit of cutting-edge languages, frameworks,
                and platforms that power my development journey.
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-start">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0"
                >
                  <EnhancedSkillBadge skill={skill} isDarkMode={isDarkMode} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6 drop-shadow-lg"
                style={{
                  WebkitTextStroke: isDarkMode
                    ? "1px rgba(255,255,255,0.3)"
                    : "1px rgba(0,0,0,0.2)",
                  filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
                }}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Latest Blog Posts
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.p
                className={`max-w-2xl mx-auto text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Insights, tutorials, and thoughts on web development,
                technology, and design.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-3xl backdrop-blur-xl border transition-all duration-500 cursor-pointer ${
                    isDarkMode
                      ? "bg-gray-900/30 border-gray-700/40 hover:border-indigo-500/60 hover:bg-gray-900/40"
                      : "bg-white/30 border-gray-200/40 hover:border-indigo-400/60 hover:bg-white/40"
                  } shadow-2xl hover:shadow-indigo-500/30 hover:shadow-2xl`}
                  whileHover={{ scale: 1.03, y: -8, rotateX: 5 }}
                  onClick={() => handleBlogPostClick(post.url)}
                >
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300"></div>

                  <div className="relative p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 text-sm mb-4">
                      <motion.span
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                          isDarkMode
                            ? "bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 border border-gray-600/50"
                            : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border border-gray-300/50"
                        } shadow-sm`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {post.date}
                      </motion.span>
                      <motion.span
                        className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full transition-all duration-300 ${
                          isDarkMode
                            ? "text-gray-400 bg-gray-800/50"
                            : "text-gray-500 bg-gray-50/50"
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        {post.readTime}
                      </motion.span>
                    </div>

                    <motion.h3
                      className={`text-xl font-bold mb-4 transition-all duration-300 line-clamp-2 ${
                        isDarkMode
                          ? "text-white group-hover:text-indigo-300"
                          : "text-gray-900 group-hover:text-indigo-700"
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {post.title}
                    </motion.h3>

                    <motion.p
                      className={`text-sm leading-relaxed mb-6 flex-grow transition-all duration-300 ${
                        isDarkMode
                          ? "text-gray-300 group-hover:text-gray-200"
                          : "text-gray-600 group-hover:text-gray-700"
                      }`}
                    >
                      {post.excerpt}
                    </motion.p>

                    <div className="flex items-center justify-between mt-auto">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBlogPostClick(post.url);
                        }}
                        className={`group/btn flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3 ${
                          isDarkMode
                            ? "text-indigo-400 hover:text-indigo-300"
                            : "text-indigo-600 hover:text-indigo-700"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Read more</span>
                        <motion.svg
                          className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </motion.button>

                      <motion.div
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg
                          className="w-5 h-5 text-white"
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
                      </motion.div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6"
                style={{
                  WebkitTextStroke: isDarkMode
                    ? "1px rgba(255,255,255,0.3)"
                    : "1px rgba(0,0,0,0.2)",
                  filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
                }}
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Get In Touch
              </motion.h2>
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.p
                className={`max-w-2xl mx-auto text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                I'm open to opportunities, collaborations, or just a friendly
                chat. Feel free to connect with me!
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div
                  className={`backdrop-blur-xl rounded-2xl p-8 border transition-all duration-500 ${
                    isDarkMode
                      ? "bg-gray-900/20 border-gray-700/30"
                      : "bg-white/20 border-gray-200/30"
                  } shadow-2xl`}
                >
                  <h3
                    className={`text-2xl font-bold mb-6 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                        <FaEnvelope className="text-white text-lg" />
                      </div>
                      <div>
                        <p
                          className={`font-medium ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Email
                        </p>
                        <p
                          className={`text-sm ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          kaifzakey22@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                        <FaPhoneAlt className="text-white text-lg" />
                      </div>
                      <div>
                        <p
                          className={`font-medium ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Phone
                        </p>
                        <p
                          className={`text-sm ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          (+94) 776737532
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-white text-lg" />
                      </div>
                      <div>
                        <p
                          className={`font-medium ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Location
                        </p>
                        <p
                          className={`text-sm ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          Sri Lanka
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <motion.a
                      href="https://github.com/Kaif-Zakey"
                      className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-gray-800/50 border-gray-700/50 hover:border-indigo-400/70"
                          : "bg-white/50 border-gray-300/50 hover:border-indigo-400/70"
                      }`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="GitHub"
                    >
                      <FaGithub
                        className={`text-lg ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/kaif-zakey-727397332"
                      className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-gray-800/50 border-gray-700/50 hover:border-indigo-400/70"
                          : "bg-white/50 border-gray-300/50 hover:border-indigo-400/70"
                      }`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin
                        className={`text-lg ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      />
                    </motion.a>
                    <motion.a
                      href="https://www.facebook.com/share/1BPaBTQH8h/?mibextid=wwXIfr"
                      className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 ${
                        isDarkMode
                          ? "bg-gray-800/50 border-gray-700/50 hover:border-indigo-400/70"
                          : "bg-white/50 border-gray-300/50 hover:border-indigo-400/70"
                      }`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Facebook"
                    >
                      <FaFacebook
                        className={`text-lg ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className={`backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 relative overflow-hidden ${
                    isDarkMode
                      ? "bg-gray-900/30 border-gray-700/40"
                      : "bg-white/30 border-gray-200/40"
                  } shadow-2xl`}
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

                  <motion.h3
                    className={`text-2xl font-bold mb-8 relative ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Send a Message
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                  </motion.h3>

                  <form onSubmit={handleSubmit} className="space-y-6 relative">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative group">
                        <label
                          htmlFor="name"
                          className={`absolute left-4 top-3 text-sm font-medium transition-all duration-300 pointer-events-none ${
                            formData.name
                              ? "transform -translate-y-2 scale-75 text-indigo-500"
                              : isDarkMode
                              ? "text-gray-400"
                              : "text-gray-500"
                          } ${
                            isDarkMode
                              ? "group-focus-within:text-indigo-400"
                              : "group-focus-within:text-indigo-600"
                          }`}
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 pt-6 pb-3 rounded-xl backdrop-blur-sm border-2 transition-all duration-300 focus:ring-4 focus:ring-indigo-500/20 focus:outline-none group ${
                            isDarkMode
                              ? "bg-gray-800/60 border-gray-600/60 text-white placeholder-transparent focus:border-indigo-400"
                              : "bg-white/60 border-gray-300/60 text-gray-900 placeholder-transparent focus:border-indigo-500"
                          } shadow-lg hover:shadow-xl`}
                          placeholder="Your name"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative group">
                        <label
                          htmlFor="email"
                          className={`absolute left-4 top-3 text-sm font-medium transition-all duration-300 pointer-events-none ${
                            formData.email
                              ? "transform -translate-y-2 scale-75 text-indigo-500"
                              : isDarkMode
                              ? "text-gray-400"
                              : "text-gray-500"
                          } ${
                            isDarkMode
                              ? "group-focus-within:text-indigo-400"
                              : "group-focus-within:text-indigo-600"
                          }`}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 pt-6 pb-3 rounded-xl backdrop-blur-sm border-2 transition-all duration-300 focus:ring-4 focus:ring-indigo-500/20 focus:outline-none group ${
                            isDarkMode
                              ? "bg-gray-800/60 border-gray-600/60 text-white placeholder-transparent focus:border-indigo-400"
                              : "bg-white/60 border-gray-300/60 text-gray-900 placeholder-transparent focus:border-indigo-500"
                          } shadow-lg hover:shadow-xl`}
                          placeholder="your.email@example.com"
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative group">
                        <label
                          htmlFor="message"
                          className={`absolute left-4 top-3 text-sm font-medium transition-all duration-300 pointer-events-none ${
                            formData.message
                              ? "transform -translate-y-2 scale-75 text-indigo-500"
                              : isDarkMode
                              ? "text-gray-400"
                              : "text-gray-500"
                          } ${
                            isDarkMode
                              ? "group-focus-within:text-indigo-400"
                              : "group-focus-within:text-indigo-600"
                          }`}
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 pt-6 pb-3 rounded-xl backdrop-blur-sm border-2 transition-all duration-300 focus:ring-4 focus:ring-indigo-500/20 focus:outline-none resize-none group ${
                            isDarkMode
                              ? "bg-gray-800/60 border-gray-600/60 text-white placeholder-transparent focus:border-indigo-400"
                              : "bg-white/60 border-gray-300/60 text-gray-900 placeholder-transparent focus:border-indigo-500"
                          } shadow-lg hover:shadow-xl`}
                          placeholder="Your message..."
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
                      </div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group relative w-full px-8 py-4 font-semibold rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm overflow-hidden ${
                        isSubmitting
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white hover:shadow-indigo-500/50 hover:-translate-y-2"
                      }`}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <svg
                              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              />
                            </svg>
                          </>
                        )}
                      </span>
                      {!isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Success Notification */}
      {showSuccessMessage && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.6,
          }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div
            className={`${
              isDarkMode
                ? "bg-gradient-to-r from-emerald-500/90 to-teal-600/90 border-emerald-400/50"
                : "bg-gradient-to-r from-emerald-500/95 to-teal-600/95 border-emerald-300/50"
            } backdrop-blur-xl border rounded-2xl px-6 py-4 shadow-2xl max-w-md mx-4`}
          >
            <div className="flex items-center gap-4">
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className="flex-shrink-0"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Message Content */}
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white font-bold text-lg mb-1"
                >
                  Message Sent! 🎉
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/90 text-sm"
                >
                  Thank you for reaching out! I'll get back to you within 24
                  hours.
                </motion.p>
              </div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setShowSuccessMessage(false)}
                className="flex-shrink-0 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 group"
              >
                <svg
                  className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 5, ease: "linear" }}
              className="mt-4 h-1 bg-white/30 rounded-full origin-left"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

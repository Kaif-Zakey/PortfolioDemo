import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logoImage from "../assets/logowithoutbg.png";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`relative backdrop-blur-xl border-t transition-all duration-500 overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-t from-gray-900/30 via-gray-800/10 to-transparent border-gray-700/30"
          : "bg-gradient-to-t from-gray-50/30 via-white/10 to-transparent border-gray-200/30"
      }`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 left-1/4 w-32 h-32 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-purple-600" : "bg-purple-300"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-1/4 w-40 h-40 rounded-full blur-3xl opacity-15 ${
            isDarkMode ? "bg-indigo-600" : "bg-indigo-300"
          }`}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={logoImage}
                alt="Kaif Zaki Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <p
              className={`text-sm sm:text-base leading-relaxed mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              FullStack Developer creating innovative digital experiences with
              modern technologies and pushing the boundaries of what's possible.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div
                className={`flex items-center gap-3 text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <FaEnvelope className="text-indigo-500 flex-shrink-0" />
                <span>kaifzakey22@gmail.com</span>
              </div>
              <div
                className={`flex items-center gap-3 text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <FaPhone className="text-indigo-500 flex-shrink-0" />
                <span>+94 (77) 6737532</span>
              </div>
              <div
                className={`flex items-center gap-3 text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <FaMapMarkerAlt className="text-indigo-500 flex-shrink-0" />
                <span>Sri Lanka, Moratuwa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4
              className={`text-lg font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Projects", id: "projects" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left text-sm sm:text-base transition-all duration-300 hover:translate-x-2 group ${
                    isDarkMode
                      ? "text-gray-300 hover:text-indigo-400"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4
              className={`text-lg font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Services
            </h4>
            <div className="space-y-3">
              {[
                "Web Development",
                "Full Stack Solutions",
                "UI/UX Design",
                "API Development",
                "Database Design",
                "Performance Optimization",
              ].map((service) => (
                <div
                  key={service}
                  className={`text-sm sm:text-base transition-colors duration-300 hover:text-indigo-500 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <h4
              className={`text-lg font-semibold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-4 mb-6">
              {[
                {
                  name: "Instagram",
                  icon: FaInstagram,
                  url: "https://www.instagram.com/kaif_zak?igsh=MTgycWZxNWNzZ3prNg==",
                  color: "from-pink-500 to-orange-500",
                },
                {
                  name: "GitHub",
                  icon: FaGithub,
                  url: "https://github.com/Kaif-Zakey",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  name: "LinkedIn",
                  icon: FaLinkedin,
                  url: "https://www.linkedin.com/in/kaif-zakey",
                  color: "from-blue-600 to-blue-800",
                },
                {
                  name: "Facebook",
                  icon: FaFacebook,
                  url: "https://www.facebook.com/share/1BPaBTQH8h/?mibextid=wwXIfr",
                  color: "from-blue-500 to-blue-700",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/30 overflow-hidden`}
                  whileHover={{
                    scale: 1.15,
                    y: -3,
                    rotate: index % 2 === 0 ? 5 : -5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  aria-label={social.name}
                >
                  <social.icon className="text-white text-lg relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              ))}
            </div>

            {/* Newsletter signup hint */}
            <div
              className={`text-xs sm:text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Let's build something amazing together!
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200/30 dark:border-gray-700/30 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="text-center">
            <p
              className={`text-xs sm:text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              © {new Date().getFullYear()} Kaif Zaki. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 via-transparent to-transparent pointer-events-none"></div>
    </footer>
  );
}

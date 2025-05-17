import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} All rights reserved @Kaif Zaki</p>
        <div className="flex justify-center space-x-6 mt-2 text-2xl">
          <a href="https://www.instagram.com/kaif_zak?igsh=MTgycWZxNWNzZ3prNg==" className="hover:text-blue-500 dark:hover:text-blue-400" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://github.com/Kaif-Zakey" className="hover:text-blue-500 dark:hover:text-blue-400" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kaif-zakey" className="hover:text-blue-500 dark:hover:text-blue-400" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

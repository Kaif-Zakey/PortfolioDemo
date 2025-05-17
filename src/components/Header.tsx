import { NavLink } from 'react-router-dom'



export default function Header() {
  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          Kaif Zaki
        </NavLink>
        
        <nav className="flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }: { isActive: boolean }) => 
              `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }: { isActive: boolean }) => 
              `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }: { isActive: boolean }) => 
              `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }: { isActive: boolean }) => 
              `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
import "tailwindcss";
import image from "../assets/about.jpg"


export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Hello! I'm kaif, a passionate FullStack developer with 5 years of experience building 
            modern web applications. I specialize in React, ,Java ,TypeScript, and responsive design.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            My journey in web development started when I was in college, and I've been hooked ever since. 
            I love solving complex problems and creating intuitive, user-friendly interfaces.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting 
            with new cooking recipes.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <img 
            src={image} 
            alt="Profile" 
            className="w-48 h-48 rounded-full object-cover mb-4"
          />
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">kaif zaki</h2>
            <p className="text-gray-600 dark:text-gray-400">FullStack Developer</p>
          </div>
        </div>
      </div>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Experience</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Senior Frontend Developer</h3>
            <p className="text-gray-600 dark:text-gray-400">Tech Corp Inc. • 2020 - Present</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Lead the frontend development team, architecting scalable React applications and mentoring junior developers.
            </p>
          </div>
          <div className="border-l-2 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Frontend Developer</h3>
            <p className="text-gray-600 dark:text-gray-400">Web Solutions Ltd. • 2018 - 2020</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Developed responsive web applications using React and implemented CI/CD pipelines.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
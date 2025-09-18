// import image from "../assets/about.jpg";

// export default function About() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
//       {/* Background Blur Circles */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-300 dark:bg-indigo-800 rounded-full opacity-20 blur-3xl z-0"></div>
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 dark:bg-purple-800 rounded-full opacity-20 blur-3xl z-0"></div>

//       <div className="relative z-10 max-w-5xl mx-auto px-6">
//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-center mb-10">
//           <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
//             About Me
//           </span>
//         </h1>

//         {/* About Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
//           <div className="md:col-span-2 space-y-4">
//             <p className="text-gray-800 dark:text-gray-300">
//               Hello! I'm Kaif, a passionate FullStack developer with 5 years of
//               experience building modern web applications. I specialize in
//               React, Java, TypeScript, and responsive design.
//             </p>
//             <p className="text-gray-800 dark:text-gray-300">
//               My journey in web development started when I was in college, and
//               I've been hooked ever since. I love solving complex problems and
//               creating intuitive, user-friendly interfaces.
//             </p>
//             <p className="text-gray-800 dark:text-gray-300">
//               When I'm not coding, you can find me hiking, reading sci-fi
//               novels, or experimenting with new cooking recipes.
//             </p>
//           </div>

//           <div className="flex flex-col items-center">
//             <img
//               src={image}
//               alt="Profile"
//               className="w-48 h-48 rounded-full object-cover shadow-lg mb-4"
//             />
//             <div className="text-center">
//               <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 Kaif Zaki
//               </h2>
//               <p className="text-gray-700 dark:text-gray-400">
//                 FullStack Developer
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Experience Section */}
//         <section className="mt-16">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//             Experience
//           </h2>
//           <div className="space-y-8">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 Senior Frontend Developer
//               </h3>
//               <p className="text-gray-700 dark:text-gray-400">
//                 Tech Corp Inc. • 2020 - Present
//               </p>
//               <p className="text-gray-800 dark:text-gray-300 mt-2">
//                 Lead the frontend development team, architecting scalable React
//                 applications and mentoring junior developers.
//               </p>
//             </div>
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-indigo-500">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                 Frontend Developer
//               </h3>
//               <p className="text-gray-700 dark:text-gray-400">
//                 Web Solutions Ltd. • 2018 - 2020
//               </p>
//               <p className="text-gray-800 dark:text-gray-300 mt-2">
//                 Developed responsive web applications using React and
//                 implemented CI/CD pipelines.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

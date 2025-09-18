// import "tailwindcss";


// export default function Blog() {
//   const posts = [
//     {
//       id: 1,
//       title: 'Getting Started with React and TypeScript',
//       excerpt: 'Learn how to set up a new project with React and TypeScript for type-safe development.',
//       date: 'May 15, 2023',
//       readTime: '5 min read'
//     },
//     {
//       id: 2,
//       title: 'Tailwind CSS: Utility-First Approach',
//       excerpt: 'Why I switched to Tailwind CSS and how it improved my development workflow.',
//       date: 'April 28, 2023',
//       readTime: '7 min read'
//     },
//     {
//       id: 3,
//       title: 'State Management in 2023',
//       excerpt: 'Comparing different state management solutions for React applications.',
//       date: 'March 10, 2023',
//       readTime: '10 min read'
//     }
//   ]

//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Blog</h1>
      
//       <div className="space-y-8">
//         {posts.map(post => (
//           <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-6">
//             <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
//               <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">{post.title}</a>
//             </h2>
//             <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
//               {post.date} • {post.readTime}
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
//             <a 
//               href="#" 
//               className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
//             >
//               Read more →
//             </a>
//           </article>
//         ))}
//       </div>
//     </div>
//   )
// }
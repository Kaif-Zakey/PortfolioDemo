import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Get In Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Contact Information</h2>
          <p className="text-gray-700 dark:text-gray-300">
            I'm open to opportunities, collaborations, or just a friendly chat. Feel free to connect with me!
          </p>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span>kaifzakey22@gmail.com</span>
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500" />
              <span>(+94) 776737532</span>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Sri Lanka</span>
            </p>
          </div>

          <div className="flex space-x-4 mt-6 text-2xl">

            <a href="https://github.com/Kaif-Zakey" className="hover:text-blue-500 transition-colors" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kaif-zakey-727397332" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
             <a href="https://www.facebook.com/share/1BPaBTQH8h/?mibextid=wwXIfr" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
              <FaFacebook />
            </a>

          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

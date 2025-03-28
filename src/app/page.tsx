'use client';

import Navbar from '@/components/Navbar';
import { useInitialAnimation } from '@/components/Animations';

export default function Home() {
  useInitialAnimation();

  return (
    <main className="overflow-hidden">
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <Navbar />
            
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800 dark:text-white">KE</span>
                  </div>
                </div>
                <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  Karl Eñano
                </h1>
                <p className="hero-subtitle text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Full Stack Developer | UI/UX Designer | Problem Solver
                </p>
                <div className="hero-buttons flex gap-4 justify-center">
                  <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    Contact Me
                  </a>
                  <a href="#projects" className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    View Projects
                  </a>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      I&apos;m a passionate developer with 5 years of experience in creating beautiful and functional web applications.
                      I specialize in React, Node.js, and cloud technologies.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
                      or sharing my knowledge through technical blog posts.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="skill-item p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Frontend</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                      </ul>
                    </div>
                    <div className="skill-item p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Backend</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>PostgreSQL</li>
                        <li>AWS</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Featured Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="animate-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-[400px] relative bg-[#0F1218]">
                      <img 
                        src="/projects/ssr-vs-ssg-preview.png" 
                        alt="SSR vs SSG Comparison Project Preview"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">SSR vs SSG Comparison</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A comprehensive comparison of Server-Side Rendering (SSR) and Static Site Generation (SSG) in Next.js, demonstrating the differences and use cases for each approach.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                          Next.js
                        </span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                          React
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                          TypeScript
                        </span>
                      </div>
                      <a 
                        href="https://ssr-vs-ssg-seven.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  <div className="animate-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Portfolio Website</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and a clean design.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                          Next.js
                        </span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                          Tailwind CSS
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                          TypeScript
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Get in Touch</h2>
                <div className="max-w-xl mx-auto">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 bg-gray-50 dark:bg-gray-900">
              <div className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-300">
                <p>© 2025 Karl Eñano. All rights reserved.</p>
                <div className="flex justify-center gap-6 mt-4">
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">GitHub</a>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Twitter</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}

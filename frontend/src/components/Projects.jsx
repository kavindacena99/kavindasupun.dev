import React from "react";
import AnimatedSection from "./AnimatedSection";
import doughgo from '../assets/doughgo.png';
import slpp from '../assets/sllp.png';
import shoe from '../assets/shoe.png';

function Projects(){
    const projects = [
    {
      title: "DoughGo – Bakery Delivery System",
      description:
        "A multi-role system for bakeries, drivers, and customers to manage orders, deliveries, and reviews.",
      image: doughgo,
      tech: ["React", "React Native", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com/yourusername/doughgo", 
      demo: "https://yourdoughgodemo.com", 
    },
    {
      title: "The Shoe Box",
      description:
        "An e-commerce platform for buying and selling shoes with user reviews and ratings.",
      image: shoe,
      tech: ["Laravel", "MySQL", "JWT", "Bootstrap"],
      github: "https://github.com/yourusername/tenantrix"
    },
    {
      title: "Land Price Prediction",
      description:
        "A machine learning model to predict Sri Lankan land prices based on location and size.",
      image: slpp,
      tech: ["Python", "Scikit-learn", "Pandas"],
      github: "https://github.com/kavindacena99/Sri-Lankan-Land-Price-Predictor"
    },
  ];

  return (
    <AnimatedSection id="projects" className="py-20 bg-gray-900 text-white flex flex-col items-center px-6">
      <h2 className="text-4xl font-bold mb-8 text-blue-400">Projects</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection> );
}

export default Projects;
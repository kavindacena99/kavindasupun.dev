import React from "react";
import AnimatedSection from "./AnimatedSection";

function Skills(){
    const skills = [
        { name: "Laravel", icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
        { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
        { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
        { name: "Go", icon: "https://cdn.worldvectorlogo.com/logos/gopher.svg" },
        { name: "Git", icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    ];

  return (
    <AnimatedSection id="skills" className="py-20 bg-gray-800 text-white flex flex-col items-center px-6">
      <h2 className="text-4xl font-bold mb-8 text-blue-400">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 max-w-5xl">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
    );
}

export default Skills;
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white">Kavinda Supun</h1>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className="hidden md:flex space-x-6 text-gray-300">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a href={nav.link} className="hover:text-teal-400">
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-gray-300 p-4 space-y-4">
          {navLinks.map((nav, index) => (
            <li key={index}>
              <a
                href={nav.link}
                className="block hover:text-teal-400"
                onClick={() => setIsOpen(false)}
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

import { motion } from "framer-motion";
import React from "react";
import heroBg from "../assets/bcg.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-6"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 max-w-3xl">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m <span className="text-blue-400">Kavinda Supun Dissanayake</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ marginLeft: 50 }}
        >Full - Stack Developer | Machine Learning Engineer | Content Writer
        </motion.p>

        <motion.a
          href="#projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
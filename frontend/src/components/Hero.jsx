import React from "react";
import AnimatedSection from "./AnimatedSection";

function Hero(){
    return(
        <AnimatedSection id="hero" className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-800 text-white px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hi, I’m <span className="text-blue-400">Kavinda Supun</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-6">
                Full-Stack Developer | Laravel • MERN • React Native • Data Science
            </p>
            <a
                href="#projects"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
            >
                View My Work
            </a>
        </AnimatedSection>
    );
}

export default Hero;
import React from "react";
import AnimatedSection from "./AnimatedSection";
import dp from '../assets/dp.jpg';

function About(){
    return(
        <AnimatedSection id="about" className="py-20 bg-gray-900 text-white flex flex-col items-center px-6">
            <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>

            <div className="max-w-4xl flex flex-col md:flex-row items-center gap-10">
                {/* Profile Image */}
                <img
                src={ dp }
                alt="Kavinda Supun"
                className="w-48 h-60 rounded-full border-4 border-blue-400 shadow-lg"
                />

                <div>
                    <p className="text-lg leading-relaxed mb-4">
                        I’m <span className="text-blue-400">Kavinda Supun</span>, a
                        passionate Full-Stack Developer skilled in
                        <span className="font-semibold"> Laravel, MERN, React Native, and Data Science</span>.
                        I enjoy building powerful and user-friendly applications that
                        deliver real-world solutions.
                    </p>
                    <p className="text-lg leading-relaxed">
                        I recently completed my BSc in Applied Mathematics and Computing and have developed projects ranging from bakery delivery systems to AI-powered solutions. I’m driven by curiosity, constantly exploring new technologies, and dedicated to creating innovative, impactful products.
                    </p>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default About;
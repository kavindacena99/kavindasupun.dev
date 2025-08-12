import React from "react";
import AnimatedSection from "./AnimatedSection";

function About(){
    return(
        <AnimatedSection id="about" className="py-20 bg-gray-900 text-white flex flex-col items-center px-6">
            <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>

            <div className="max-w-4xl flex flex-col md:flex-row items-center gap-10">
                {/* Profile Image */}
                <img
                src="https://placehold.co/200x200"
                alt="Kavinda Supun"
                className="w-48 h-48 rounded-full border-4 border-blue-400 shadow-lg"
                />

                {/* Bio */}
                <div>
                    <p className="text-lg leading-relaxed mb-4">
                        I’m <span className="text-blue-400">Kavinda Supun</span>, a
                        passionate Full-Stack Developer skilled in
                        <span className="font-semibold"> Laravel, MERN, React Native, and Data Science</span>.
                        I enjoy building powerful and user-friendly applications that
                        deliver real-world solutions.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Currently, I’m a final-year Applied Mathematics and Computing undergraduate,
                        and I’ve worked on projects ranging from bakery delivery systems to AI-powered
                        solutions. I’m always eager to learn new technologies and create innovative products.
                    </p>
                </div>
            </div>
        </AnimatedSection>
    );
}

export default About;
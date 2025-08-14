import React from "react";
import AnimatedSection from "./AnimatedSection";

function Contact(){
    return (
        <AnimatedSection id="contact" className="py-20 bg-gray-800 text-white flex flex-col items-center px-6">
            <h2 className="text-4xl font-bold mb-8 text-blue-400">Contact Me</h2>

            <p className="text-lg text-gray-300 max-w-2xl text-center mb-6">
                Interested in working together or have a project idea?  
                Feel free to reach out — I’ll get back to you as soon as I can.
            </p>

            {/* Email */}
            <a
                href="mailto:kavindasupun@example.com"
                className="text-blue-400 text-lg font-semibold mb-8 hover:underline"
            >
                kavindach4@gmail.com
            </a>

            {/* Social Links */}
            <div className="flex gap-6">
                <a
                href="https://github.com/kavindacena99"
                target="_blank"
                className="hover:text-blue-400"
                >
                GitHub
                </a>
                <a
                href="https://www.linkedin.com/in/kavindasupundissanayake99/"
                target="_blank"
                className="hover:text-blue-400"
                >
                LinkedIn
                </a>
                <a
                href="https://twitter.com/yourusername"
                target="_blank"
                className="hover:text-blue-400"
                >
                Twitter
                </a>
            </div>
        </AnimatedSection>
    );
}

export default Contact;
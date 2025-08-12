import React from "react";

function Footer(){
    return(
        <footer className="bg-gray-900 text-gray-400 text-center py-6 border-t border-gray-700">
            <p className="text-sm">
                © {new Date().getFullYear()} Kavinda Supun. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
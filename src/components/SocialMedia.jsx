import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../style";

const SocialMedia = () => {
  return (
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex-1 h-px bg-gray-400"></div>
            <span className="px-4 text-gray-400 font-poppins text-sm">
              Or find me on
            </span>
            <div className="flex-1 h-px bg-gray-400"></div>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-200 group-hover:scale-110">
                <FaGithub className="text-black text-xl" />
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-200 group-hover:scale-110">
                <FaLinkedin className="text-white text-xl" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;

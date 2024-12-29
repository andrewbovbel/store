'use client';

import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import MenuIcon from "@material-ui/icons/Menu"; // Import the Menu icon
import { socialsData } from "./Data";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Disable scrolling when dropdown is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className=" p-3 rounded-full shadow-md transition "
        ////flex items-center justify-center w-full p-2"
      >
        
        <MenuIcon />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute bottom-full mb-2 rounded-md  transform transition-all duration-300 ease-in-out origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-2 shadow-md rounded-full">
          {socialsData.map((social, i) => (
            <li key={i}>
              <SocialIcon url={social.url} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
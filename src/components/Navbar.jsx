import logo from "../assets/jddllogo2_cropped.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="#" className="hover:cursor-pointer">
          <img className="mx-2" src={logo} alt="logo" />
        </a>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`lg:flex ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}
      >
        <div className="lg:m-8 flex flex-col lg:flex-row items-center justify-center gap-6 text-2xl font-thin">
          <a href="#" className="hover:cursor-pointer">
            Home
          </a>
          <a href="#about-me" className="hover:cursor-pointer">
            About Me
          </a>
          <a href="#technologies" className="hover:cursor-pointer">
            Technologies
          </a>
          <a href="#experience" className="hover:cursor-pointer">
            Experience
          </a>
          <a href="#projects" className="hover:cursor-pointer">
            Projects
          </a>
          <a href="#contact" className="hover:cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

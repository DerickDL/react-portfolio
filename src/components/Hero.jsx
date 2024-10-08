import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/derickProfile_copy.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home">
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start lg:mx-20 xl:mx-0">
              <motion.h1
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                John Derick De Leon
              </motion.h1>
              <motion.span
                className="bg-gradient-to-r from-blue-300 via-slate-500 to-blue-900 bg-clip-text text-4xl tracking-tight text-transparent"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Full Stack Developer
              </motion.span>
              <motion.p
                className="my-2 max-w-xl py-6 tracking-tighter font-light"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {HERO_CONTENT}
              </motion.p>
              <motion.div
                className="my-10 flex items-center justify-center gap-4 text-2xl"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <a
                  href="https://www.linkedin.com/in/johnderickdeleon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/DerickDL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/drckdl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/derickdl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </motion.div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img
                className="rounded-2xl"
                src={profilePic}
                alt="profile picture"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

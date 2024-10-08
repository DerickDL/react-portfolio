import aboutImage from "../assets/about2.jpg";
import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <motion.div
      id="about-me"
      whileInView={() => {
        setIsInView(true);
        return {};
      }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          transition={{ duration: 1.5, delay: 0.5 }}
          className="my-20 text-center text-4xl font-thin"
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={
            isInView && {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }
          }
        >
          About Me
        </motion.h2>
        <div className="flex flex-wrap">
          <motion.div
            className="w-full lg:w-1/2 lg:p-8"
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={
              isInView && {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                },
              }
            }
          >
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutImage} alt="about me" />
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 lg:p-8"
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={
              isInView && {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                },
              }
            }
          >
            <div className="flex items-center justify-center">
              <p className="my-2 max-w-xl py-6 tracking-tighter font-light">
                {ABOUT_TEXT}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;

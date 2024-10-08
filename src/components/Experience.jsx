import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Experience = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <motion.div
      id="experience"
      whileInView={() => {
        setIsInView(true);
        return true;
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
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
          Experience
        </motion.h2>
        <div className="flex-wrap items-center">
          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className="mb-8 flex flex-wrap lg:justify-center items-start"
            >
              <motion.div
                className="w-full lg:w-1/4 items-center"
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
                      delay: 0.5 + index,
                    },
                  }
                }
              >
                <p className="lg:mb-32 text-sm text-neutral-400">
                  {experience.year}
                </p>
              </motion.div>
              <motion.div
                className="w-full lg:w-3/4 max-w-xl items-center lg:ml-8"
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
                      delay: 0.5 + index,
                    },
                  }
                }
              >
                <h6 className="mb-2 font-semibold">
                  {experience.role} -{" "}
                  <span className="text-sm text-blue-100">
                    {experience.company}
                  </span>
                </h6>
                <p className="mb-4 text-neutral-400">
                  {experience.description}
                </p>
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

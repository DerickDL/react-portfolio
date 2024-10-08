import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <motion.div
      id="projects"
      whileInView={() => {
        setIsInView(true);
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="border-b border-neutral-900 pb-4">
        <motion.h2
          className="my-20 text-center text-4xl font-thin"
          initial={{ y: -100, opacity: 0 }}
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
          Projects
        </motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                className="w-full lg:w-1/4"
                initial={{ x: -100, opacity: 0 }}
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="rounded"
                    src={project.image}
                    width={450}
                    height={150}
                    alt={project.title}
                  />
                </a>
              </motion.div>
              <motion.div
                className="w-full lg:w-3/4 max-w-xl lg:ml-8"
                initial={{ x: 100, opacity: 0 }}
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
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-blue-600"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
        <p className="text-neutral-400 text-center text-sm font-thin italic">
          *Please note that these are selected highlights from my previous
          projects.
        </p>
      </div>
    </motion.div>
  );
};

export default Projects;

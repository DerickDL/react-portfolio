import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPhp } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Technologies = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <motion.div
      id="technologies"
      whileInView={() => {
        setIsInView(true);
        return {};
      }}
      viewport={{ once: true, amount: 0.5 }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
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
          Technologies
        </motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            title="Laravel"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            whileHover={{
              scale: 1,
              rotateY: 360,
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            <FaLaravel className="text-7xl text-orange-700" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            title="React"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            whileHover={{
              scale: 1,
              rotateZ: 360,
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            <FaReact className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            title="VueJS"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            whileHover={{
              scale: 1,
              rotateX: 360,
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            <FaVuejs className="text-7xl text-green-400" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            title="NextJS"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            whileHover={{ scale: 1.2 }}
          >
            <RiNextjsFill className="text-7xl text-white" />
          </motion.div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-5">
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            title="PHP"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            whileHover={{ scale: 1.2 }}
          >
            <FaPhp className="text-7xl text-sky-500" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            title="JavaScript"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            whileHover={{ scale: 1.2 }}
          >
            <SiJavascript className="text-7xl text-yellow-300" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            title="HTML"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            whileHover={{ scale: 1.2 }}
          >
            <FaHtml5 className="text-7xl text-orange-400" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            title="CSS"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            whileHover={{ scale: 1.2 }}
          >
            <FaCss3 className="text-7xl text-blue-400" />
          </motion.div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-5">
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            title="Redis"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            whileHover={{ scale: 1.2 }}
          >
            <DiRedis className="text-7xl text-red-600" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            title="MySQL"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            whileHover={{ scale: 1.2 }}
          >
            <DiMysql className="text-7xl text-blue-400" />
          </motion.div>
          <motion.div
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            title="PostgreSQL"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            whileHover={{ scale: 1.2 }}
          >
            <BiLogoPostgresql className="text-7xl text-sky-700" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Technologies;

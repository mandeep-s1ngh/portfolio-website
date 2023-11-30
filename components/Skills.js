"use client";

import React from "react";
import Image from "next/image";
import { skills } from "@/app/constants";
import { motion } from "framer-motion";

const Skills = () => {
  const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <div className="py-10 flex flex-col">
        <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl xs:text-4xl">
          Skills
        </h2>
        {/* <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2> */}
        {/* <h3 className="text-2xl mt-10 w-full text-center">
          These are the frameworks, languages, libraries, and tools I have used
          and gained exposure to during my time as a developer.
        </h3> */}
        <p className="font-medium text-center mt-4">
          These are the frameworks, languages, libraries, and tools I have used
          and gained exposure to during my time as a developer.
        </p>
        <div
          // className="mt-16 flex flex-wrap gap-4 md:gap-8 lg:gap-12 xl:gap-16" suggested by chatgpt
          className="mt-16 flex flex-wrap gap-16 md:gap-12 sm:gap-8 ml-7"
          // className="mt-16 flex flex-wrap gap-16"  - my own class
        >
          {sortedSkills.map((skill) => (
            <div
              // className="block-container w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/8 xl:w-1/10 2xl:w-20 h-20" suggested by chatgpt
              // key={skill.name}
              className="block-container w-20 h-20 mb-5"
              key={skill.name}
            >
              <div className="rounded-xl" />
              <motion.div
                className="rounded-xl flex justify-center items-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  // className="w-auto h-auto object-contain" - my own class
                  className="w-auto md:max-w-full sm:w-16 object-contain"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              <h1
                // className="mt-3 text-sm md:text-base lg:text-lg" suggested by chat gpt
                className="mt-3 flex justify-center whitespace-nowrap md:text-xl sm:text-sm"
                // className="mt-3 flex justify-center whitespace-nowrap" - my own class
              >
                {skill.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;

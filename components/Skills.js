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
        <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
        <h3 className="text-2xl mt-10 w-full text-center">
          These are the libraries, technologies, and tools I have used and
          gained exposure to during my time as a developer.
        </h3>
        <div className="mt-16 flex flex-wrap gap-16">
          {sortedSkills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="rounded-xl" />
              <motion.div
                className="rounded-xl flex justify-center items-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-auto h-auto object-contain"
                />
              </motion.div>
              <h1 className="mt-3 flex justify-center whitespace-nowrap">
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

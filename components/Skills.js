"use client";

import React from "react";
import Image from "next/image";
import { skills } from "@/app/constants";

const Skills = () => {
  const sortedSkills = [...skills].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="py-10 flex flex-col">
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl xs:text-4xl md:mt-32">
        Skills
      </h2>
      <p className="font-medium text-center mt-4">
        These are the frameworks, languages, libraries, and tools I have used
        and gained exposure to during my time learning software development.
      </p>
      <div className="mt-16 flex flex-wrap gap-16 xs:mx-9 sm:mx-7 md:mx-18 lg:mx-16 xl:mx-18 2xl:mx-18">
        {sortedSkills.map((skill) => (
          <div className="block-container w-20 h-20 mb-5" key={skill.name}>
            <div className="rounded-xl" />
            <div className="rounded-xl flex justify-center items-center">
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                className="w-auto md:max-w-full sm:w-16 object-contain"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h1 className="mt-3 flex justify-center text-sm text-center">
              {skill.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

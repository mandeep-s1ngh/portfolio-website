"use client";

import React from "react";
import Image from "next/image";
import { certificates } from "@/app/constants/certificates";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2
          className="font-bold text-8xl w-full text-center md:text-6xl xs:text-4xl"
          // className="font-bold text-8xl w-full text-center"
        >
          Learning
        </h2>
        <p className="font-medium text-center mt-4">
          Life is all about learning. I am always willing to learn and explore
          new technologies and tools.
        </p>
        {/* <h3
          className="text-2xl mt-10 w-full text-center"
        >
          Life is all about learning. I am always willing to learn and explore
          new technologies and tools.
        </h3> */}
        <div className="mt-16 ml-12 flex flex-wrap gap-16">
          {certificates.map((certificate) => (
            <div className="block-container w-60 h-60" key={certificate.name}>
              <div className="rounded-xl" />
              <motion.div
                className="rounded-xl flex justify-center items-center"
                // whileHover={{ scale: 1.9 }}
              >
                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-auto h-auto object-contain"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
              <p className="font-medium text-center">{certificate.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;

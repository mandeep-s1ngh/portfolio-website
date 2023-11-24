"use client";

import React from "react";
import Image from "next/image";
import { certificates } from "@/app/constants/certificates";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-bold text-8xl w-full text-center">
          Continuous Learning
        </h2>
        <h3 className="text-2xl mt-10 w-full text-center">
          Life is all about learning. I am always willing to learn and explore
          new technologies and tools.
        </h3>
        <div className="mt-16 ml-12 flex flex-wrap gap-16">
          {certificates.map((certificate) => (
            <div className="block-container w-60 h-60" key={certificate.name}>
              <div className="rounded-xl" />
              <motion.div
                className="rounded-xl flex justify-center items-center"
                whileHover={{ scale: 1.9 }}
              >
                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-auto h-auto object-contain"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;

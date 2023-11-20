"use client";

import React from "react";
import { motion } from "framer-motion";

const headingAnimation = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.25,
      staggerChildren: 0.1,
    },
  },
};

const headingSingleWordAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const paragraphAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.7,
      duration: 2,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <>
      <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
        <motion.h1
          className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
          variants={headingAnimation}
          initial="initial"
          animate="animate"
        >
          {text.split(" ").map((word, index) => (
            <motion.span
              key={word + "-" + index}
              className="inline-block"
              variants={headingSingleWordAnimation}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <motion.p
        variants={paragraphAnimation}
        initial="initial"
        animate="animate"
        className="text-sm/7"
      >
        Former I.T Technician for 10 years turned full-stack software developer.
        Having developed essential soft skills including problem-solving,
        communication, and teamwork in my previous role along with a willingness
        to learn and grow professionally, I now want to combine both variables
        to build a long and successful career in software development.
      </motion.p>
    </>
  );
};

export default AnimatedText;

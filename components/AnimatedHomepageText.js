"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkArrow } from "./Icons";

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

const linkAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2.7,
      duration: 2,
    },
  },
};

const AnimatedHomePageText = ({ text, className = "" }) => {
  return (
    <>
      <motion.p
        variants={paragraphAnimation}
        initial="initial"
        animate="animate"
        className="my-4 text-sm/7 font-medium"
      >
        Former I.T Technician turned full-stack software developer. Having
        developed skills including problem-solving, communication, and teamwork
        in my previous role along with a willingness to learn and grow
        professionally, my goals now are to build a career in software
        development and continue my journey in the technology industry.
      </motion.p>
      <motion.div
        variants={linkAnimation}
        initial="initial"
        animate="animate"
        className="flex items-center self-start mt-2"
      >
        <Link
          href="/dummy.pdf"
          target={"_blank"}
          className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark md:p-2 md:px-4 md:text-base mr-4"
        >
          CV <LinkArrow className={"w-4 ml-2 mb-1"} />
        </Link>
        <Link
          href="mailto:mandeep_singh1993@live.co.uk"
          target={"_blank"}
          className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark md:p-2 md:px-4 md:text-base"
        >
          Say Hello!
        </Link>
      </motion.div>
    </>
  );
};

export default AnimatedHomePageText;
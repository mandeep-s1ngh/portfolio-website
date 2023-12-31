"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LinkArrow } from "./NavBarIcons";

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
      delay: 1.7,
      duration: 2,
    },
  },
};

const AnimatedHomePageText = () => {
  return (
    <>
      <motion.p
        variants={paragraphAnimation}
        initial="initial"
        animate="animate"
        className="my-4 text-base/7 font-medium md:text-sm"
      >
        A technology professional with over a decade of experience. During that
        time, I have acquired skills including problem-solving, communication,
        and teamwork whilst developing a passion for continuous learning &
        growth. My goal is to apply those passions within my current role and
        organization with the aim of tranisitoning into a development role and
        advancing my career.
      </motion.p>
      <motion.div
        variants={linkAnimation}
        initial="initial"
        animate="animate"
        className="flex items-center self-start mt-2 lg:self-center"
      >
        <Link
          href="/Mandeep-Singh-CV.pdf"
          target={"_blank"}
          className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark md:p-2 md:px-4 md:text-base mr-4 dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        >
          CV <LinkArrow className={"w-4 ml-2 mb-1"} />
        </Link>
        <Link
          href="mailto:mandeep_singh1993@live.co.uk"
          target={"_blank"}
          className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark md:p-2 md:px-4 md:text-base dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        >
          Say Hello!
        </Link>
      </motion.div>
    </>
  );
};

export default AnimatedHomePageText;

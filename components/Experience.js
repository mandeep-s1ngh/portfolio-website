"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcons from "./ListIcons";

const WorkDetails = ({
  position,
  company,
  // companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <>
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
      >
        <ListIcons reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          // transition={{ duration: 2.5, type: "spring" }} - my own duration
          transition={{ duration: 0.5, type: "spring" }}
        >
          <h3
            className="capitalize font-bold text-2xl sm:text-xl xs:text-sm"
            // className="capitalize font-bold text-2xl sm:text-xl xs:text-lg"
          >
            {position}&nbsp;
            <a
              // href={companyLink}
              target="_blank"
              className="text-primary dark:text-primaryDark capitalize"
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
            {time} | {address}
          </span>
          <p
            // className="font-normal w-full md:text-sm sm:break-words xs:break-words"
            className="font-medium w-full md:text-sm"
          >
            {work}
          </p>
        </motion.div>
      </li>
    </>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Work Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <WorkDetails
            position="Service Desk Analyst"
            company="Emap"
            // companyLink="https://www.emap.com/"
            time="December 2023 - Present"
            address="London, England"
            work="In nisi incididunt deserunt fugiat eiusmod dolore enim dolore exercitation labore velit Lorem laborum."
          />

          <WorkDetails
            position="Trainee Software Developer"
            company="Northcoders"
            // companyLink="https://northcoders.com/"
            time="January - April 2023"
            address="Remote"
            work="In nisi incididunt deserunt fugiat eiusmod dolore enim dolore exercitation labore velit Lorem laborum."
          />

          <WorkDetails
            position="I.T Technician"
            company="Granular I.T"
            // companyLink="https://granularit.com/"
            time="Feburary 2012 - December 2022"
            address="London, England"
            work="In nisi incididunt deserunt fugiat eiusmod dolore enim dolore exercitation labore velit Lorem laborum."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

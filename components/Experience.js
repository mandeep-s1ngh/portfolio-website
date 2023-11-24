"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcons from "./ListIcons";

const WorkDetails = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);

  return (
    <>
      <li
        ref={ref}
        className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
      >
        <ListIcons reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 2.5, type: "spring" }}
        >
          <h3 className="capitalize font-bold text-2xl">
            {position}&nbsp;
            <a
              href={companyLink}
              target="_blank"
              className="text-primary capitalize"
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium text-dark/75">
            {time} | {address}
          </span>
          <p className="font-medium w-full">{work}</p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center ">
        Work Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <WorkDetails
            position="Service Desk Analyst"
            company="Emap"
            time="December 2023 - Present"
            address="London, England"
            work="In nisi incididunt deserunt fugiat eiusmod dolore enim dolore exercitation labore velit Lorem laborum."
          />

          <WorkDetails
            position="Trainee Full Stack Software Developer"
            company="Northcoders"
            time="January - April 2023"
            address="Remote"
            work="In nisi incididunt deserunt fugiat eiusmod dolore enim dolore exercitation labore velit Lorem laborum."
          />

          <WorkDetails
            position="I.T Technician"
            company="Granular I.T"
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

"use client";

import { useRef } from "react";
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
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.0, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl xs:text-sm sm:text-lg md:text-xl lg:text-lg xl:text-lg 2xl:text-xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
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
            companyLink="https://www.emap.com/"
            time="December 2023 - Present"
            address="London, England"
            work="Providing technical support to end-users addressing issues and queries through various channels. Collaborating with the team to develop and implement technology-related projects and initiatives. Maintaining knowledge of current technology trends to provide up-to-date support and recommendations."
          />

          <WorkDetails
            position="Trainee Software Developer"
            company="Northcoders"
            companyLink="https://northcoders.com/"
            time="January - April 2023"
            address="Remote"
            work="Completed an intensive 4-month coding bootcamp. Learned fundamentals of JavaScript, industry best practices, and how to develop RESTful APIs, databases, and front-end applications. Followed agile working practices to create and deliver a full-stack mobile application as part of a collaborative team project."
          />

          <WorkDetails
            position="I.T Technician"
            company="Granular IT"
            companyLink="https://granularit.com/"
            time="February 2012 - December 2022"
            address="London, England"
            work="Delivered 1st, 2nd, and 3rd line technical support to onsite and remote clients. Developed skills in communication, customer service, problem-solving, and teamwork through the resolution of support queries."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

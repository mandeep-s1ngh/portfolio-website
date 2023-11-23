import React from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
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
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center ">
        Work Experience
      </h2>

      <div className="w-[75%] mx-auto relative">
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Service Desk Analyst"
            company="Emap"
            time="December 2023 - Present"
            address="London, England"
            work="In nisi incididunt deserunt fugiat eiusmod dolore enim dolore exercitation labore velit Lorem laborum."
          />

          <Details
            position="Trainee Full Stack Software Developer"
            company="Northcoders"
            time="January - April 2023"
            address="Remote"
            work="In nisi incididunt deserunt fugiat eiusmod dolore enim dolore exercitation labore velit Lorem laborum."
          />

          <Details
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

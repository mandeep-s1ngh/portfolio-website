"use client";

import Image from "next/image";
import { certificates } from "@/app/constants/certificates";

const Certificates = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-bold text-8xl w-full text-center md:text-6xl xs:text-4xl">
          Learning
        </h2>
        <p className="font-medium text-center mt-4">
          Life is all about learning. I am always willing to learn and explore
          new technologies and tools.
        </p>
        <div className="mt-16 ml-20 flex flex-wrap gap-16 xs:mx-16 sm:mx-24 md:mx-40 lg:mx-12 xl:mx-28 2xl:mx-14">
          {certificates.map((certificate) => (
            <div className="block-container w-60 h-60" key={certificate.name}>
              <div className="rounded-xl" />
              <div className="rounded-xl flex justify-center items-center">
                <Image
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-auto h-auto object-contain"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="font-medium text-center">{certificate.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;

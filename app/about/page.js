import AnimatedHeadings from "@/components/AnimatedHeadings";
import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePic from "@/public/images/profile/profile-pic-1.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";

export const metadata = {
  title: "Mandeep Singh | About",
  description:
    "Page detailing information about Mandeep Singh's life including work, education, and skills.",
};

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <AnimatedHeadings
          text="My Journey!"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <p className="font-medium">
              Having always had a passion for technology, there was only ever
              one career I wanted to build a future in.
            </p>

            <p className="my-4 font-medium">
              I began my journey with an I.T apprenticeship. This allowed me to
              enter the industry, study and acquire certifications. It also
              helped me to land a role as an I.T Technician where I was able to
              build up my technical knowledge as well as develop transferable
              skills.
            </p>

            <p className="font-medium">
              After a decade of service, I wanted to go on a new adventure. A
              new career path. So I decided to leave that role and move into
              software development. This led me to do a coding bootcamp where I
              built multiple projects and learned fundamental coding skills all
              within the space of 4 months.
            </p>

            <p className="mt-4 font-medium">
              I am now back in a service desk role at a company that values
              career development. This will allow me to provide my previous
              experience to the company before making the transition from within
              to align with my long-term career goals. I am also continuing to
              self-study and build projects whenever possible.
            </p>
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark p-8 bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
            <Image
              src={ProfilePic}
              alt="Mandeep Singh"
              className="w-full h-auto rounded-2xl"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                10+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Years in I.T Support
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                5+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Coding Projects Built
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                1
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Exciting Future
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
        <Certificates />
      </Layout>
    </main>
  );
}

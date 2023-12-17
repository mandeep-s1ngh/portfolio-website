import AnimatedHeadings from "@/components/AnimatedHeadings";
import { GithubIcon } from "@/components/NavBarIcons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import eventbuddy from "@/public/images/projects/event.png";
import news from "@/public/images/projects/news-website.png";
import api from "@/public/images/projects/api.png";
import blog from "@/public/images/projects/blog.png";
import shoppingcart from "@/public/images/projects/shopping-cart.png";
import messageboard from "@/public/images/projects/messageboard.png";
import shoppingapi from "@/public/images/projects/shopping-api.png";

export const metadata = {
  title: "Mandeep Singh | Projects",
  description: "Page detailing projects built by Mandeep Singh",
};

const FeaturedProject = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Source Code
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary, buttonText }) => {
  const displayText = buttonText || "Source Code";
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-base 2xl:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark md:text-base"
          >
            {displayText}
          </Link>
          {github && (
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default function Page() {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
      <Layout className="pt-16">
        <AnimatedHeadings
          text="Highlights!"
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />

        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
            <FeaturedProject
              title="Event Buddy"
              img={eventbuddy}
              summary="A mobile application built using React Native, AWS Lambda, and AWS DynamoDB. This was an agile group project which made up the final phase of the Northcoders bootcamp where we could get hands-on with new technology, work as a team, and build a project in 1.5 weeks. It is an app aimed at people who like to go to events."
              link="https://github.com/mandeep-s1ngh/event-buddy"
              type="Featured Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="News Yourself In The Moment"
              img={news}
              link="https://news-control.netlify.app/"
              github="https://github.com/mandeep-s1ngh/nc-news"
              type="News Website"
              summary="Built using JavaScript & React during the front-end phase of the bootcamp."
              buttonText="Visit Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Northcoders News API"
              img={api}
              link="https://nc-news-api-e6xe.onrender.com/api"
              github="https://github.com/mandeep-s1ngh/be-nc-news"
              type="API"
              summary="Built using Express & PostgreSQL during the back-end phase of the bootcamp."
              buttonText="Visit Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="NextJS Blog"
              img={blog}
              link="https://nextjs-tutorial-blog-application.vercel.app/"
              github="https://github.com/mandeep-s1ngh/nextjs-tutorial-blog-application"
              type="Blog"
              summary="Built using TypeScript & Next.js as part of gettings hands-on with the Next.js framework for the very first time."
              buttonText="Visit Project"
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Shopping Cart"
              img={shoppingcart}
              link="https://github.com/mandeep-s1ngh/react-typescript-shopping-cart"
              type="Shopping"
              summary="Built using TypeScript & React to gain an understanding of TypeScript and using it with the React framework."
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Message Board"
              img={messageboard}
              link="https://github.com/mandeep-s1ngh/react-message-board"
              type="Message Submission"
              summary="Built using JavaScript & React to solidify my knowledge of React."
            />
          </div>
          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Shopping List API"
              img={shoppingapi}
              link="https://github.com/mandeep-s1ngh/Shopping-List-API"
              type="API"
              summary="Built using Express & Postgres to solidify my knowledge of API's."
            />
          </div>
        </div>
      </Layout>
    </main>
  );
}

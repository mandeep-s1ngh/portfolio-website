import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePic from "@/public/images/profile/profile-pic.png";
import AnimatedHeadings from "@/components/AnimatedHeadings";
import AnimatedHomePageText from "@/components/AnimatedHomepageText";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-2/5 md:w-full">
            <Image
              src={ProfilePic}
              alt="Profile picture of Mandeep Singh."
              className="w-full h-auto lg:hidden md:inline-block md:w-full"
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedHeadings
              text="Hello, my name is Mandeep Singh."
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
            />
            <AnimatedHomePageText />
            {/* <p>
              Former I.T Technician for 10 years turned full-stack software
              developer. Having developed essential soft skills including
              problem-solving, communication, and teamwork in my previous role
              along with a willingness to learn and grow professionally, I now
              want to combine both variables to build a long and successful
              career in software development.
            </p> */}
          </div>
        </div>
      </Layout>
    </main>
  );
}

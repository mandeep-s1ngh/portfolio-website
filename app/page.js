import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePic from "../public/images/profile/profile-pic.png";
import AnimatedHeadings from "@/components/AnimatedHeadings";
import AnimatedHomePageText from "@/components/AnimatedHomepageText";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src={ProfilePic}
              alt="Profile picture of Mandeep Singh."
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedHeadings
              text="Hello, my name is Mandeep Singh."
              className="!text-6xl !text-left"
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

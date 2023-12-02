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
          <div className="md:inline-block w-2/5 xs:w-3/4 sm:w-3/4 md:w-3/4 lg:w-3/4">
            <Image
              src={ProfilePic}
              alt="Profile picture of Mandeep Singh."
              className="w-full h-auto mb-8 md:inline-block md:w-full"
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
          </div>
        </div>
      </Layout>
    </main>
  );
}

import AnimatedHeadings from "@/components/AnimatedHeadings";
import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/profile-pic-1.png";

export const metadata = {
  title: "Mandeep Singh | About Page",
  description: "Page detailing information about Mandeep Singh",
};

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedHeadings text="My Journey!" className="mb-16" />
        <div className="grid w-full grid-cols-8 gap-40">
          <div className="col-span-3 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Personal statement
            </h2>
            <p className="font-medium">
              Having always had a passion for technology, there was only ever
              one industry I wanted to build a future in.
            </p>

            <p className="my-4 font-medium">
              I began my journey with an I.T apprenticeship. This allowed me to
              enter the industry, study and acquire certifications. It also
              helped me to land a role as an I.T support professional where I
              was able to build up my technical knowledge as well as develop
              transferable skills.
            </p>

            <p className="font-medium">
              After a decade of service, it was time for a change. I wanted to
              go on a new adventure. A new career path. So I took a risk and
              decided to leave my job in tech support and move into software
              development. This led me do a coding bootcamp where I built 3
              different projects and learnt fundamental coding skills all within
              the space of 4 months.
            </p>

            <p className="mt-4 font-medium">
              It also gave me the desire to regularly enhance my skill set
              through continuous learning. Since completing the bootcamp, I have
              not looked backwards. Only forwards!
            </p>
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark  p-8 bg-light">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
            <Image
              src={ProfilePic}
              alt="Mandeep Singh"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-5xl font-bold">10</span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                Years in I.T Support
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">1</span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                Year coding experience
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center">
              <span className="inline-block text-7xl font-bold">1</span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                Exciting Future
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}

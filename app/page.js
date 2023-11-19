import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePic from "../public/images/profile/profile-pic.png";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src={ProfilePic}
              alt="Profile picture of Mandeep Singh"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Layout>
    </main>
  );
}

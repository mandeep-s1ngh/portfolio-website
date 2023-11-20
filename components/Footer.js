import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Built by&nbsp;
          <Link href="/about" className="underline underline-offset-2">
            Mandeep Singh
          </Link>
        </div>
        <Link
          href="mailto:mandeep_singh1993@live.co.uk"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Send me a message!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

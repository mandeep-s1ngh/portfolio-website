import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
      </nav>
      <h2>Logo</h2>
      <nav>
        <Link href="/" target={"_blank"}>
          GitHub
        </Link>
        <Link href="/" target={"_blank"}>
          LinkedIn
        </Link>
        <Link href="/" target={"_blank"}>
          Dark Mode
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;

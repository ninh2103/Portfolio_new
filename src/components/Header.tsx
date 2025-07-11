import DarkModeToggle from "@/components/Darkmode";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md py-2 w-full flex justify-center">
      <div className="container mx-auto flex justify-between items-center px-4 w-2/3">
        <Link href="/">
          <h1 className="text-2xl font-bold">Postfolio</h1>
        </Link>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;

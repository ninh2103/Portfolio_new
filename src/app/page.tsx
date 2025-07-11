import About from "@/app/(public)/About";
import Hero from "@/app/(public)/Hero";
import Projects from "@/app/(public)/Projects";
import Skills from "@/app/(public)/Skills";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
    </>
  );
};

export default page;

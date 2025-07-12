import TimelineForm from "@/app/(public)/Timeline";
import Hero from "@/app/(public)/Hero";
import Projects from "@/app/(public)/Projects";
import Skills from "@/app/(public)/Skills";
import React from "react";
import { Contact } from "@/app/(public)/Contact";

const page = () => {
  return (
    <>
      <Hero />
      <TimelineForm />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default page;

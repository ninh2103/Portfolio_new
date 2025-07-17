import TimelineForm from "@/app/(public)/Timeline";
import Hero from "@/app/(public)/Hero";
import Projects from "@/app/(public)/Projects";
import Skills from "@/app/(public)/Skills";
import React from "react";
import { Contact } from "@/app/(public)/Contact";

const page = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="timeline">
        <TimelineForm />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default page;

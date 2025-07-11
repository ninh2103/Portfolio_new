import { Timeline } from "@/components/ui/timeline";
import { aboutData } from "@/lib/data/about-data";
import React from "react";

const About = () => {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={aboutData} />
    </div>
  );
};

export default About;

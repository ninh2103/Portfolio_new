import { Spotlight } from "@/components/ui/spotlight-new";
import { AnimatedBeamDemo } from "@/lib/data/skill-data";

export default function Skills() {
  return (
    <div className="h-[40rem] w-full rounded-md flex flex-col dark:bg-black/[0.96] antialiased dark:bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-8 max-w-7xl mx-auto relative z-10 w-full pt-20 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center  dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">
          Skills & Technologies
        </h1>
      </div>
      <AnimatedBeamDemo />
    </div>
  );
}

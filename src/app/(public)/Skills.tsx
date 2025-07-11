"use client";
import { Confetti, ConfettiRef } from "@/components/magicui/confetti";
import { Spotlight } from "@/components/ui/spotlight-new";
import { AnimatedBeamDemo } from "@/lib/data/skill-data";
import { useRef } from "react";

export default function Skills() {
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <div className="h-[40rem] w-full rounded-md flex flex-col bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="p-8 max-w-7xl mx-auto relative z-10 w-full pt-20 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Kỹ năng của tôi
        </h1>
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-0 size-full"
          onMouseEnter={() => {
            confettiRef.current?.fire({});
          }}
        />
      </div>
      <AnimatedBeamDemo />
    </div>
  );
}

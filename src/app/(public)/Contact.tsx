"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function Contact() {
  const placeholders = [
    "What's your name?",
    "What's your email?",
    "What's your message?",
    "What's your project?",
    "How to assemble your own PC?",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] w-full rounded-md dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-600  text-center font-sans font-bold">
          Ask Me Anything
        </h1>
        <div className="h-[20rem] flex flex-col justify-center  items-center px-4">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

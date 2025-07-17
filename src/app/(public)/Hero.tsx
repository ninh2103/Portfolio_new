"use client";
import { AuroraText } from "@/components/magicui/aurora-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";
import { DownloadIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-transparent flex justify-between items-center w-2/3">
          <div className="w-1/2 flex flex-col items-center justify-center mb-20">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl">
              <AuroraText>👋 Hello, I&apos;m Nguyễn Đức Ninh</AuroraText>
            </h1>
            <TextGenerateEffect
              words="I&apos;m a student of Information Technology, I&apos;ve learned about Frontend, Backend, Database, Deploy, and frameworks like React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, and tools like Git, GitHub, and Docker."
              className="text-left text-[100px] font-bold leading-tight text-black dark:text-white"
            />

            <div className="flex flex-row gap-4 mt-10 w-1/2 mr-auto">
              <RainbowButton className="w-1/2" asChild>
                <Link href="./NguyenDucNinh_CV.pdf" download>
                  <DownloadIcon className="w-4 h-4 " />
                  Download CV
                </Link>
              </RainbowButton>
              <RainbowButton className="w-1/2" asChild>
                <Link href="https://github.com/ninh2103">
                  <GithubIcon className="w-4 h-4 mr-2" />
                  Link Github
                </Link>
              </RainbowButton>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-1/2 flex items-center justify-center ml-10">
            <div className="h-[30rem]">
              <DirectionAwareHover imageUrl="/images/anh.jpg">
                <p className="font-bold text-xl">Nguyen Duc Ninh</p>
                <p className="font-normal text-sm">
                  Student of Information Technology
                </p>
              </DirectionAwareHover>
            </div>
          </div>
        </div>
      </div>
      <SmoothCursor />
    </section>
  );
};

export default Hero;

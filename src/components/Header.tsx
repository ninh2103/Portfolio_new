"use client";
import { ChevronUp } from "lucide-react";
import DarkModeToggle from "@/components/Darkmode";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

interface NavItem {
  name: string;
  href: string;
  type: "route" | "section";
  sectionId?: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", type: "route" },
  {
    name: "Timeline",
    href: "#timeline",
    type: "section",
    sectionId: "timeline",
  },
  {
    name: "Projects",
    href: "#projects",
    type: "section",
    sectionId: "projects",
  },
  {
    name: "Skills",
    href: "#skills",
    type: "section",
    sectionId: "skills",
  },
  { name: "Contact", href: "#contact", type: "section", sectionId: "contact" },
];

const Header = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const rafRef = useRef<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = useCallback(
    (sectionId: string, name: string) => {
      setActiveNavItem(name);
      if (location.pathname !== "/") {
        window.location.href = `${sectionId}`;
        return;
      }
      const section = sectionRefs.current[sectionId.replace("#", "")];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    [sectionRefs]
  );
  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 300);
      rafRef.current = null;
    });
  }, []);

  const handleNavItemClick = useCallback(
    (item: NavItem) => {
      setActiveNavItem(item.name);
      setIsMenuOpen(false);
      if (item.type === "route") {
        if (item.href === "/") {
          scrollToTop();
        }
      } else if (item.sectionId) {
        scrollToSection(item.href, item.name);
      }
    },
    [scrollToTop, scrollToSection]
  );
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    navItems
      .filter(
        (item): item is NavItem & { sectionId: string } =>
          item.type === "section" && !!item.sectionId
      )
      .forEach((item) => {
        sectionRefs.current[item.sectionId] = document.getElementById(
          item.sectionId
        );
      });
  }, []);

  const AceternityLogo = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3 text-black dark:text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
    );
  };
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md py-2 w-full flex justify-center">
        <div className="container mx-auto flex justify-between items-center px-4 w-2/3">
          <Link href="/">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
            >
              <AceternityLogo />
              <span className="text-sm text-black dark:text-white bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-xl leading-none tracking-tighter text-transparent">
                NDN
              </span>
            </HoverBorderGradient>
          </Link>
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent"
                  onClick={() => handleNavItemClick(item)}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
          <DarkModeToggle />
        </div>
      </header>
      {showScrollTop && (
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-28 right-4 rounded-full shadow-lg z-50"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default Header;

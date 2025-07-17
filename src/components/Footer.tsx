import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-dark py-16 bg-dark">
  <div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
  <div className="flex flex-col gap-2">
    <h4 className="text-xl font-semibold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent">About Me</h4>
    <ul className="space-y-1 text-black dark:text-white">
      <li>Nguyen Duc Ninh</li>
      <li>IT Student | Web Developer</li>
    </ul>
  </div>

  <div className="flex flex-col gap-2">
    <h4 className="text-xl font-semibold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent">Skills & Technologies</h4>
    <ul className="space-y-1 text-black dark:text-white">
      <li>Next.js, React</li>
      <li>Tailwind CSS, Shadcn UI</li>
      <li>TypeScript, Git</li>
    </ul>
  </div>

  <div className="flex flex-col gap-2">
    <h4 className="text-xl font-semibold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent">Projects</h4>
    <ul className="space-y-1 text-black dark:text-white">
      <li>Personal Portfolio</li>
      <li>Todo App</li>
      <li>Instagram Clone (Demo)</li>
    </ul>
  </div>

  <div className="flex flex-col gap-2">
    <h4 className="text-xl font-semibold bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-transparent">Contact</h4>
    <ul className="space-y-1 text-black dark:text-white ">
      <li>Da Nang, Vietnam</li>
      <li>+84 799 830 773</li>
      <li>nguyenducninh210303@gmail.com</li>
    </ul>
  </div>
</div>


    <div className="border-t border-gray-800 pt-8 mt-8 text-center">
      <div className="flex justify-center space-x-6 mb-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="dark:text-white transition-colors"
          >
            <link.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
      <p className="dark:text-white">
        &copy; Thanks to Next.js, Shadcn UI, Magic UI, and Aceternity UI for helping me build this personal website.
      </p>
    </div>
  </div>
</footer>

  );
}

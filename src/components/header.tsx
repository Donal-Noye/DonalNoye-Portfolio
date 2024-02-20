"use client";

import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "Overview",
    href: "/"
  },
  {
    title: "Projects",
    href: "/projects"
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Contacts",
    href: "/contacts"
  },
]

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white/30 backdrop-blur-sm dark:bg-black/30 h-[72px]">
      <div className="md:max-w-6xl md:mx-auto h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/">
            <Image
              width={40}
              height={50}
              src="/icons/logo.svg"
              alt="DN"
            />
          </Link>
          <nav className="flex gap-x-6 items-center">
            {navLinks.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                className={
                  `px-3 py-2 font-medium rounded-md border-2 hover:border-light-green outline-none focus:border-light-green
                   ${pathname === link.href 
                    ? "border-light-green" 
                    : "border-transparent"
                  }`
                }
              >
                {link.title}
              </Link>
            ))}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

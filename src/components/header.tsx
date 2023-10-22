import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const navLinks = [
  {
    title: "Обзор",
    href: "/"
  },
  {
    title: "Проекты",
    href: "/projects"
  },
  {
    title: "Обо мне",
    href: "/about"
  },
  {
    title: "Контакты",
    href: "/contacts"
  },
]

const Header = () => {
  return (
    <header className="dark:bg-black h-[72px]">
      <div className="mx-6 md:max-w-6xl md:mx-auto h-full">
        <div className="flex items-center justify-between h-full">
          <Image width={40} height={50} src="/logo.svg" alt="DN" />
          <nav className="flex gap-x-6 items-center">
            {navLinks.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                className="px-3 py-2 font-medium rounded-md border-2 border-transparent hover:border-light-green outline-none focus:border-light-green"
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

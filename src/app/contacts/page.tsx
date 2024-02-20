import { SocialItem } from "@/app/contacts/_components/social-item";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

const socials = [
  {
    title: "Telegram",
    link: "https://t.me/donalnoye",
    username: "@donalnoye",
    icon: "telegram"
  },
  {
    title: "Github",
    link: "https://github.com/Donal-Noye",
    username: "Donal-Noye",
    icon: "github"
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/donalnoye/",
    icon: "linkedin"
  },
];

export default function ContactsPage() {
  return (
    <>
      <div className="flex items-center gap-x-4 mb-6">
        <span className="block w-1.5 h-1.5 bg-gray rounded-full" />
        <h2 className="text-xl text-gray uppercase font-semibold">Stay connected</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {socials.map(social => (
          <SocialItem
            key={social.title}
            title={social.title}
            icon={social.icon}
            link={social.link}
            username={social.username}
          />
        ))}
      </div>
      <Separator className="my-8" />
      <div className="flex items-center gap-x-4 mb-6">
        <span className="block w-1.5 h-1.5 bg-gray rounded-full" />
        <h2 className="text-xl text-gray uppercase font-semibold">My Email</h2>
      </div>
      <a className="flex gap-4 items-center hover:text-black/50 dark:hover:text-white/75 transition" href="mailto:leekeiz49@gmail.com">
        <Mail />
        leekeiz49@gmail.com
      </a>
    </>
  );
};

import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface SocialItemProps {
  title: string;
  link: string;
  icon: string;
  username?: string;
}

export const SocialItem = ({ title, icon, username, link }: SocialItemProps) => {
  return (
    <Link
      className="flex justify-between items-start bg-gray/10 dark:bg-dark-gray border-[1px] border-gray/50 hover:border-gray dark:border-[#232529] dark:hover:border-gray/50 transition rounded-md p-4 group"
      href={link}
      target="_blank"
    >
      <div className="flex flex-col gap-y-1">
        <Image
          className="dark:bg-white rounded-md"
          width={70}
          height={70}
          src={`/icons/${icon}.svg`}
          alt=""
        />
        <p className="dark:text-white/75 mt-3">{title}</p>
        {username && (
          <p className="text-xs dark:text-gray">{username}</p>
        )}
      </div>
      <div className="dark:bg-[#25272A] border-[1px] border-gray rounded-2xl py-1 px-2">
        <MoveRight className="text-gray w-4 h-4 group-hover:translate-x-0.5 transition" />
      </div>
    </Link>
  );
};
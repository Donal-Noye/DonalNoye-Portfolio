import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-[#DEBDFF] text-black text-center h-[42px]">
      <Link href="/contacts" className="h-full flex items-center justify-center gap-x-1.5">
        <p className="font-medium uppercase">
          Let&apos;s bring your website to life - contact me
        </p>
        <ArrowUpRight className="text-black" />
      </Link>
    </div>
  );
};

export default Banner;

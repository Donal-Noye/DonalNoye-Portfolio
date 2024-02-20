"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectItemProps {
  data: {
    title: string
    image: string
    text: string
    link: string
    color: string
  }
}

export const ProjectItem = ({data}: ProjectItemProps) => {
  return (
    <Link className="flex gap-x-3 group even:flex-row-reverse" href={data.link} target="_blank">
      <div className="basis-2/5 relative h-48 w-full overflow-hidden rounded-md overflow-hidden">
        <Image className="object-cover group-hover:scale-110 transition duration-500" fill src={data.image} alt="" />
      </div>
      <div className={`basis-3/5 rounded-md p-3 text-white ${data.color}`}>
        <div className="flex items-start justify-between">
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <ArrowUpRight className="text-white" />
        </div>
        <p className="text-xs leading-tight text-white/90 mt-4">
          {data.text}
        </p>
      </div>
    </Link>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const stackItems = [
  {
    img: "next",
    title: "Next.js",
    text: "React framework that enables several extra features, including server-side rendering and generating static websites",
  },
  {
    img: "typescript",
    title: "Typescript",
    text: "Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  },
  {
    img: "figma",
    title: "Figma",
    text: "Popular tool for designers, product managers, writers and developers.",
  },
  {
    img: "prisma",
    title: "Prisma",
    text: "Next generation ORM for Node.js and TypeScript.",
  }
]

export const Stack = () => {
  return (
    <div className="mt-16">
      <h5 className="title">stack</h5>
      <div className="grid grid-cols-2 gap-4">
        {stackItems.map((item, idx) => (
          <Card className="flex flex-col items-start hover:shadow-xl dark:hover:shadow-white dark:hover:shadow-sm transition duration-300" key={idx}>
            <CardHeader className="mb-7 pb-2">
              <div className="flex dark:bg-white rounded-xl p-2.5 bg-opacity-50 w-[70px] h-[70px]">
                <Image width={50} height={50} src={`/icons/${item.img}.svg`} alt="Logo" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-normal mb-2">{item.title}</CardTitle>
              <p className="text-black/50 dark:text-white/50 text-[14px] leading-5">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const lastProjects = [
  {
    title: "WriteSpace",
    image: "/write-space.png",
    link: "https://write-space.vercel.app/"
  },
  {
    title: "Taskify",
    image: "/taskify.png",
    link: "https://taskify-pied-one.vercel.app/"
  },
]

export const LatestProjects = () => {
  return (
    <div className="mt-16">
      <h5 className="title">latest projects</h5>
      <div className="grid grid-cols-2 gap-4">
        {lastProjects.map((project, idx) => (
          <Card className="text-black bg-gradient-to-r from-green to-light-green shadow-transparent hover:opacity-80 transition duration-300 overflow-hidden" key={idx}>
            <a href={project.link} target="_blank">
              <CardHeader className="mb-2 p-0">
                <Image width={400} height={150} src={project.image} alt="Image" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg tracking-tighter mb-1">{project.title}</CardTitle>
                  <ArrowUpRight className="text-black" />
                </div>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
    </div>
  )
}
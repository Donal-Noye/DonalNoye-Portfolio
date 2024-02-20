import { ProjectItem } from "@/app/projects/_components/project-item";

const projects = [
  {
    title: "WriteSpace",
    image: "/write-space.png",
    text: "The latest industry news, interviews, technologies, and resources.",
    link: "https://write-space.vercel.app/",
    color: "bg-[#7f56d9]"
  },
  {
    title: "Taskify",
    image: "/taskify.png",
    text: "It is a online tool for project management, task planning and workflow organization. Here, users can create boards, lists, and cards to manage various aspects of their work, projects, or personal matters.",
    link: "https://taskify-pied-one.vercel.app/",
    color: "bg-gradient-to-r from-fuchsia-600 to-pink-600"
  },
  {
    title: "Jotion",
    image: "/notion-clone.png",
    text: "Is an online tool designed for note-taking, task organization, project management, and database and documentation creation. This site offers user access to a variety of tools to help you easily and effectively organize information and collaborate with your team.",
    link: "https://note-taking-app-taupe.vercel.app/",
    color: "bg-gradient-to-r from-[#1F1F1F] to-black"
  },
]

const ProjectsPage = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">My Projects</h1>
      <div className="flex flex-col gap-y-4 mt-8">
        {projects.map(project => (
          <ProjectItem
            key={project.title}
            data={project}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;

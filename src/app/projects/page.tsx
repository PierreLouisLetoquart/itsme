import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export default function ProjectsList() {
  return (
    <>
      <p className="mb-8 mt-8 text-sm font-normal leading-7 sm:mt-10 md:mb-10 md:mt-14 md:text-lg">
        🛠️ I&apos;m passionate about open source and I love to work on projects
        or reimplemente papers. Here are some of my projects:
      </p>
      <div className="flex w-full flex-col pb-12 md:pb-20">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </>
  );
}

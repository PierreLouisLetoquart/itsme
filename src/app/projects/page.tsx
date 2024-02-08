import { Paragraph } from "@/components/paragraph";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/utils/projects";

export default function ProjectsList() {
  return (
    <>
      <Paragraph className="mb-8 mt-8 sm:mt-10 md:mb-10 md:mt-14">
        🛠️ I&apos;m passionate about open source and I love to work on projects
        or reimplemente papers. Here are some of my projects:
      </Paragraph>
      <div className="mb-8 flex w-full flex-col md:mb-12">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </>
  );
}

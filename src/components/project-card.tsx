import Link from "next/link";

import type { Project } from "@/utils/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex w-full flex-col gap-3 border-b border-zinc-600 py-6 dark:border-zinc-400">
      <Link href={project.link}>
        <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight md:text-xl">
          {project.title}
          {project.linkIcon}
        </h3>
      </Link>
      <p className="text-xs font-light md:text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, id) => (
          <ProjectCardBadge key={id} tag={tag} />
        ))}
      </div>
    </div>
  );
}

export function ProjectCardBadge({ tag }: { tag: string }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-transparent px-3 py-1 text-xs dark:border-zinc-700">
      {tag}
    </span>
  );
}

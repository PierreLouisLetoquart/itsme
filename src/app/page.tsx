import Link from "next/link";

import { projects } from "@/utils/projects";
import { ProjectCard } from "@/components/project-card";
import { Paragraph } from "@/components/paragraph";
import { Heading2 } from "@/components/heading";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl py-12 md:py-20">
      <h1 className="mb-6 text-3xl font-bold tracking-tighter md:mb-10 md:text-5xl">
        PLL.
      </h1>
      <Paragraph className="mb-4 md:mb-6">
        👋 Hi there! I&apos;m Pierre-Louis, a student in computer science
        actually in Montreal, Canada. When I&apos;m not programming, I like to
        play basketball or climbing montains with my friends.
      </Paragraph>
      <Paragraph className="mb-8 md:mb-12">
        I created this portfolio to share my projects and my thoughts about the
        tech world. I hope you will find something interesting here! 🚀
      </Paragraph>
      <Heading2>My Projects</Heading2>
      <Paragraph className="mb-8 md:mb-10">
        🛠️ I&apos;m passionate about open source and I love to work on projects
        or reimplemente papers. Here are some of my projects:
      </Paragraph>
      <div className="mb-8 flex w-full flex-col md:mb-12">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
      <Heading2>Find me</Heading2>
      <Paragraph>
        📫 If you want to contact me, you can reach me at{" "}
        <Link
          className="font-normal underline underline-offset-4"
          href="mailto:randlgint@proton.me"
        >
          randlgint@proton.me
        </Link>{" "}
        or on{" "}
        <Link
          className="font-normal underline underline-offset-4"
          href="https://www.linkedin.com/in/pierre-louis-letoquart/"
        >
          LinkedIn
        </Link>
        . And if you want to see more on my code, you can find me on{" "}
        <Link
          className="font-normal underline underline-offset-4"
          href="https://github.com/PierreLouisLetoquart"
        >
          GitHub
        </Link>
        !
      </Paragraph>
    </main>
  );
}

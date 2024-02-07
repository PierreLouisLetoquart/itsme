import Link from "next/link";
// import svgToTinyDataUri from "mini-svg-data-uri";

import { ExternalLinkIcon } from "@/utils/icon";
import { projects } from "@/utils/projects";

export default function Home() {
  return (
    <main
      className="mx-auto w-full max-w-4xl py-12 md:py-20"
      // style={{
      //   backgroundImage: `url("${svgToTinyDataUri(
      //     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor"><path d="M0 .5H31.5V32"/></svg>`,
      //   )}")`,
      // }}
    >
      <h1 className="mb-6 text-3xl font-bold tracking-tighter md:mb-10 md:text-5xl">
        PLL.
      </h1>
      <p className="mb-4 text-sm font-normal md:mb-6 md:text-lg">
        👋 Hi there! I&apos;m Pierre-Louis, a student in computer science
        actually in Montreal, Canada. When I&apos;m not programming, I like to
        play basketball or climbing montains with my friends.
      </p>
      <p className="mb-8 text-sm font-normal md:mb-12 md:text-lg">
        I created this portfolio to share my projects and my thoughts about the
        tech world. I hope you will find something interesting here! 🚀
      </p>
      <h2 className="mb-6 text-xl font-bold tracking-tighter md:mb-10 md:text-3xl">
        Projects
      </h2>
      <p className="mb-8 text-sm font-normal md:mb-10 md:text-lg">
        🛠️ I&apos;m passionate about open source and I love to work on projects
        or reimplemente papers. Here are some of my projects:
      </p>
      <div className="mb-8 flex w-full flex-col md:mb-12">
        {projects.map((project, id) => (
          <div
            key={id}
            className="flex w-full flex-col gap-3 border-b border-zinc-600 py-6 dark:border-zinc-200"
          >
            <Link href={project.link}>
              <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight md:text-xl">
                {project.title}
                {project.linkIcon || (
                  <ExternalLinkIcon className="h-4 w-4 md:h-5 md:w-5" />
                )}
              </h3>
            </Link>
            <p className="text-xs font-light md:text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, id) => (
                <span
                  key={id}
                  className="rounded-full border border-zinc-200 bg-transparent px-3 py-1 text-xs dark:border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h2 className="mb-6 text-xl font-bold tracking-tighter md:mb-10 md:text-3xl">
        Contact
      </h2>
      <p className="mb-8 text-sm font-light md:mb-12 md:text-lg">
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
        . And if you want to see my code, you can find me on{" "}
        <Link
          className="font-normal underline underline-offset-4"
          href="https://github.com/PierreLouisLetoquart"
        >
          GitHub
        </Link>
        !
      </p>
    </main>
  );
}

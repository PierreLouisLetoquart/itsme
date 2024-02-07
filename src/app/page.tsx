import Link from "next/link";
import { Paragraph } from "@/components/paragraph";

export default function Home() {
  return (
    <>
      <Paragraph className="mb-6 md:mb-8">
        👋 Hi there! I&apos;m Pierre-Louis, a student in computer science
        actually in Montreal, Canada. When I&apos;m not programming, I like to
        play basketball or climbing montains with my friends.
      </Paragraph>

      <Paragraph className="mb-8 md:mb-10">
        I created this portfolio to share my projects and my thoughts about the
        tech world. I hope you will find something interesting here! 🚀
      </Paragraph>

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
        </Link>{" "}
        or checkout my{" "}
        <Link
          href={"/projects"}
          className="font-normal underline underline-offset-4"
        >
          Projects page
        </Link>
        !
      </Paragraph>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function MHeader() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-black py-6 dark:border-white">
      <div className="flex items-end justify-between sm:hidden">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            {pathname === "/" ? "PLL." : "Works."}
          </h1>
        </Link>
        {pathname === "/" ? (
          <Link
            className="text-sm font-normal hover:opacity-80"
            href="/projects"
          >
            My works &rarr;
          </Link>
        ) : (
          <Link className="text-sm font-normal hover:opacity-80" href="/">
            About me &rarr;
          </Link>
        )}
      </div>

      <div className="hidden items-end justify-between sm:max-lg:flex">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            {pathname === "/" ? "PLL." : "Works."}
          </h1>
        </Link>
        <nav className="flex items-center gap-6 md:gap-10">
          <Link
            className={`text-base font-normal ${
              pathname === "/" ? "" : "opacity-65"
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`text-base font-normal ${
              pathname === "/projects" ? "" : "opacity-65"
            }`}
            href="/projects"
          >
            Projects
          </Link>
        </nav>
      </div>

      <div className="hidden flex-col items-start lg:flex">
        <Link href="/">
          <h1 className="text-5xl font-bold">
            {pathname === "/" ? "PLL." : "Works."}
          </h1>
        </Link>

        <nav className="flex w-full items-center justify-end gap-10">
          <Link
            className={`text-base font-normal ${
              pathname === "/" ? "" : "opacity-65"
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`text-base font-normal ${
              pathname === "/projects" ? "" : "opacity-65"
            }`}
            href="/projects"
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}

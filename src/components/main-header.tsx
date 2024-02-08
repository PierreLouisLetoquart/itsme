"use client";

import { useRef, useEffect } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export function MHeader() {
  const pathname = usePathname();
  const heading = useRef(null);

  useEffect(() => {
    gsap.set(heading.current, { y: 100, opacity: 0.5 });

    gsap.to(heading.current, {
      duration: 1.1,
      y: 0,
      opacity: 1,
      ease: "expo.out",
    });
  });

  return (
    <header className="w-full border-b border-black py-6 md:pt-10 lg:pt-12 dark:border-white">
      <div className="flex items-end justify-between sm:hidden">
        <div className="overflow-hidden">
          <h1 ref={heading} className="text-2xl font-semibold">
            {pathname === "/" ? "PLL." : "Works."}
          </h1>
        </div>
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
        <div className="overflow-hidden">
          <h1 ref={heading} className="text-4xl font-semibold">
            {pathname === "/" ? "PLL." : "Works."}
          </h1>
        </div>
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
        <div className="overflow-hidden">
          <h1 ref={heading} className="text-5xl font-bold">
            {pathname === "/" ? "PLL." : "Works."}
          </h1>
        </div>

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

"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

import { cn } from "@/utils/cn";

interface MHeaderProps extends React.HTMLAttributes<HTMLElement> {
  isMobile: boolean;
}

export function MHeader({ isMobile, className, ...props }: MHeaderProps) {
  const pathname = usePathname();
  const heading = useRef(null);

  useEffect(() => {
    if (isMobile) return;

    gsap.set(heading.current, { y: 100, opacity: 0.5 });

    gsap.to(heading.current, {
      duration: 1.1,
      y: 0,
      opacity: 1,
      ease: "expo.out",
    });
  });

  return (
    <header
      className={cn(
        "w-full border-b border-black py-6 md:pt-10 lg:pt-12 dark:border-white",
        className,
      )}
      {...props}
    >
      <div className="flex items-end justify-between sm:hidden">
        <div className="overflow-hidden">
          <h1
            ref={heading}
            className={`text-2xl font-semibold tracking-tight ${
              isMobile ? "opacity-100" : "opacity-0"
            }`}
          >
            {pathname === "/" ? "PLL." : "Works."}
          </h1>
        </div>
        {pathname === "/" ? (
          <Link href="/projects" className="text-sm font-normal">
            My works &rarr;
          </Link>
        ) : (
          <Link href="/" className="text-sm font-normal">
            About me &rarr;
          </Link>
        )}
      </div>

      <div className="hidden items-end justify-between sm:max-lg:flex">
        <div className="overflow-hidden">
          <h1
            ref={heading}
            className={`text-4xl font-semibold tracking-tight ${
              isMobile ? "opacity-100" : "opacity-0"
            }`}
          >
            {pathname === "/" ? "PLL." : "Works."}
          </h1>
        </div>
        <nav className="flex items-center gap-6 md:gap-10">
          <Link href="/" className={"text-base"}>
            Home
          </Link>
          <Link href="/projects" className={"text-base"}>
            Projects
          </Link>
        </nav>
      </div>

      <div className="hidden flex-col items-start lg:flex">
        <div className="overflow-hidden">
          <h1
            ref={heading}
            className={`text-5xl font-bold tracking-tight ${
              isMobile ? "opacity-100" : "opacity-0"
            }`}
          >
            {pathname === "/" ? "PLL." : "Works."}
          </h1>
        </div>

        <nav className="flex w-full items-center justify-end gap-10">
          <Link href="/" className={"text-base font-normal"}>
            Home
          </Link>
          <Link href="/projects" className={"text-base font-normal"}>
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}

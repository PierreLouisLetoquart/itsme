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
  const headingLg = useRef(null);
  const headingSm = useRef(null);

  useEffect(() => {
    // if (isMobile) return;

    gsap.set(headingLg.current, { y: 100, opacity: 0.5 });

    gsap.to(headingLg.current, {
      duration: 1.1,
      y: 0,
      opacity: 1,
      ease: "expo.out",
    });
  });

  useEffect(() => {
    // if (isMobile) return;

    gsap.set(headingSm.current, { x: -100, opacity: 0.5 });

    gsap.to(headingSm.current, {
      duration: 1.1,
      x: 0,
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
            ref={headingSm}
            className={`text-2xl font-semibold tracking-tight ${
              // isMobile ? "opacity-100" : "opacity-0"
              null
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

      <div className="hidden items-end justify-between sm:flex lg:flex-col lg:items-start">
        <div className="overflow-hidden">
          <h1
            ref={headingLg}
            className={`text-4xl font-semibold tracking-tight lg:text-5xl ${
              // isMobile ? "opacity-100" : "opacity-0"
              null
            }`}
          >
            {pathname === "/" ? "PLL." : "Works."}
          </h1>
        </div>
        <nav className="flex items-center gap-6 md:gap-10 lg:w-full lg:justify-end">
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex h-36 w-full items-center">
      <div className="flex w-full items-end justify-between">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold tracking-tighter  md:text-5xl">
            PLL.
          </h1>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href={"/"}
            className={pathname === "/" ? "underline underline-offset-4" : ""}
          >
            Home
          </Link>
          <Link
            href={"/projects"}
            className={
              pathname === "/projects" ? "underline underline-offset-4" : ""
            }
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

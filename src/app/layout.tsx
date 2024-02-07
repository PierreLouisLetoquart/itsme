import { IBM_Plex_Mono } from "next/font/google";

import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { Navbar } from "@/components/navbar";

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-white px-3 text-zinc-900 antialiased transition-colors selection:bg-zinc-800 selection:text-zinc-50 sm:px-6 dark:bg-black dark:text-zinc-200 dark:selection:bg-zinc-100 dark:selection:text-white",
          ibm_plex_mono.className,
        )}
      >
        <div className="bg-grid-zinc-200/[0.3] dark:bg-grid-zinc-800/[0.3] min-h-screen">
          <div className="mx-auto w-full max-w-4xl">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

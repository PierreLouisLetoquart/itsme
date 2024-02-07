import { IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";

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
          "min-h-screen bg-white px-3 antialiased transition-colors selection:bg-zinc-800 selection:text-zinc-50 sm:px-6 dark:bg-black dark:selection:bg-zinc-100 dark:selection:text-white",
          ibm_plex_mono.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}

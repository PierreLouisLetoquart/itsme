import { IBM_Plex_Mono } from "next/font/google";
import { headers } from "next/headers";
import "@/styles/globals.css";

import { cn } from "@/utils/cn";
import { MHeader } from "@/components/main-header";
import { StickyCursor } from "@/components/sticky-cursor";

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;
export default function RootLayout({ children }: RootLayoutProps) {
  const headersList = headers();
  const userAgent = headersList.get("user-agent");

  let isMobileView = userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
  );

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-[100svh] bg-white text-zinc-900 antialiased transition-colors selection:bg-zinc-800 selection:text-zinc-50 dark:bg-black dark:text-zinc-200 dark:selection:bg-zinc-100 dark:selection:text-zinc-800",
          ibm_plex_mono.className,
        )}
      >
        <div className="bg-grid-zinc-200/[0.3] dark:bg-grid-zinc-600/[0.3] min-h-[100svh] px-6">
          <div className="mx-auto w-full max-w-4xl">
            <MHeader />
            {children}
          </div>
        </div>
        {isMobileView ? null : <StickyCursor />}
      </body>
    </html>
  );
}

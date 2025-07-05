import Link from 'next/link';
import ButtonDemo from "./ButtonDemo";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./components/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-black/[0.96] antialiased">
      {/* subtle grid overlay */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* content container: full‑height flex‑column, centered */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center px-4">
        <h1 className="bg-clip-text text-center text-4xl font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 md:text-7xl">
          Welcome To <br /> The World Of Quotes.
        </h1>

        {/* bigger, centered button */}
        <div className="mt-10">
          <Link href="/quotes">
            <ButtonDemo />
          </Link>
        </div>
      </div>
    </div>
  );
}

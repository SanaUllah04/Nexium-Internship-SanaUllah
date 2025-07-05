'use client';

import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:flex-row">
      <Button
        className="
          px-8 py-6 text-xl md:text-2xl
          text-white
          transition-all duration-200
          hover:ring-4 hover:ring-offset-2 hover:ring-[rgba(203,186,147,0.98)]
        "
      >
        Start the Journey!
      </Button>
    </div>
  );
}

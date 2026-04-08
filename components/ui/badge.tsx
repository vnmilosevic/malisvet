import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[color:var(--sand-300)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--forest-700)]",
        className,
      )}
      {...props}
    />
  );
}

"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-all",
        "bg-white text-black dark:bg-black dark:text-white",
        "border border-black/10 dark:border-white/10",
        "hover:bg-gray-100 dark:hover:bg-gray-900",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

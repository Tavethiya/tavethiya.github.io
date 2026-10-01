"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Light/dark switch. Both icons render and CSS picks the visible one,
 * so there is no hydration mismatch and no mounted-state effect.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-line bg-elevated/70 text-fg backdrop-blur transition hover:border-accent hover:text-accent"
    >
      <Sun
        size={18}
        className="absolute rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size={18}
        className="absolute rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}

"use client";

import { useEffect, useState } from "react";

/** A soft radial glow that follows the cursor. Purely decorative. */
export function Spotlight() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, var(--glow), transparent 60%)`,
        opacity: 0.5,
      }}
    />
  );
}

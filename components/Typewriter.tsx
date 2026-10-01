"use client";

import { useEffect, useState } from "react";

type Props = { words: string[]; className?: string };

/** Cycles through words with a typing and deleting effect. */
export function Typewriter({ words, className }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length] ?? "";
    const done = !deleting && text === word;
    const cleared = deleting && text === "";

    const delay = done ? 1600 : cleared ? 300 : deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (done) return setDeleting(true);
      if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-accent" />
    </span>
  );
}

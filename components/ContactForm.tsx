"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/lib/site";

/**
 * GitHub Pages has no backend, so this composes a mailto: link with the message.
 * Swap the submit handler for Formspree or similar if you want inbox delivery without the mail client.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${name || "your website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-line bg-elevated/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Name</span>
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Email</span>
          <input
            className={field}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium">What are you building?</span>
        <textarea
          className={`${field} min-h-[140px] resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A few lines about the project, timeline and budget range."
          required
        />
      </label>
      <button
        type="submit"
        className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
      >
        Send message
        <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
      </button>
      <p className="text-xs text-muted">Opens your email client with the message pre-filled.</p>
    </form>
  );
}

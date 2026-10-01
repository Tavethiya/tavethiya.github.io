import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-32 text-center sm:px-6">
      <p className="font-display text-7xl font-bold text-gradient">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold">That page doesn&apos;t exist</h1>
      <p className="mt-2 text-muted">The link may be old or mistyped.</p>
      <Link href="/" className="mt-8 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg">
        Back home
      </Link>
    </section>
  );
}

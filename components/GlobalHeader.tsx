import Link from "next/link";

export default function GlobalHeader() {
  return (
    <header className="bg-dark text-light mx-auto max-w-screen-2xl">
      <div className="mx-auto flex flex-wrap gap-4 justify-between items-center px-5 py-5 md:py-8">
        <Link className="flex space-x-2" href="/">
          <span className="font-bold font-title text-3xl self-end">SkinTreasure</span>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 items-center md:text-xl">
          <Link href="/pdp/bundle">Glow Serum</Link>
          <Link href="/pdp/face-cream">Vitamin C</Link>
          <Link href="/pdp/face-serum">Salicylic Acid</Link>
          <Link href="/pdp/eye-contour">Hyaluronic Acid</Link>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold text-white mb-4">404</h1>
      <p className="text-[#737373] mb-8">
        This page doesn&apos;t exist. Maybe it never did.
      </p>
      <Link href="/" className="text-sm text-[#525252] hover:text-white transition-colors">
        ← back home
      </Link>
    </div>
  );
}

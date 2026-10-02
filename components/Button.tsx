import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "quiet"; className?: string };
export function Button({ href, children, variant="primary", className="" }: Props) {
  const base = "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[.97]";
  const styles = variant === "primary" ? "bg-terracotta text-white hover:bg-maroon" : variant === "secondary" ? "border border-maroon/25 bg-white/70 text-maroon hover:border-maroon/45 hover:bg-white" : "text-maroon hover:text-terracotta";
  return <Link href={href} className={`${base} ${styles} ${className}`}>{children}<ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>;
}

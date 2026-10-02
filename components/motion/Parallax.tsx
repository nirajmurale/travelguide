"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
export function Parallax({ children, className="" }: { children: React.ReactNode; className?: string }) { const ref = useRef<HTMLDivElement>(null); const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] }); const y = useTransform(scrollYProgress, [0,1], [12,-12]); return <motion.div ref={ref} className={className} style={{ y }}>{children}</motion.div>; }
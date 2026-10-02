"use client";
import { motion } from "motion/react";
export function Stagger({ children, className="" }: { children: React.ReactNode; className?: string }) { return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={{ hidden: {}, show: { transition: { staggerChildren: .08 } } }}>{children}</motion.div>; }
export function StaggerItem({ children, className="" }: { children: React.ReactNode; className?: string }) { return <motion.div className={className} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: .5, ease: [.22,1,.36,1] } } }}>{children}</motion.div>; }

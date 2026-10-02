"use client";
import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
export function CountUp({ value, suffix="" }: { value: number; suffix?: string }) { const ref = useRef<HTMLSpanElement>(null); const inView = useInView(ref, { once: true, amount: .7 }); const [count,setCount]=useState(0); useEffect(()=>{ if(!inView) return; const start=performance.now(); const duration=900; let frame=0; const tick=(now:number)=>{ const p=Math.min((now-start)/duration,1); setCount(Math.round(value*(1-Math.pow(1-p,3)))); if(p<1) frame=requestAnimationFrame(tick); }; frame=requestAnimationFrame(tick); return()=>cancelAnimationFrame(frame); },[inView,value]); return <motion.span ref={ref}>{count}{suffix}</motion.span>; }
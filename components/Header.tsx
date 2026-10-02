"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { phoneHref, whatsappHref } from "@/lib/content";

export function Header() {
  const [scrolled,setScrolled]=useState(false); const [open,setOpen]=useState(false);
  useEffect(()=>{ const on=()=>setScrolled(window.scrollY>24); on(); window.addEventListener("scroll",on,{passive:true}); return()=>window.removeEventListener("scroll",on); },[]);
  const nav=[['Explore','/explore'],['Add a spot','/add'],['About','/about'],['Contact','/contact']];
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled?'border-b border-maroon/10 bg-sand/90 shadow-sm backdrop-blur-md':'bg-transparent'}`}>
    <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
      <Link href="/" aria-label="travelguide home" className="shrink-0"><Image src="/logo.svg" alt="travelguide" width={155} height={36} priority /></Link>
      <nav className="hidden items-center gap-7 md:flex">{nav.map(([label,href])=><Link key={href} href={href} className="underline-link text-sm font-semibold text-maroon/85">{label}</Link>)}<a href={phoneHref} className="rounded-full border border-maroon/20 px-4 py-2 text-sm font-semibold text-maroon">Call us</a></nav>
      <button className="grid min-h-11 min-w-11 place-items-center rounded-full border border-maroon/15 text-maroon md:hidden" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X size={21}/>:<Menu size={21}/>}</button>
    </div>
    <AnimatePresence>{open && <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="border-t border-maroon/10 bg-sand px-5 py-4 md:hidden"><nav className="mx-auto flex max-w-7xl flex-col">{nav.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="border-b border-maroon/10 py-4 text-base font-semibold text-maroon">{label}</Link>)}<a href={whatsappHref} className="mt-4 rounded-full bg-terracotta px-5 py-3 text-center font-semibold text-white">WhatsApp</a></nav></motion.div>}</AnimatePresence>
  </header>;
}
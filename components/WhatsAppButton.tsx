"use client";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { whatsappHref } from "@/lib/content";
export function WhatsAppButton(){ return <motion.a href={whatsappHref} aria-label="Chat with travelguide on WhatsApp" initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{delay:1,duration:.45}} className="fixed bottom-5 right-5 z-40 grid min-h-14 min-w-14 place-items-center rounded-full bg-terracotta text-white shadow-xl shadow-maroon/20 ring-4 ring-transparent hover:-translate-y-1 hover:bg-maroon sm:bottom-6 sm:right-6"><span className="absolute inset-0 -z-10 animate-ping rounded-full bg-turmeric/30 [animation-duration:2.8s]"/><MessageCircle size={24}/></motion.a>; }
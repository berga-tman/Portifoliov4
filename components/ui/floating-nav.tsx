"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "@/data";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

type FloatingNavProps = {
  navItems: typeof navItems;
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { language, setLanguage } = useLanguage();
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
       if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY) {
          setVisible(false); // Scrolling down
        } else {
          setVisible(true); // Scrolling up
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0  top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-3xl border border-white/[0.2] bg-black-100 px-3 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
            )}
          >
            <span className="!cursor-pointer text-sm">{navItem.name[language]}</span>
          </Link>
        ))}

        {/* Language Switcher */}
        <div className="flex gap-3 text-xs font-bold ml-4 border-l border-white/20 pl-4 items-center h-full">
          <button 
            onClick={() => setLanguage('pt')} 
            className={cn("transition-colors duration-200", language === 'pt' ? "text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" : "text-white/40 hover:text-white")}
          >
            PT
          </button>
          <span className="text-white/20">|</span>
          <button 
            onClick={() => setLanguage('en')} 
            className={cn("transition-colors duration-200", language === 'en' ? "text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" : "text-white/40 hover:text-white")}
          >
            EN
          </button>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

"use client";
import React, { JSX, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    id: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0, // Always visible
      }}
      transition={{
        duration: 0.3,
      }}
      className={cn(
        "backdrop-blur-lg flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/30 rounded-full dark:bg-black/30 bg-white/30 shadow-lg z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <button
          key={idx}
          onClick={() => handleScroll(navItem.id)} // 👈 Attach smooth scroll
          className="relative dark:text-neutral-50 items-center flex space-x-1 text-black dark:hover:text-black hover:text-neutral-500"
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </button>
      ))}
      <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/30 text-black dark:text-white px-4 py-2 rounded-full">
        <span>Login</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </button>
    </motion.div>
  );
};

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      id: "Home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      id: "Projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Photos",
      id: "Photos",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },{
      name: "End",
      id: "End",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

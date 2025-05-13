"use client";

import { motion } from "motion/react";
import { Login } from "../pages/Authentication/Login";
import Logo from "@/components/logo";

export const Nav = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      className="px-2 sm:px-6 xl:px-10 w-full h-20 shadow-sm"
    >
      <div className="w-full h-full flex justify-between items-center">
        <Logo />
        <div className="w-full flex justify-end items-center gap-1 lg:gap-3 font-bold font-poppins">
         <Login />
        </div>
      </div>
    </motion.nav>
  );
};

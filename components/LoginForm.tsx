import React from "react";
import { motion } from "motion/react";

const LoginForm = () => {
  return (
    <div className="w-full h-full space-y-2 flex flex-col items-center justify-center">
      <form className="w-full" action="">
        <div className="space-y-2">
          <input
            className="border border-black rounded-md w-full py-1 px-2 outline-green-500 focus:outline-2 focus:border-0"
            type="email"
            name=""
            id=""
            placeholder="Ex.: Exemple@exemple.com"
          />
          <input
            className="border border-black rounded-md w-full py-1 px-2 outline-green-500 focus:outline-2 focus:border-0"
            type="password"
            name=""
            id=""
            placeholder="password"
          />
          <div className="flex flex-col gap-1">
          <span>your password must contain:</span>
          <ul className="list-disc text-xs ml-5">
            <li>8-24 characters</li>
            <li>Syblos ex.: $#@&*...</li>
            <li>UpperCase and LowerCase </li>
          </ul>

          </div>
        </div>
      </form>
      <motion.button 
      whileHover={{scale: 0.95}}
      transition={{
        duration: 0.2,
        ease:"easeInOut"
      }}
      className=" hover:brightness-105 hover:cursor-pointer text-white font-bold  border rounded-md bg-green-500 py-2 w-[50%] mt-2 ">
        Create
      </motion.button>
    </div>
  );
};

export default LoginForm;

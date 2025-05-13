import { motion } from "motion/react";
import React from "react";
import WavingText from "./WavingText";
import Image from "next/image";

const logo = () => {
  return (
      <div className="flex items-center font-bold font-roboto-mono container">
        <Image
          className="w-[24px] h-[24px]"
          src={"/assets/logo.svg"}
          alt=""
          width={32}
          height={32}
          priority
          quality={75}
        />
        <div className="mt-6 flex">
          <WavingText
            text="SpeakSync_"
            delay={0.1}
            duration={0.2}
            className="text-green-500 text-md sm:text-xl lg:text-2xl"
          />
          <motion.span
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.6,
                duration: 1,
                ease: "easeInOut",
              },
            }}
            className="text-violet-500 text-md sm:text-xl lg:text-2xl"
          >
            AI
          </motion.span>
        </div>
      </div>
  );
};

export default logo;

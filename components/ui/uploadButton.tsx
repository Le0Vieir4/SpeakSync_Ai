import { useTranscription } from "@/context/transcriptionContext";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";

interface UploadButtonProps {
  onClick?: () => void;
}

export const UploadButton: React.FC<UploadButtonProps> = ({ onClick }) => {
  const { transcription } = useTranscription();
  return (
    <motion.div
      animate={{ opacity: [0, 1], scale: [0.8, 1] }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
      className="w-full sm:w-[50%]"
    >
      {transcription ? (
        <motion.button
          variants={{
            initial: { scale: 1 },
            hover: { scale: 0.95 },
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          initial="initial"
          whileHover="hover"
          animate="initial"
          className="relative overflow-hidden w-full flex gap-1 justify-center items-center cursor-pointer border hover:text-white rounded-md px-8 py-3 shadow-md drop-shadow-xl font-bold transition-colors duration-600"
          onClick={onClick}
        >
          {/* Fundo animado */}
          <motion.div
            variants={{
              initial: { width: "0%" },
              hover: { width: "100%" },
            }}
            transition={{delay: 0.1 ,duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500/65 to-green-600/85  z-0"
          />

          {/* Texto acima do fundo */}
          <span className="relative z-10 text-sm md:text-lg font-poppins-mono font-bold">
            Try again
          </span>
        </motion.button>
      ) : (
        <motion.button
          initial="initial"
          whileHover="hover"
          animate="initial"
          className=" overflow-hidden group relative w-full flex gap-1 justify-center items-center cursor-pointer bg-gradient-to-br from-white to-gray-100 border rounded-md px-8 py-3 shadow-md drop-shadow-xl font-bold transition duration-1000"
          onClick={onClick}
        >
          <motion.div
            variants={{
              initial: { width: "0%" },
              hover: { width: "100%" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500/65 to-violet-600/85 z-0"
          />

          <Image
            className="absolute group-hover:animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"
            src="/assets/cloud.png"
            alt=""
            width={32}
            height={20}
          />
          <span className="relative uppercase z-10 group-hover:opacity-0 transition-opacity text-md font-poppins-mono font-bold">
            Upload
          </span>
        </motion.button>
      )}
    </motion.div>
  );
};

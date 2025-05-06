import { Eye } from "lucide-react";
import { motion } from "motion/react";

export const ViewButton = () => {
  return (
    <motion.div 
    animate={{ opacity: [0, 1], scale: [0.8, 1] }}
    transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
    className="w-full">
      <motion.div
        variants={{
          initial: { scale: 1 },
          hover: { scale: 0.95 },
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        initial="initial"
        whileHover="hover"
        animate="initial"
        className="overflow-hidden group relative w-full flex gap-1 justify-center items-center cursor-pointer bg-gradient-to-br hover:text-white from-white to-gray-100 border rounded-md px-8 py-3 shadow-md drop-shadow-xl font-bold transition-opacity duration-1000"
      >
        <motion.div
          variants={{
            initial: { width: "0%" },
            hover: { width: "100%" },
          }}
          transition={{delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          className="absolute top-0 right-0 h-full bg-gradient-to-r from-violet-500/65 to-violet-600/85 z-0"
        />

        <Eye
          className="absolute group-hover:animate-pulse opacity-0  group-hover:opacity-100 transition-opacity"
          width={32}
          height={32}
        />
      <span className="relative font-poppins-mono z-10 group-hover:opacity-0 transition-opacity text-sm md:text-lg font-bold">
            View
          </span>
      </motion.div>
    </motion.div>
  );
};

import { motion } from "motion/react";

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {

  return (
    <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      {/* Main green progress */}
      <motion.div
        className="h-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(to right, #FF2DF1, #A5158C)",
          boxShadow: "0 0 10px #F8E7F6, 0 0 20px #DD88CF", // 🌟 Glow around
        }}
      />

      {/* Moving Shine */}
      {progress > 5 && (
        <motion.div
          className="absolute top-0 left-0 h-full w-1/3 bg-white opacity-20 rounded-full blur-md"
          animate={{
            x: ["-20%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
};

import { motion } from "motion/react";

export default function WavingText({
  text,
  delay,
  duration,
  className,
  shouldAnimate = true,
}: {
  text: string;
  className?: string;
  delay: number;
  duration: number
  shouldAnimate?: boolean;
}) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{opacity: 0, y: "-100%" }}
          animate={shouldAnimate ? {opacity: 1 , y: "0%" } : { y: 0 }}
          transition={{
            duration: duration,
            delay: index * delay,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {char == " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

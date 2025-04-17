import { motion } from 'motion/react'
import React from 'react'

export const WavingText = ({text = "", delay = 0.1, className = ""}) => {
  const letters = text.split("")
  
  return (
    <div className={`inline-block overflow-hidden ${className}`}>
      {letters.map((letter, index) => (
        <motion.span 
          key={index}
          initial={{y: "-100%", opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{
            delay: index * delay,
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          style={{display: "inline-block"}}
        >
          {letter === "" ? "\u00A0" : letter}
        </motion.span>

      ))}

    </div>
  )
}

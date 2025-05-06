'use client';
import { motion, useMotionValue, useMotionTemplate, useTransform, animate } from 'motion/react';
import { useEffect, useState } from 'react';

export default function RealisticAnimatedEye() {
  const bottomLashSettings = {
    count: 6,
    baseLength: 12,
    lengthVariation: 2,
    curve: 6
  };

  const createBottomLashes = () => {
    const { count, baseLength, lengthVariation } = bottomLashSettings;
    const lashes = [];
    const x0 = 90, y0 = 50;
    const cx = 50, cy = 90;
    const x1 = 10, y1 = 50;

    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      const u = 1 - t;
      const x = u * u * x0 + 2 * u * t * cx + t * t * x1;
      const y = u * u * y0 + 2 * u * t * cy + t * t * y1;
      const length = baseLength + (Math.random() - 0.5) * lengthVariation;
      lashes.push({ x, y, length });
    }
    return lashes;
  };

  const bottomLashes = createBottomLashes();

  const eyelidControlY = useMotionValue(10);
  const eyelidProgress = useMotionValue(0);

  const bottomLashOpacity = useTransform(eyelidProgress, [0.4, 0.7], [0, 1]);
  const irisOpacity = useTransform(eyelidProgress, [0, 1], [1, 0]);

  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (isHover) {
      animate(eyelidControlY, 90, { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1], 
        onComplete: () => {
          animate(eyelidControlY, 85, { duration: 0.2, ease: 'easeOut' }); // small bounce up
        }
      });
      animate(eyelidProgress, 1, { duration: 0.6 });
    } else {
      animate(eyelidControlY, 10, { duration: 0.5, ease: [0.22, 1, 0.36, 1] });
      animate(eyelidProgress, 0, { duration: 0.6 });
    }
  }, [isHover, eyelidControlY, eyelidProgress]);

  const eyelidPath = useMotionTemplate`M10 50 Q50 ${eyelidControlY} 90 50`;

  const generateCurvedLash = (lash: { x: number; y: number; length: number }) => {
    const { curve } = bottomLashSettings;
    const x0 = lash.x;
    const y0 = lash.y;
    const x1 = lash.x;
    const y1 = lash.y + lash.length;

    const randomCurve = curve * (0.8 + Math.random() * 0.4); // slightly random curve per lash
    const cpx = x0 + randomCurve * (Math.random() - 0.5); // little sideways curve
    const cpy = (y0 + y1) / 2 + randomCurve; // bend downward in middle

    return `M ${x0} ${y0} Q ${cpx} ${cpy} ${x1} ${y1}`;
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="w-24 h-24 cursor-pointer stroke-black fill-none"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      {/* Top Eyelid */}
      <motion.path
        d={eyelidPath}
        strokeWidth="4"
        fill="none"
        stroke="black"
      />

      {/* Bottom Eyelid */}
      <path
        d="M90 50 Q50 90 10 50"
        strokeWidth="4"
        fill="none"
      />

      {/* Bottom Eyelashes */}
      {bottomLashes.map((lash, i) => (
        <motion.path
          key={i}
          d={generateCurvedLash(lash)}
          stroke="black"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          style={{
            opacity: bottomLashOpacity
          }}
        />
      ))}

      {/* Eye Elements */}
      <motion.circle
        cx="50" cy="50" r="12"
        fill="rgba(0, 0, 0, 0.15)"
        style={{
          opacity: irisOpacity
        }}
      />
      <motion.circle
        cx="50" cy="50" r="6"
        fill="black"
        style={{
          opacity: irisOpacity
        }}
      />
      <motion.circle
        cx="53" cy="47" r="2"
        fill="white"
        style={{
          opacity: irisOpacity
        }}
      />
    </motion.svg>
  );
}

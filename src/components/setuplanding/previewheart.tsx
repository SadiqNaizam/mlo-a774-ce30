import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PreviewHeartProps {
  className?: string;
}

const dotsContainerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const dotVariants = {
  initial: {
    y: "0%",
  },
  animate: {
    y: ["0%", "-60%", "0%"],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const PreviewHeart: React.FC<PreviewHeartProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center gap-6 text-center", className)}>
      <motion.div
        className="rotate-90"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="h-20 w-20 fill-accent text-accent stroke-none" />
      </motion.div>
      <div className="flex items-baseline justify-center text-lg font-medium text-foreground">
        <p>Spinning up preview</p>
        <motion.div
          className="flex"
          variants={dotsContainerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span variants={dotVariants} className="ml-1">.</motion.span>
          <motion.span variants={dotVariants}>.</motion.span>
          <motion.span variants={dotVariants}>.</motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default PreviewHeart;
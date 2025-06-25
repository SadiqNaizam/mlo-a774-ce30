import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PreviewHeartProps {
  className?: string;
}

const PreviewHeart: React.FC<PreviewHeartProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center gap-6 text-center", className)}>
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="h-20 w-20 fill-accent text-accent stroke-none" />
      </motion.div>
      <p className="text-lg font-medium text-foreground">
        Spinning up preview...
      </p>
    </div>
  );
};

export default PreviewHeart;
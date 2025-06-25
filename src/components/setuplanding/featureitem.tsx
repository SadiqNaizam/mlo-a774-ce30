import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureItemProps {
  icon: React.ElementType;
  text: string;
  className?: string;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    }
  },
};

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, text, className }) => {
  return (
    <motion.div
      className={cn("flex items-center gap-4", className)}
      variants={itemVariants}
    >
      <Icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
      <p className="text-sm text-muted-foreground">{text}</p>
    </motion.div>
  );
};

export default FeatureItem;
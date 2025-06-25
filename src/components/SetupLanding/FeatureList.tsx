import React from 'react';
import { Database, CodeXml, Globe } from 'lucide-react';
import FeatureItem from './FeatureItem';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const featuresData = [
  {
    icon: Database,
    text: "Connect Supabase for backend",
  },
  {
    icon: CodeXml,
    text: "Collaborate at source, via GitHub",
  },
  {
    icon: Globe,
    text: "Deploy when you're ready",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

interface FeatureListProps {
    className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({ className }) => {
  return (
    <motion.div
      className={cn("flex w-full flex-col gap-4", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {featuresData.map((feature) => (
        <FeatureItem
          key={feature.text}
          icon={feature.icon}
          text={feature.text}
        />
      ))}\
    </motion.div>
  );
};

export default FeatureList;
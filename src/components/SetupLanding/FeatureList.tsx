import React from 'react';
import { Database, CodeXml, Globe } from 'lucide-react';
import FeatureItem from './FeatureItem';
import { cn } from '@/lib/utils';

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

interface FeatureListProps {
    className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({ className }) => {
  return (
    <div className={cn("flex w-full flex-col gap-4", className)}>
      {featuresData.map((feature) => (
        <FeatureItem
          key={feature.text}
          icon={feature.icon}
          text={feature.text}
        />
      ))}
    </div>
  );
};

export default FeatureList;

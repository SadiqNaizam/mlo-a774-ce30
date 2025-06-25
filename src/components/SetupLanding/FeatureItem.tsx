import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureItemProps {
  icon: React.ElementType;
  text: string;
  className?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, text, className }) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" aria-hidden="true" />
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
};

export default FeatureItem;

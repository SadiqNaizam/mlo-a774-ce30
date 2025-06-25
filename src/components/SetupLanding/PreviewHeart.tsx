import React from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PreviewHeartProps {
  className?: string;
}

const PreviewHeart: React.FC<PreviewHeartProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center gap-6 text-center", className)}>
      <Heart className="h-20 w-20 fill-accent text-accent stroke-none" />
      <p className="text-lg font-medium text-foreground">
        Spinning up preview...
      </p>
    </div>
  );
};

export default PreviewHeart;

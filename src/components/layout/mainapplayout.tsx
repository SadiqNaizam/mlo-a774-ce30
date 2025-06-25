import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout's main section.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names to apply to the root layout container.
   */
  className?: string;
}

/**
 * A full-screen, centered layout component for the main application view.
 * It implements the overall page structure, centering content vertically and
 * horizontally within a constrained width container.
 *
 * @param {MainAppLayoutProps} props - The component props.
 * @returns {React.ReactElement} The rendered layout component.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'flex h-screen flex-col items-center justify-center bg-background p-4',
        className
      )}
    >
      <main className="flex w-full max-w-md flex-col items-center gap-6">
        {children}
      </main>
    </div>
  );
};

export default MainAppLayout;

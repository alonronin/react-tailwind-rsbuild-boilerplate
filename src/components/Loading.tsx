import { cn } from '@/utils';
import SpinningIcon from '@/assets/oval.svg?react';
import { ComponentProps } from 'react';

const Loading = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className="min-h-screen flex items-center justify-center" {...props}>
    <SpinningIcon
      className={cn('w-16 h-16 text-gray-600 animate-spin', className)}
    />
  </div>
);

export default Loading;

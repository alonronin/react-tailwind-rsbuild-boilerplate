import React from 'react';

import { cn } from '@/utils.js';
import SpinningIcon from '@/assets/oval.svg';

const Loading = ({ className, ...props }) => (
  <div className="min-h-screen flex items-center justify-center">
    <SpinningIcon
      {...props}
      className={cn('w-16 h-16 text-indigo-600', className)}
    />
  </div>
);

export default Loading;

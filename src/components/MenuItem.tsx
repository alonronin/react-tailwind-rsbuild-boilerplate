import { NavLink } from 'react-router-dom';
import { cn } from '@/utils';
import { ComponentProps } from 'react';

const MenuItem = ({
  className,
  children,
  ...props
}: ComponentProps<typeof NavLink> & { exact?: boolean }) => (
  <NavLink
    className={({ isActive }) =>
      cn(
        'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium',
        isActive && 'bg-gray-900 text-white',
        className,
      )
    }
    {...props}
  >
    {children}
  </NavLink>
);

export default MenuItem;

import { NavLink } from 'react-router-dom';
import { cn } from '@/utils.js';

const MenuItem = ({ className, children, ...props }) => (
  <NavLink
    className={cn(
      'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium',
      className
    )}
    activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md font-medium"
    {...props}
  >
    {children}
  </NavLink>
);

export default MenuItem;

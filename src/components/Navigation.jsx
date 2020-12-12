import { useState } from 'react';

import { cn } from '@/utils.js';
import LogoIcon from '@/assets/favicon.svg';
import routes from '@/routes.jsx';
import MenuItem from '@/components/MenuItem.jsx';
import HamburgerIcon from '@/assets/hero-icon-menu.svg';
import CLoseIcon from '@/assets/hero-icon-x.svg';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={(e) => setToggle((prevState) => !prevState)}
            >
              <span className="sr-only">Open main menu</span>
              <HamburgerIcon
                className={cn('h-6 w-6', toggle ? 'hidden' : 'block')}
              />
              <CLoseIcon
                className={cn('h-6 w-6', toggle ? 'block' : 'hidden')}
              />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <LogoIcon className="h-8 w-auto" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {routes.map(({ title, path, exact }) => (
                  <MenuItem to={path} exact={exact}>
                    {title}
                  </MenuItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cn('sm:hidden', !toggle && 'hidden')}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {routes.map(({ title, path, exact }) => (
            <MenuItem className="block" to={path} exact={exact}>
              {title}
            </MenuItem>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

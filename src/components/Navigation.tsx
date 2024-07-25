import { useState } from 'react';

import { cn } from '@/utils';
import LogoIcon from '@/assets/rocket.svg?react';
import routes from '@/routes';
import MenuItem from '@/components/MenuItem';
import HamburgerIcon from '@/assets/menu.svg?react';
import CLoseIcon from '@/assets/close.svg?react';

export function Navigation() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-gray-800 sticky top-0">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
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
            <div className="border-2 border-black flex-shrink-0 size-10 flex items-center justify-center rounded-full bg-gray-300">
              <LogoIcon className="size-6" />
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
}

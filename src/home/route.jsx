import { lazy } from 'react';

export const path = '/';
export const title = 'Home';
export const exact = true;
export const component = lazy(() => import('./Home.jsx'));

import { lazy } from 'react';

export const path = '/posts';
export const exact = true;
export const title = 'Posts';
export const Component = lazy(() => import('./Posts'));

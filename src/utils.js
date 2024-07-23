import { twMerge } from 'tailwind-merge';

export const cn = (...args) => twMerge([...args].filter(Boolean).join(' '));

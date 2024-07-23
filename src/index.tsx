import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './fonts.css';
import './style.css';

import { App } from './App.tsx';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

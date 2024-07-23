import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './fonts.css';
import './style.css';

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

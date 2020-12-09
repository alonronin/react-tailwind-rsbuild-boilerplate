import React from 'react';
import { render } from 'react-dom';

import './fonts.css';
import './style.css';
import App from './App.jsx';

const root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);

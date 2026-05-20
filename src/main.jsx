import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './react/App.jsx';

import './styles/global.css';
import './styles/tokens.css';
import './styles/ios-polish.css';
import './styles/transitions.css';
import './styles/safe-area.css';
import './styles/reduced-motion.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

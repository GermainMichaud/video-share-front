import './index.css';

import { Router } from '@tanstack/react-location';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { location, routes } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router
      location={location}
      routes={routes}
      defaultPendingElement={<div>Loading...</div>}
    >
      <App />
    </Router>
  </React.StrictMode>,
);

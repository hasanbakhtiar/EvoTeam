import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routers/AppRouter';
import './style/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


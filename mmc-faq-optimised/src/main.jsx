import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

//Initialization
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.wp-react-app-container');

  containers.forEach(container => {
    const props = Object.fromEntries(
      [...container.attributes]
        .filter(attr => attr.name.startsWith('data-'))
        .map(attr => [
          attr.name.replace('data-', '').replace(/-([a-z])/g, (_, c) => c.toUpperCase()),
          attr.value
        ])
    );

    // Create root and render
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App containerId={container.id} {...props} />
      </React.StrictMode>
    );
  });
});
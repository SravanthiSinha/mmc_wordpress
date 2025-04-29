import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Self-invoking function to avoid global scope pollution
(function() {
  // Configuration
  const CONFIG = {
    containerClass: 'wp-react-app-container',
    loadingClass: 'react-loading-placeholder',
    initDelay: 0 // Reduced delay for faster initialization
  };
  
  // Initialize React in a container
  function renderApp(container) {
    try {
      // Explicitly clear the container first
      const loadingElements = container.querySelectorAll(`.${CONFIG.loadingClass}`);
      loadingElements.forEach(el => container.removeChild(el));
      
      // Create props from data attributes
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
      
      return true;
    } catch (error) {
      // Render error message as fallback
      container.innerHTML = `
        <div class="react-error-container">
          <h3>Application Error</h3>
          <p>The ASIAN BIPOC therapy content could not be loaded. Please try refreshing the page.</p>
        </div>
      `;
      return false;
    }
  }
  
  // Main initialization function - now more aggressive about removing loading placeholders
  function initializeReactApp() {
    // First, look for all loading placeholders and remove them regardless of container
    const allPlaceholders = document.querySelectorAll(`.${CONFIG.loadingClass}`);
    allPlaceholders.forEach(placeholder => {
      if (placeholder.parentNode) {
        placeholder.parentNode.removeChild(placeholder);
      }
    });
    
    // Find all React containers
    const containers = document.querySelectorAll(`.${CONFIG.containerClass}`);
    if (containers.length === 0) {
      return;
    }
    
    // Initialize React in each container
    containers.forEach(container => renderApp(container));
  }
  
  // More aggressive initialization strategy
  function init() {
    // Try to initialize immediately if DOM is already ready
    if (document.readyState !== 'loading') {
      initializeReactApp();
    } else {
      // Otherwise wait for DOMContentLoaded
      document.addEventListener('DOMContentLoaded', initializeReactApp);
    }
    
    // Also try on window load as backup
    window.addEventListener('load', initializeReactApp);
  }
  
  // Start initialization
  init();
})();
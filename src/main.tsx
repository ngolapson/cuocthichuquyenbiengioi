// Fix environment where window.fetch has only a getter
(function fixFetchGetterOnly() {
  try {
    const globalObj = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : null;
    if (!globalObj) return;

    let currentFetch = globalObj.fetch;
    const desc = Object.getOwnPropertyDescriptor(globalObj, 'fetch') ||
                 Object.getOwnPropertyDescriptor(Object.getPrototypeOf(globalObj), 'fetch');

    // If fetch has only a getter or is not writable
    if (desc && (!desc.writable || !desc.set)) {
      try {
        Object.defineProperty(globalObj, 'fetch', {
          configurable: true,
          enumerable: true,
          get() {
            return currentFetch;
          },
          set(newFetch) {
            currentFetch = newFetch;
          }
        });
      } catch {
        // Fallback: define on instance if possible
        try {
          Object.defineProperty(window, 'fetch', {
            configurable: true,
            writable: true,
            value: currentFetch
          });
        } catch {
          // ignore
        }
      }
    }
  } catch {
    // ignore
  }
})();

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

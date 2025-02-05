import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const rootElement:any = document.getElementById('root');

if (!rootElement) throw new Error('Failed to find the root element');
const root:any = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
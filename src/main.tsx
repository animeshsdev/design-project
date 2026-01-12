import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
// import Gradient from './gradient.js';

// const gradient = new Gradient();
// gradient.init('#gradient-canvas');


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



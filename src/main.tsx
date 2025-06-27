
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add security headers via meta tags
const addSecurityHeaders = () => {
  // Content Security Policy
  const csp = document.createElement('meta');
  csp.httpEquiv = 'Content-Security-Policy';
  csp.content = "default-src 'self'; script-src 'self' 'unsafe-inline' https://api.tripleseat.com https://www.tripleseat.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://mhxaakaeqwefnmguthet.supabase.co https://api.tripleseat.com; frame-ancestors 'none';";
  document.head.appendChild(csp);

  // X-Frame-Options
  const xFrame = document.createElement('meta');
  xFrame.httpEquiv = 'X-Frame-Options';
  xFrame.content = 'DENY';
  document.head.appendChild(xFrame);

  // X-Content-Type-Options
  const xContentType = document.createElement('meta');
  xContentType.httpEquiv = 'X-Content-Type-Options';
  xContentType.content = 'nosniff';
  document.head.appendChild(xContentType);

  // Referrer Policy
  const referrer = document.createElement('meta');
  referrer.name = 'referrer';
  referrer.content = 'strict-origin-when-cross-origin';
  document.head.appendChild(referrer);
};

// Apply security headers
addSecurityHeaders();

createRoot(document.getElementById("root")!).render(<App />);

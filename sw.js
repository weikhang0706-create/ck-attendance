// Minimal service worker — required for "Add to Home Screen" install prompts.
// No offline caching (app needs live data), just needs to exist and register.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  // Only handle requests to this same site. Cross-origin calls (like our
  // Google Apps Script backend) must NOT be intercepted here — doing so
  // breaks the redirect Google's servers use and returns an empty response.
  const isSameOrigin = new URL(event.request.url).origin === self.location.origin;
  if (isSameOrigin) {
    event.respondWith(fetch(event.request));
  }
  // Cross-origin requests: do nothing, let the browser handle them natively.
});

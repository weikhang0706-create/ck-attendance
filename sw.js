// Minimal service worker — required for "Add to Home Screen" install prompts.
// No offline caching (app needs live data), just needs to exist and register.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  // Pass-through — always hit network
  event.respondWith(fetch(event.request));
});

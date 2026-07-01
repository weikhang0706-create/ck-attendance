// Drop this in as sw.js temporarily — it self-destructs any old stuck service worker.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.registration.unregister().then(() => {
      return self.clients.matchAll();
    }).then((clients) => {
      clients.forEach((client) => client.navigate(client.url));
    })
  );
});

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Этот код позволяет приложению работать офлайн в будущем
  e.respondWith(fetch(e.request));
});
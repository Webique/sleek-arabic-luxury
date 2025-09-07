self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('sleek-static-v1').then((cache) => cache.addAll([
      '/packages.pdf',
      '/NormalServices.pdf',
      '/OpeningDiscount.pdf',
      '/logo.webp',
    ]))
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.pathname.endsWith('.pdf')) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const networkFetch = fetch(req).then((res) => {
          const resClone = res.clone();
          caches.open('sleek-static-v1').then((cache) => cache.put(req, resClone));
          return res;
        }).catch(() => cached);
        return cached || networkFetch;
      })
    );
  }
});



const CACHE_NAME = "site-cache-v1";
const urlsToCache = [
  "/",
  "/home",
  "/about",
  "/projects",
  "/contact",
  "/offline",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match("/offline");
    })
  );
});

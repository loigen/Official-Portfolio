const CACHE_NAME = "site-cache-v1";
const URLS_TO_CACHE = [
  "/",
  "/home",
  "/about",
  "/projects",
  "/contact",
  "/offline",
  "/static/css/main.css",
  "/static/js/main.js",
  "/manifest.json",
  "/favicon.ico",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache and caching:", URLS_TO_CACHE);
      return Promise.all(
        URLS_TO_CACHE.map((url) => {
          return fetch(url)
            .then((response) => {
              if (response.ok) {
                return cache.put(url, response);
              }
              return Promise.reject("Failed to fetch");
            })
            .catch(() => {
              console.warn(`Failed to cache ${url}`);
            });
        })
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.startsWith("chrome-extension://")) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((response) => {
          if (event.request.method === "GET" && response.status === 200) {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
          }

          return response;
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("/offline");
          }

          return new Response("Network error occurred", {
            status: 408,
            statusText: "Network Error",
          });
        });
    })
  );
});

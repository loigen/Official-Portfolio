const CACHE_NAME = "site-cache-v1";
const URLS_TO_CACHE = [
  "/",
  "/home",
  "/about",
  "/projects",
  "/contact",
  "/offline",
  "/static/css/main.css", // Update with actual paths
  "/static/js/main.js", // Update with actual paths
  "/manifest.json",
  "/favicon.ico",
];

// Install Event - Cache the initial set of files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache and caching:", URLS_TO_CACHE);
      // Handle each URL individually to avoid failure
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

// Activate Event - Clean up old caches
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

// Fetch Event - Serve cached content if available, fall back to network otherwise
self.addEventListener("fetch", (event) => {
  // Ignore requests from unsupported schemes like chrome-extension
  if (event.request.url.startsWith("chrome-extension://")) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Serve cached response if available
      if (cachedResponse) {
        return cachedResponse;
      }

      // Fetch from network and cache the response
      return fetch(event.request)
        .then((response) => {
          // Only cache GET requests with a successful response
          if (event.request.method === "GET" && response.status === 200) {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
          }

          return response;
        })
        .catch(() => {
          // Serve offline page for navigation requests
          if (event.request.mode === "navigate") {
            return caches.match("/offline");
          }

          // Serve a generic offline response for other requests
          return new Response("Network error occurred", {
            status: 408,
            statusText: "Network Error",
          });
        });
    })
  );
});

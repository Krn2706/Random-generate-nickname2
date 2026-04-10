const CACHE_NAME = "kælenavn-cache-v4";
const urlsToCache = [
    "index.html",
    "styles.css",
    "script.js",
    "manifest.json",
    "icon-192.png",
    "icon-512.png"
];

// Installer service worker og cache ressourcer
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Aktivér service worker og ryd gammel cache
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Intercepter netværksanmodninger og server fra cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

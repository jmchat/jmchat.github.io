/////////////////////////////////////////////////////////////////////////////
// You can find dozens of practical, detailed, and working examples of 
// service worker usage on https://github.com/mozilla/serviceworker-cookbook
/////////////////////////////////////////////////////////////////////////////

// Cache name
var CACHE_NAME = 'cache-version-20';

// Files required to make this app work offline
var REQUIRED_FILES = [
  'index.html',
  'page-map.html',
  'page-faciliteiten.html',
  'page-opening.html',
  'page-restaurant.html',
  'page-route-kiezen.html',
  'page-activiteiten.html',
  'page-route.html',
  '/',
  'assets/img/plattegrond.png',
  'https://fonts.googleapis.com/css?family=Inter:400,500,700&display=swap',
  'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.6.0/dist/leaflet.js',
  'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
  'https://igor-vladyka.github.io/leaflet.motion/dist/leaflet.motion.min.js',
  'https://unpkg.com/ionicons@5.0.0/dist/ionicons.js',
  'assets/js/lib/jquery-3.4.1.min.js',
  'assets/js/lib/popper.min.js',
  'assets/js/lib/bootstrap.min.js',
  'assets/js/plugins/owl-carousel/owl.carousel.min.js',
  'assets/js/base.min.js',
  'assets/css/inc/owl-carousel/owl.carousel.min.css',
  'assets/css/inc/owl-carousel/owl.theme.default.css',
  'assets/css/inc/bootstrap/bootstrap.min.css',
  'assets/css/style.css',
  'assets/js/route-kiezen-min.js',
  'assets/img/icon/72x72.png',
  'assets/img/icon/192x192.png',
  'https://hm.socialcmsdemo.nl/l/catalog/feed/routes?limit=500',
  'assets/img/favicon.png',
  'assets/img/sample/photo/auto-naar-plek.jpg',
  'assets/img/sample/photo/sanitair.jpg',
  'assets/img/sample/photo/faciliteiten.jpg',
  'assets/img/sample/photo/keuken.jpg',
  'assets/img/sample/photo/openingstijden.jpg',
  'assets/img/sample/photo/activiteiten.jpg',
  'assets/img/sample/photo/zeeuwsekust.png',
  'assets/img/sample/photo/animatie.JPG',
  'assets/img/logo.png',
  'assets/img/sample/photo/restaurant.JPG',
  'manifest.json'
];

self.addEventListener('install', function(event) {
  // Perform install step:  loading each required file into cache
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Add all offline dependencies to the cache
        return cache.addAll(REQUIRED_FILES);
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }
        // Not in cache - return the result from the live server
        // `fetch` is essentially a "fallback"
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  // Calling claim() to force a "controllerchange" event on navigator.serviceWorker
  event.waitUntil(self.clients.claim());
});
const CACHE_NAME = 'media-cache-v1';
const IMAGE_CACHE_NAME = 'media-images-v1';

// List of images to cache
const IMAGES_TO_CACHE = [
  '/photo.jpg', '/photo-2.jpg', '/photo-3.jpg', '/photo-4.jpg', '/photo-5.jpg', '/photo-6.jpg',
  '/photo-7.jpg', '/photo-8.jpg', '/photo-9.jpg', '/photo-10.jpg', '/photo-11.jpg', '/photo-12.jpg',
  '/photo-13.jpg', '/photo-14.jpg', '/photo-15.jpg', '/photo-16.jpg', '/photo-17.jpg', '/photo-18.jpg',
  '/photo-19.jpg', '/photo-20.jpg', '/photo-21.jpg', '/photo-22.jpg', '/photo-23.jpg', '/photo-24.jpg',
  '/photo-25.jpg', '/photo-26.jpg', '/photo-27.jpg', '/photo-28.jpg', '/photo-29.jpg', '/photo-30.jpg',
  '/photo-31.jpg', '/photo-32.jpg', '/photo-33.jpg', '/photo-34.jpg', '/photo-35.jpg', '/photo-36.jpg',
  '/photo-37.jpg', '/photo-38.jpg', '/photo-39.jpg', '/photo-40.jpg', '/photo-41.jpg', '/photo-42.jpg',
  '/photo-43.jpg', '/photo-44.jpg', '/photo-45.jpg', '/photo-46.jpg', '/photo-47.jpg', '/photo-48.jpg',
  '/photo-49.jpg', '/photo-50.jpg', '/photo-51.jpg', '/photo-52.jpg', '/photo-53.jpg', '/photo-54.jpg',
  '/photo-55.jpg', '/photo-56.jpg', '/photo-57.jpg', '/photo-58.jpg', '/photo-59.jpg', '/photo-60.jpg',
  '/photo-61.jpg', '/photo-62.jpg', '/photo-63.jpg', '/photo-64.jpg', '/photo-65.jpg', '/photo-66.jpg',
  '/photo-67.jpg'
].map(img => `/mediaImages${img}`);

// Install event - cache images
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(IMAGE_CACHE_NAME)
      .then((cache) => {
        console.log('Caching images...');
        return cache.addAll(IMAGES_TO_CACHE);
      })
      .catch((error) => {
        console.log('Failed to cache images:', error);
      })
  );
});

// Fetch event - serve from cache if available
self.addEventListener('fetch', (event) => {
  // Only handle image requests
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Return cached version if available
          if (response) {
            return response;
          }
          
          // Otherwise fetch from network and cache it
          return fetch(event.request)
            .then((response) => {
              // Check if we received a valid response
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              
              // Clone the response
              const responseToCache = response.clone();
              
              // Cache the fetched image
              caches.open(IMAGE_CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
              
              return response;
            });
        })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== IMAGE_CACHE_NAME && cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 
var CACHE_VERSION = 'app-v0' ;

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// will update if revision is changed and tab closed in browser
// normal servise worker will update if service worker file was chaged

workbox.precaching.precacheAndRoute([        
  { url: '/', revision: '4' },
  { url: '/index.html', revision: '4' }
]);

workbox.routing.registerRoute(
    new RegExp('.*\.css'),
    workbox.strategies.networkFirst({
        // custom cache name
        cacheName: 'css-cache',
        plugins: [
          new workbox.expiration.Plugin({
            // Cache only 20 images
            // maxEntries: 20,
            // Cache for a maximum of a week
            maxAgeSeconds: 7 * 24 * 60 * 60,
          })
        ],
      })

  );

// workbox.routing.registerRoute(
//     new RegExp( '.*\.html' ),
//     workbox.strategies.networkFirst({
//         // custom cache name
//         cacheName: 'html-cache',
//         plugins: [
//           new workbox.expiration.Plugin({
//             // Cache only 20 images
//             // maxEntries: 20,
//             // Cache for a maximum of a week
//             maxAgeSeconds: 7 * 24 * 60 * 60,
//           })
//         ],
//       })
// );

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst({
        // custom cache name
        cacheName: 'js-cache',
        plugins: [
          new workbox.expiration.Plugin({
            // Cache only 20 images
            // maxEntries: 20,
            // Cache for a maximum of a week
            maxAgeSeconds: 7 * 24 * 60 * 60,
          })
        ],
      })

);

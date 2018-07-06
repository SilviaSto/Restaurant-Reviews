/*-- https://developers.google.com/web/fundamentals/primers/service-workers/ --*/

let cacheVersion = 'version 1';
let cacheFiles = [
    './',
    './index.html',
    './restaurant.html',
    './js/dbhelper.js',
    './js/main.js',
    './js/restaurant_info.js',
    './data/restaurants.json',
    './css/styles.css',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg'
];
/*--install a service worker--*/
self.addEventListener('install', function(event){
    console.log('SW installed');
    event.waitUntil(
        caches.open(cacheVersion)
        .then(function(cache){
            console.log('Files cached');
            return cache.addAll(cacheFiles);
        })
    );
});

/*--Cache and return request--*/
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if(response){
                console.log('matched', event.request.url);
                return response;
            }
            return fetch(event.request);
        })
    );
});


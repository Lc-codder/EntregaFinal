const CACHE = 'bootcamp-cache-v1'
const ASSETS = [ '/', '/index.html', '/src/main.jsx', '/src/styles.css', '/manifest.webmanifest' ]


self.addEventListener('install', (e) => {
e.waitUntil(
caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
)
self.skipWaiting()
})


self.addEventListener('activate', (e) => {
e.waitUntil(self.clients.claim())
})


// Stale-While-Revalidate strategy
self.addEventListener('fetch', (e) => {
if (e.request.method !== 'GET') return
e.respondWith(
caches.match(e.request).then((cached) => {
const networkFetch = fetch(e.request).then((res) => {
if (res && res.status === 200) {
const cloned = res.clone()
caches.open(CACHE).then((c) => c.put(e.request, cloned))
}
return res
}).catch(() => null)
return cached || networkFetch
})
)
})

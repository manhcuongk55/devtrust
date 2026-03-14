self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('devtrust-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
        'https://cdn.jsdelivr.net/npm/gun/gun.js',
        'https://cdn.jsdelivr.net/npm/gun/sea.js'
      ]);
    }).catch(err => {
      console.warn('Cache install failed (might be expected during local dev):', err);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== 'devtrust-cache-v1') {
          return caches.delete(key);
        }
      }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Bỏ qua các request đến chrome-extension hoặc các domain không kiểm soát được
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchRes) => {
        return caches.open('devtrust-cache-v1').then((cache) => {
          // Chỉ cache GET requests
          if (event.request.method === 'GET') {
             cache.put(event.request, fetchRes.clone());
          }
          return fetchRes;
        });
      }).catch(() => {
        // Fallback or custom offline page here if needed
      });
    })
  );
});

// ============ INDEXEDDB FALLBACK (Background sync conceptually) ============
const DB_NAME = 'DevTrustOfflineDB';
const DB_VERSION = 1;

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = (e) => reject("DB Error");
    request.onsuccess = (e) => resolve(e.target.result);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('posts')) {
        db.createObjectStore('posts', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('messages')) {
        db.createObjectStore('messages', { autoIncrement: true });
      }
    };
  });
}

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SYNC_POST') {
    openDB().then(db => {
      const tx = db.transaction('posts', 'readwrite');
      tx.objectStore('posts').put(event.data.post);
    }).catch(err => console.error('Offline DB save error:', err));
  }
});

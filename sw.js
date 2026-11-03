const C = "rete-viva-v29";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" }))))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== C).map(n => caches.delete(n))))); self.clients.claim(); });
// sempre dalla rete se c'è, chiedendo al server se il file è cambiato (senza la memoria del browser, che lo tiene
// fino a 10 minuti): così una versione nuova arriva appena riapri l'app. Senza rete, dalla memoria
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request.url, { cache: "no-cache" }).then(r => {
    if (r.ok){ const cp = r.clone(); caches.open(C).then(c => c.put(e.request, cp)); }
    return r;
  }).catch(() => caches.match(e.request)));
});

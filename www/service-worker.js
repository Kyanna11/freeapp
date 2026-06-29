// 仅满足iOS PWA强制检测，无任何额外功能
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

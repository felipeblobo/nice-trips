/* eslint-disable no-async-promise-executor */
/* eslint-disable no-undef */
if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        n[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const n = document.createElement('script');
              (n.src = e), document.head.appendChild(n), (n.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!n[e]) throw new Error(`Module ${e} didn’t register its module`);
          return n[e];
        })
      );
    },
    s = (s, n) => {
      Promise.all(s.map(e)).then((e) => n(1 === e.length ? e[0] : e));
    },
    n = { require: Promise.resolve(s) };
  self.define = (s, c, i) => {
    n[s] ||
      (n[s] = Promise.resolve().then(() => {
        let n = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          c.map((s) => {
            switch (s) {
              case 'exports':
                return n;
              case 'module':
                return t;
              default:
                return e(s);
            }
          }),
        ).then((e) => {
          const s = i(...e);
          return n.default || (n.default = s), n;
        });
      }));
  };
}
define('./sw.js', ['./workbox-4a677df8'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/server/middleware-manifest.json',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/-NpwcB0Ps7gvhnFVScNbI/_buildManifest.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/-NpwcB0Ps7gvhnFVScNbI/_middlewareManifest.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/-NpwcB0Ps7gvhnFVScNbI/_ssgManifest.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/chunks/0b7b90cd.26a3995d0dc7cc17.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/chunks/163.72335dbe72e46813.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/chunks/651.cd440d205ca10b23.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/chunks/framework-8957c350a55da097.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/chunks/main-2807bf6427d5c844.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/chunks/pages/%5Bslug%5D-42b4243ddc682902.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/chunks/pages/_app-c66cd9871a498a72.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/chunks/pages/_error-ddb7477254ab31d2.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/chunks/pages/index-32986c95db419168.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/_next/static/chunks/webpack-0aa107ee781aec8e.js',
          revision: '-NpwcB0Ps7gvhnFVScNbI',
        },
        {
          url: '/img/hero-illustration.svg',
          revision: '5fd5143cba1046a214d9a359fce22e89',
        },
        {
          url: '/img/icon-192.png',
          revision: 'd27169d080684ebb57b8387d05c4b444',
        },
        {
          url: '/img/icon-512.png',
          revision: 'f1d74b43a3832183202483a40d9e9d84',
        },
        {
          url: '/img/logo-gh.svg',
          revision: 'e3a0c31390db72fd374570f4a57c56b0',
        },
        { url: '/img/logo.svg', revision: '202525302ad30aca5b2b790d4b0b5796' },
        { url: '/manifest.json', revision: 'dc15319401681c63163b01302dbe2287' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: c,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    );
});

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,t)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=t(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-019999f6"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_error",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/_next/static/LIjE0YYej5FPPZsnN2v_G/_buildManifest.js",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/_next/static/LIjE0YYej5FPPZsnN2v_G/_ssgManifest.js",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.bbfa997f0b67a30d7eee.js",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.bc415f86fc0c8d92b427.js",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/_next/static/chunks/framework.0c239260661ae1d12aa2.js",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/_next/static/chunks/main-360d054813830e11b72c.js",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/_next/static/chunks/pages/_app-c99624d6d73a6ca7992d.js",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/_next/static/chunks/pages/_error-6160b41a0d4bc8ef2270.js",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/_next/static/chunks/pages/index-c5613d837bc691f9b2f7.js",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/_next/static/chunks/polyfills-4f14e8c8ea1352d3ef0d.js",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"LIjE0YYej5FPPZsnN2v_G"},{url:"/img/back_top.svg",revision:"d51cbefb90a82a40784018bf1de8ab0d"},{url:"/img/favicon.ico",revision:"db9f34b205dbe8c5fc3d11238aa6cf56"},{url:"/img/hands.svg",revision:"4499ac952c0dfb2bd4167927326bbdad"},{url:"/img/logo.svg",revision:"494d466d40841b480438c8fbac3a5486"},{url:"/img/logo192.png",revision:"289838f4a4a1687a8a293b7c37ee5b03"},{url:"/img/logo512.png",revision:"1e7b4f81307f53014cbed9b0cec9c39e"},{url:"/manifest.json",revision:"32cb5eab124ac8604b800a4e8843480b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",networkTimeoutSeconds:10,plugins:[{requestWillFetch:async({request:e})=>(Request(),e)},new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e,event:s,error:n,state:r})=>caches.match("/offline.jpg",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e,event:s,error:n,state:r})=>caches.match("/_error",{ignoreSearch:!0})},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));

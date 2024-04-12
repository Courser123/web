'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "b370f069c32eaf1d2e7d8a1a0cf91aef",
"index.html": "814fda8e06531de2b086477e9f8628ab",
"/": "814fda8e06531de2b086477e9f8628ab",
"main.dart.js": "8d83bd80cb118a8d9634c4aa35864b50",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "b87fca32371baf9d0021b6653f419e81",
"icons/Icon-192.png": "b87fca32371baf9d0021b6653f419e81",
"manifest.json": "c40a4832ba80c38d0ba8018f611b270c",
"assets/AssetManifest.json": "979cbf36ee90611191c4c0e1594a37cd",
"assets/NOTICES": "7eb174cf65550ca27c4d5b1324d565f2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "9f9ad71b6a7a8c4c5a3a42211aa2b5dc",
"assets/packages/flutter_booksearch/images/icon_search_delete@3x.png": "b88b562342ad55a9fa5e3f004e970e87",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/flutter_resource/lib/images/icon_about@3x.png": "7dd32775bf9d47e22538879b473eecf5",
"assets/packages/flutter_resource/lib/images/kongyemian.png": "464de34f245d60eead0fe8a0888efb39",
"assets/packages/flutter_resource/lib/images/icon_search@3x.png": "535ec60abdbf586768056fcde580605b",
"assets/packages/flutter_resource/lib/images/icon_delete@3x.png": "5555606d81233d8f2f363feb4ed3ed8b",
"assets/packages/flutter_resource/lib/images/logo.png": "b4a22c738c930b0a19508ceb428b5227",
"assets/packages/flutter_resource/lib/images/icon_edit@3x.png": "73a515d0d14f9652157eafcab004cbd3",
"assets/packages/flutter_resource/lib/images/cover.png": "b4a22c738c930b0a19508ceb428b5227",
"assets/packages/flutter_resource/lib/images/icon_history@3x.png": "20939d7c385b0e87086be2c05e5fde96",
"assets/packages/flutter_resource/lib/images/icon_common_def@3x.png": "76d275deefff323ef78a335c5d854a11",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/flutter_meedu_videoplayer/assets/icons/minimize.png": "b3856b8a8c4d30067ef749aff9c820d0",
"assets/packages/flutter_meedu_videoplayer/assets/icons/exit_picture-in-picture.png": "61bd02c019e57496ab2cf94ad2e05655",
"assets/packages/flutter_meedu_videoplayer/assets/icons/picture-in-picture.png": "c221b185a9d8c6d2b2c9b6776fa550ba",
"assets/packages/flutter_meedu_videoplayer/assets/icons/lock-screen.png": "6ea8cc81b7baa76304959597188e877e",
"assets/packages/flutter_meedu_videoplayer/assets/icons/fullscreen.png": "8a040d2380f58e3b8f33ee728fd84e24",
"assets/packages/flutter_meedu_videoplayer/assets/icons/repeat.png": "9dfe3bbcbefb4b746a145bde57a71bff",
"assets/packages/flutter_meedu_videoplayer/assets/icons/fit.png": "e6ba4c78e9de2bfc134a0ffeb8518cb2",
"assets/packages/flutter_meedu_videoplayer/assets/icons/sound.png": "530661df012ed13bee07ab2d3b874777",
"assets/packages/flutter_meedu_videoplayer/assets/icons/pause.png": "a8ddf81addcb6e7408868015d7afe035",
"assets/packages/flutter_meedu_videoplayer/assets/icons/rewind.png": "235a7d4b69b461128ddf04389d7d3fda",
"assets/packages/flutter_meedu_videoplayer/assets/icons/exit_lock-screen.png": "3f5c485f05c7746cfbb8bf419282bb90",
"assets/packages/flutter_meedu_videoplayer/assets/icons/mute.png": "d70bed3cdfb3296efbe4de06e6dfed47",
"assets/packages/flutter_meedu_videoplayer/assets/icons/play.png": "f93523daf337c51131913acae4889a2e",
"assets/packages/flutter_meedu_videoplayer/assets/icons/fast-forward.png": "4b90931155b96f781590fd2e9ffceef8",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_utils/images/noNetwork@3x.png": "92e15cd714b6209f1528235004cbb233",
"assets/packages/flutter_bookcity/images/icon_home_search.png": "34c3234a4ec87c37262cd58b3af63f03",
"assets/packages/flutter_bookcity/images/icon_arrow_right@3x.png": "eb90a7409b4cd567c2395c535f9fcaab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5af7d6cfe6da5d70ca08817058cd8437",
"assets/fonts/MaterialIcons-Regular.otf": "1bf7a66df366a524788d8a3e097b52f0",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

if(!self.define){let e,a={};const c=(c,s)=>(c=new URL(c+".js",s).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let n={};const d=e=>c(e,t),f={module:{uri:t},exports:n,require:d};a[t]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(i(...e),n)))}}define(["./workbox-9b4d2a02"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"65830ac7a9591ef5d4afde66cce57dbb"},{url:"/_next/static/cP44qEhqwMdtxgzdbGDNp/_buildManifest.js",revision:"4180cad2abf7c7d4184673bf78d28330"},{url:"/_next/static/cP44qEhqwMdtxgzdbGDNp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e762574-ecb848a3bc0d3e4d.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/1126-eb31b3c976746ecc.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/1507-ba1d410580f823c0.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/1575-0f8098bb67e2e8a4.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/1801-95e241243941056b.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/2054-596b7bf92933732e.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/2345-d7297d26391c01fb.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/2880-40f5145c04203247.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/3142-6696f40fa690ca92.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/3346-85e72fff65467ce6.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/346-795caa24fc0cf309.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/382-10674a6705024625.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/4043-df1960a958abb424.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/4727-24c6e51c4794f277.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/5089-85b0fc2b9f997826.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/5297-348c71caf7dee1a5.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/5588-fcd0929310c9158d.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/5835-d275292ce385ca7f.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/6762-b8375ddd8e4b5f65.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/8014-2900b36e86d3eb7f.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/8067-49a84f7a75458983.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/8105-49d378a3c8b62af6.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/8512-21d1c0f8fa1657ef.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/8597-f7f11dc9d691df9f.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/8821-7d04a01f35e52488.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/8827-b315f06bee452767.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/9499-cfad8235b963d2ff.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/9773-8ce9295de312b52c.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/9c4e2130-bc3b019cbc20806a.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/about/page-9dc76b7045ed8ff0.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/chat/c/%5Bid%5D/page-3cbc069f69702197.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/chat/layout-c31373ce78a060ea.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/chat/new/page-acf9d735e66d5eb4.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/chat/page-c50bad5b34e9427b.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/contact/page-256031af75961613.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/error/page-894c0fa2771d9ba6.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/forgot_password/page-366cee4f9834340e.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-c09a142638b89746.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/loading-80a5eb3112043de0.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/market/page-32517e87e2ae4a66.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/not-found-0238896f25fdd9cc.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/onboarding/loading-3d10adff51c329af.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/onboarding/location/loading-ff7db590bb6856f9.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/onboarding/location/page-926b53649ff10c57.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/onboarding/page-e1c7876940015839.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/onboarding/preferences/loading-2cb0bf6f3ca7c198.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/onboarding/preferences/page-09e4cf6d932b34b2.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/options/page-98de633204eadecc.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-16c805cddd637d82.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/pest-identification/new/page-af07b0c4b519f619.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/pest-identification/page-276ee7df83406b71.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/settings/page-711bae81f456b55d.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/share/%5Bid%5D/page-8905494c11165c2d.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/sign-in/page-49b19cfa68afe2f3.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/sign-up/page-e5be3ecb2451f40f.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/%5Blocale%5D/weather/page-08623703050ce891.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/app/_not-found-d43aeebc9a821ce1.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/fd9d1056-35f5dededd9ff4ff.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/framework-08aa667e5202eed8.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/main-app-dd103498b5f99c42.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/main-f9e5365ea33a6c22.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/pages/_app-4900553c84dfe0ac.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/pages/_error-8b5a73bfd041014c.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-c13b961f681bb6e8.js",revision:"cP44qEhqwMdtxgzdbGDNp"},{url:"/_next/static/css/77006b211999c780.css",revision:"77006b211999c780"},{url:"/_next/static/css/ecc9280f8211c671.css",revision:"ecc9280f8211c671"},{url:"/_next/static/media/0484562807a97172-s.p.woff2",revision:"b550bca8934bd86812d1f5e28c9cc1de"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/0a03a6d30c07af2e-s.p.woff2",revision:"79da53ebaf3308c806394df4882b343d"},{url:"/_next/static/media/162bf645eb375add-s.p.ttf",revision:"ea46d0b48797069c0d1d092a40988da0"},{url:"/_next/static/media/2641bfa8d355064d-s.p.woff2",revision:"c926b29b44328ae02bf34eeea4b61b7c"},{url:"/_next/static/media/2c062342b1fab89d-s.p.woff2",revision:"90014cf16466d93af47ac74be725aa6a"},{url:"/_next/static/media/2cc74b96cdc9383d-s.p.woff2",revision:"aa46b18b06759d7ed576d7f31bb00f2a"},{url:"/_next/static/media/2e7d59395f7802aa-s.p.woff2",revision:"0e6b404664ba0686b6aba8757610841e"},{url:"/_next/static/media/30cd8f99d32fa6e8-s.p.woff2",revision:"e5c1b944d9e3380a062bf911e26728a3"},{url:"/_next/static/media/3b26296dd1ece7c6-s.p.woff2",revision:"e5e0a8e998f67284c0f080d35fde93a1"},{url:"/_next/static/media/3d88ad18e9ebd0fb-s.p.woff2",revision:"8443fdbcc18980c41dd6560646464afd"},{url:"/_next/static/media/3f9466fc53690ba7-s.p.woff2",revision:"173212bc7f69965527b29df7419d615c"},{url:"/_next/static/media/46c21389e888bf13-s.p.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/4b2c76e277457ca7-s.p.woff2",revision:"c05376a46b7554ff728d15ef9a796103"},{url:"/_next/static/media/4c285fdca692ea22-s.p.woff2",revision:"42d3308e3aca8742731f63154187bdd7"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/53f74bc14e929f80-s.p.woff2",revision:"6e877ca75d6894f7c8da48686c1b4cba"},{url:"/_next/static/media/6245472ced48d3be-s.p.woff2",revision:"335da181ffc3c425a4abf0e8fc0f1e42"},{url:"/_next/static/media/66f30814ff6d7cdf.p.woff2",revision:"addf0d443087aa4b985f763c80182017"},{url:"/_next/static/media/7108afb8b1381ad1-s.p.woff2",revision:"d5a9cbc34d22ffd5c4eb636dcca02f5d"},{url:"/_next/static/media/7361da631c442576-s.p.woff2",revision:"af8fbe23c25ebc16d2d6418a9240ec56"},{url:"/_next/static/media/7c1535108079abc4-s.p.woff2",revision:"332a80cf65a428ba6f3a08ef6fbba970"},{url:"/_next/static/media/7db6c35d839a711c-s.p.woff2",revision:"de2b6fe4e663c0669007e5b501c2026b"},{url:"/_next/static/media/8888a3826f4a3af4-s.p.woff2",revision:"792477d09826b11d1e5a611162c9797a"},{url:"/_next/static/media/8a46cfca7977140b-s.p.woff2",revision:"bbe7ffba23d88db7110d165a621bcffc"},{url:"/_next/static/media/8d346445d24062b5-s.p.woff2",revision:"c965abed1310982a4d2148cb81765b56"},{url:"/_next/static/media/8f91baacbcce7392-s.p.woff2",revision:"be3f685101a4a347c3d77ff968436971"},{url:"/_next/static/media/94575ae3783e7c88-s.p.woff2",revision:"a56bc9adab4ad49a6e6d19f72ac23bc0"},{url:"/_next/static/media/9e82d62334b205f4-s.p.woff2",revision:"1c2ea932e7620e3a752301d0e54d3d91"},{url:"/_next/static/media/agrovoice-logo.4c1d8910.png",revision:"14f22ca9e0a8079db6b13c6d98439e87"},{url:"/_next/static/media/b957ea75a84b6ea7-s.p.woff2",revision:"0bd523f6049956faaf43c254a719d06a"},{url:"/_next/static/media/c393c397a049ab95-s.p.woff2",revision:"c18e6a21d67dcb103794e696d71cd0c9"},{url:"/_next/static/media/c99ef75952aca458-s.p.woff2",revision:"daa3e17afd40981909a5120927be978a"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/cf1f69a0c8aed54d-s.p.woff2",revision:"591c48fae7732f35790aeda9bea56f01"},{url:"/_next/static/media/crop-field.a20202d7.jpeg",revision:"5064050afaa32cecf1c7cff1e9cbe355"},{url:"/_next/static/media/crop-mgmt.a038f455.jpeg",revision:"22d1aee5c33074c1e6c0a31dcd3b1e75"},{url:"/_next/static/media/d4392c7d3cdfca51-s.woff2",revision:"fb397e4ed047d836f2ad76ba3488e924"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/d8a0c67dc31f196e-s.p.woff2",revision:"7895fdec0e2f11727c9305ade33e7e49"},{url:"/_next/static/media/decf5989f4e7f901-s.p.woff2",revision:"9b277f891343465c462f609a69889cec"},{url:"/_next/static/media/dfa2ccbeca9e77a8-s.p.woff2",revision:"4d88c8f550833714f8721257780b9000"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/_next/static/media/e4f1ac6216f8d8cb-s.p.woff2",revision:"28bf8762089663e67c617ff8d0bc372f"},{url:"/_next/static/media/e899c850b61a3252-s.woff2",revision:"877c15226d1f27243a67d7e79d94b51c"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/f0496e21808c976b-s.p.woff2",revision:"16a4a2fe967ec89f31c4824506653104"},{url:"/_next/static/media/f5767adec246cdc1-s.p.woff2",revision:"7a1c6501aa2b3327c1cf556362a851cb"},{url:"/_next/static/media/f7099cae2a5aa83f-s.p.woff2",revision:"8717ab2d20ae5ec51c6ac277e0331511"},{url:"/_next/static/media/f9c47219ac0af4ab-s.p.woff2",revision:"b3ee204536ad3ee3dab08d6c420af595"},{url:"/_next/static/media/farmqa.45828b79.jpeg",revision:"48c208e46e5191bb98045da39062da1f"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/market.d5f3bb98.jpeg",revision:"977a48e2bc01a351531c60057d9f0930"},{url:"/_next/static/media/pests.ee3c640b.jpeg",revision:"e0d3747aa4722a0772ebb79d21a6a83c"},{url:"/_next/static/media/soil.91a43032.jpg",revision:"06677d06818bbaeccaee27ba36cb1b6c"},{url:"/_next/static/media/weather-cloud.7452dfda.jpeg",revision:"be747cb6ba37b5568c7ba0f54d6b70de"},{url:"/android-chrome-192x192.png",revision:"ed7f1ec16f199f427f32f95e091a7ea9"},{url:"/android-chrome-512x512.png",revision:"d440847f4a11be612830f11a08307ef7"},{url:"/apple-touch-icon.png",revision:"b51b584e8544c9fbefceb78f351bba7e"},{url:"/favicon-16x16.png",revision:"d3d1c23059e4c5a50b00a21806654c5d"},{url:"/favicon-32x32.png",revision:"5eff67bc90e46a233963b2f64d6dad95"},{url:"/favicon.ico",revision:"a7dbd5b88ca7348f5de718f45b3ecd40"},{url:"/fonts/CalSans-SemiBold.ttf",revision:"ea46d0b48797069c0d1d092a40988da0"},{url:"/images/agrovoice-logo.png",revision:"14f22ca9e0a8079db6b13c6d98439e87"},{url:"/images/crop-field.jpeg",revision:"5064050afaa32cecf1c7cff1e9cbe355"},{url:"/images/crop-mgmt.jpeg",revision:"22d1aee5c33074c1e6c0a31dcd3b1e75"},{url:"/images/crop.jpeg",revision:"33d234a8a399ec9de643cc2bda3febe4"},{url:"/images/farmqa.jpeg",revision:"48c208e46e5191bb98045da39062da1f"},{url:"/images/market.jpeg",revision:"977a48e2bc01a351531c60057d9f0930"},{url:"/images/pests.jpeg",revision:"e0d3747aa4722a0772ebb79d21a6a83c"},{url:"/images/soil.jpg",revision:"06677d06818bbaeccaee27ba36cb1b6c"},{url:"/images/weather-cloud.jpeg",revision:"be747cb6ba37b5568c7ba0f54d6b70de"},{url:"/manifest.json",revision:"0e4688117c04185f5dbade2d8383ddb2"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:c,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

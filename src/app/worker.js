import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

precacheAndRoute(self.__WB_MANIFEST);

importScripts('https://src-websdk.test11.xpu.sh/test-appkey-web/service-worker-source.js');

"use client"

import { Workbox } from "workbox-window";
import { useEffect } from 'react';

export default function Pwa() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const wb = new Workbox('sw.js')
      wb.register();
    }

    (function(p,u,s,h,e,r,l,i,b) {p['XtremePushObject']=s;p[s]=function(){
      (p[s].q=p[s].q||[]).push(arguments)};i=u.createElement('script');i.async=1;
      i.src=h;b=u.getElementsByTagName('script')[0];b.parentNode.insertBefore(i,b);
    })(window,document,'xtremepush','https://src-websdk.test11.xpu.sh/test-appkey-web/sdk.js');

    xtremepush('config', 'externalServiceWorker', true)
  }, []);

  return <></>;
}
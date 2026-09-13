"use client";

import { useEffect } from "react";

/** Neden bileşen? wowjs yalnızca tarayıcıda çalışır; Layout ise Server Component. */
export default function WowAnimations() {
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow?.init();
  }, []);

  return null;
}

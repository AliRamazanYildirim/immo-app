"use client";

import { useEffect } from "react";

export default function DataBg() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-bg]");

    elements.forEach((element) => {
      const bg = element.getAttribute("data-bg");
      if (bg) {
        element.style.backgroundImage = `url(${bg})`;
      }
    });
  }, []);

  return null;
}

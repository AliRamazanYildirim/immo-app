import { useEffect, useState } from "react";

/** Header'ın yapışkan hale geldiği ve "yukarı dön" butonunun göründüğü eşik. */
const SCROLL_THRESHOLD_PX = 100;

/** Sayfa eşiğin altına kaydırıldı mı? Header ve BackToTop paylaşır. */
export function useScrolled(): boolean {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
}

"use client";

/**
 * YouTube videosunu modalda açan buton.
 *
 * Neden ayrı bileşen? Video butonlu bölümlerin geri kalanı statik; yalnızca
 * buton client'ta çalışsın diye bölüm Server Component olarak kalır.
 * Neden portal? Buton `wow` animasyonlu kapsayıcılarda duruyor; animasyonun
 * bıraktığı transform, `position: fixed` modalı kapsayıcının içine hapseder.
 */

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import ModalVideo from "react-modal-video";

export type VideoPopupButtonProps = {
  videoId: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

export default function VideoPopupButton({
  videoId,
  className,
  ariaLabel,
  children,
}: VideoPopupButtonProps) {
  const [isOpen, setOpen] = useState(false);
  const [isMounted, setMounted] = useState(false);

  // Portal hedefi (document.body) yalnızca tarayıcıda var
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={ariaLabel}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
      {isMounted &&
        createPortal(
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={videoId}
            onClose={() => setOpen(false)}
          />,
          document.body,
        )}
    </>
  );
}

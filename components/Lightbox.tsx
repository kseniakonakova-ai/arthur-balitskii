"use client";

import { useEffect } from "react";
import type { GalleryItem } from "../data/galleries";

export default function Lightbox({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" onMouseDown={onClose}>
      <div className="modalInner" onMouseDown={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="modalImg" src={item.src} alt={item.alt ?? item.title} />
        <div className="modalBar">
          <strong>{item.title}</strong>
          <button className="btn" onClick={onClose}>
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}
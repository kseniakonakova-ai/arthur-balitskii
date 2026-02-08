"use client";

import { useState } from "react";
import type { GalleryItem } from "../data/galleries";
import Lightbox from "./Lightbox";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="masonry">
        {items.map((it) => (
          <div
            key={it.id}
            className="thumb"
            role="button"
            tabIndex={0}
            onClick={() => setActive(it)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setActive(it);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.src} alt={it.alt ?? it.title} />
          </div>
        ))}
      </div>

      {active && <Lightbox item={active} onClose={() => setActive(null)} />}
    </>
  );
}
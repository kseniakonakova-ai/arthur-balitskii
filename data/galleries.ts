export type GalleryItem = {
  id: string;
  title: string;
  src: string; // путь в /public
  alt?: string;
};

export type Gallery = {
  slug: string; // URL: /galleries/{slug}
  name: string;
  cover: string; // обложка категории
  items: GalleryItem[];
};

export const galleries: Gallery[] = [
  {
    slug: "scratchboard",
    name: "Scratchboard",
    cover: "/images/covers/scratchboard.jpg",
    items: [
      { id: "sc-1", title: "Slide 7", src: "/images/scratchboard/slide7.jpg" },
      { id: "sc-2", title: "Slide 8", src: "/images/scratchboard/slide8.jpg" },
      { id: "sc-3", title: "Slide 9", src: "/images/scratchboard/slide9.jpg" },
    ],
  },
  {
    slug: "line-art",
    name: "Line Art",
    cover: "/images/covers/lineart.jpg",
    items: [
      { id: "la-1", title: "Botanical", src: "/images/lineart/botanical.jpg" },
      { id: "la-2", title: "Architecture", src: "/images/lineart/architecture.jpg" },
    ],
  },
];
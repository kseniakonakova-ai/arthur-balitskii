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
    slug: "myclients",
    name: "My Clients",
    cover: "/images/covers/myclients.jpg",
    items: Array.from({ length: 80 }, (_, i) => ({
      id: `mc-${i + 1}`,
      title: `Client ${i + 1}`,
      src: `/images/myclients/m${i + 1}.jpg`,
    })),
  },
  {
    slug: "logo",
    name: "Logos",
    cover: "/images/covers/logo.jpg",
    items: Array.from({ length: 20 }, (_, i) => ({
      id: `logo-${i + 1}`,
      title: `Logo ${i + 1}`,
      src: `/images/logo/logo${i + 1}.jpg`,
    })),
  },
  {
    slug: "landscape",
    name: "Landscape",
    cover: "/images/covers/landscape.jpg",
    items: Array.from({ length: 7 }, (_, i) => ({
      id: `la-${i + 1}`,
      title: `Landscape ${i + 1}`,
      src: `/images/landscape/la${i + 1}.jpg`,
    })),
  },
  {
    slug: "animals",
    name: "Animals",
    cover: "/images/covers/animals.jpg",
    items: Array.from({ length: 37 }, (_, i) => ({
      id: `an-${i + 1}`,
      title: `Animal ${i + 1}`,
      src: `/images/animals/animal${i + 1}.jpg`,
    })),
  },
  {
    slug: "people",
    name: "People",
    cover: "/images/covers/people.jpg",
    items: Array.from({ length: 6 }, (_, i) => ({
      id: `pe-${i + 1}`,
      title: `People ${i + 1}`,
      src: `/images/people/people${i + 1}.jpg`,
    })),
  },
  {
    slug: "conceptual",
    name: "Conceptual",
    cover: "/images/covers/conceptual.jpg",
    items: Array.from({ length: 44 }, (_, i) => ({
      id: `co-${i + 1}`,
      title: `Concept ${i + 1}`,
      src: `/images/conceptual/co${i + 1}.jpg`,
    })),
  },
  {
    slug: "typography",
    name: "Typography",
    cover: "/images/covers/typography.jpg",
    items: Array.from({ length: 15 }, (_, i) => ({
      id: `ty-${i + 1}`,
      title: `Typography ${i + 1}`,
      src: `/images/typography/ty${i + 1}.jpg`,
    })),
  },
];
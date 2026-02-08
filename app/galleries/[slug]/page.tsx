import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { galleries } from "../../../data/galleries";
import GalleryGrid from "../../../components/GalleryGrid";

export async function generateStaticParams() {
  return galleries.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) return { title: "Gallery not found" };

  return {
    title: '${gallery.name} — Portfolio',
    description: '${gallery.items.length} works in ${gallery.name}',
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const gallery = galleries.find((g) => g.slug === slug);
  if (!gallery) return notFound();

  return (
    <>
      {/* ✅ DEBUG: если это не видно, значит открывается не этот файл */}
    

      <Link
        href="/galleries"
        className="btn"
        style={{ marginBottom: 16, display: "inline-block" }}
      >
        ← Back to galleries
      </Link>

      <h1 className="pageTitle">{gallery.name}</h1>
      <p className="pageSub">{gallery.items.length} works</p>

      <GalleryGrid items={gallery.items} />
    </>
  );
}
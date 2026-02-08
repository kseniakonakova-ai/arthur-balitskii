import Link from "next/link";
import { galleries } from "../data/galleries";

export default function CategoryGrid() {
  return (
    <section className="grid" aria-label="Image Categories">
      {galleries.map((g) => (
        <Link key={g.slug} href={`/galleries/${g.slug}`} className="card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cardImg" src={g.cover} alt={g.name} />
          <div className="cardBody">
            <strong>{g.name.toUpperCase()}</strong>
            <span>{g.items.length} works</span>
          </div>
        </Link>
      ))}
    </section>
  );
}
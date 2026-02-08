import CategoryGrid from "../components/CategoryGrid";
import HeroCarousel from "../components/HeroCarousel";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="heroTop">
          <div>
            <h1>GALLERIES</h1>
            <p>Категории работ и подборки</p>
          </div>
          <p>Licensing / commissions</p>
        </div>

        <HeroCarousel />
      </section>

      <CategoryGrid />
    </>
  );
}
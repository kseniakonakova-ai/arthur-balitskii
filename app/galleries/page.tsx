import CategoryGrid from "../../components/CategoryGrid";

export default function GalleriesPage() {
  return (
    <>
      <h1 className="pageTitle">Galleries</h1>
      <p className="pageSub">Выберите категорию, чтобы посмотреть работы.</p>
      <CategoryGrid />
    </>
  );
}
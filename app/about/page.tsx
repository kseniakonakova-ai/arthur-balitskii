export default function AboutPage() {
  return (
    <>
      <h1 className="pageTitle">Artist Bio</h1>
      <p className="pageSub">Коротко о тебе, техниках, клиентах, выставках.</p>

      <div className="card" style={{ padding: 16 }}>
        <p>
          Пример: Я иллюстратор, работаю в техниках scratchboard / engraving / woodcut.
          Делаю иллюстрации для брендов, книг и редакционных материалов.
        </p>
      </div>
    </>
  );
}
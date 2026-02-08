export const metadata = {
  title: "Clients & Services — Arthur Balitskii",
  description: "Clients, services, licensing and commissions",
};

export default function ClientsPage() {
  return (
    <>
      <h1 className="pageTitle">Clients / Services</h1>
      <p className="pageSub">Services, licensing & commissions.</p>

      <div className="card" style={{ padding: 16, marginBottom: 14 }}>
        <h3 style={{ marginTop: 0 }}>Services</h3>
        <ul style={{ color: "#bdbdbd", lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
          <li>Editorial illustration</li>
          <li>Book / cover illustration</li>
          <li>Packaging & branding artwork</li>
          <li>Licensing</li>
          <li>Commissions</li>
        </ul>
      </div>

      <div className="card" style={{ padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Selected Clients</h3>
        <p style={{ color: "#bdbdbd", margin: 0 }}>
          Add your client list here (names or logos).
        </p>
      </div>
    </>
  );
}
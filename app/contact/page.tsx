"use client"
export default function ContactPage() {
  return (
    <>
      <h1 className="pageTitle">Contact</h1>
      <p className="pageSub">Контакты для заказов и лицензирования.</p>

      <div className="card" style={{ padding: 16 }}>
        <p><strong>Email:</strong> you@example.com</p>

        <hr style={{ borderColor: "rgba(255,255,255,0.12)" }} />


<form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Позже подключим отправку (например, Formspree).");
          }}
        >
          <label>
            <div style={{ color: "#bdbdbd", fontSize: 13, marginBottom: 6 }}>Message</div>
            <textarea
              required
              rows={6}
              style={{
                width: "100%",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "transparent",
                color: "white",
                padding: 10,
                resize: "vertical",
              }}
            />
          </label>
          <div style={{ marginTop: 12 }}>
            <button className="btn" type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}
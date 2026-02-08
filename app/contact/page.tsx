export const metadata = {
  title: "Contact — Arthur Balitskii",
  description: "Contact for commissions and licensing",
};

export default function ContactPage() {
  return (
    <>
      <h1 className="pageTitle">Contact</h1>
      <p className="pageSub">Commissions, licensing & collaborations</p>

      <div className="card" style={{ padding: 16 }}>
        <form action="https://formspree.io/f/xbdajvew" method="POST">
          <label>
            <div style={{ color: "#bdbdbd", fontSize: 13, marginBottom: 6 }}>
              Your email
            </div>
            <input
              name="email"
              type="email"
              required
              style={{
                width: "100%",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "transparent",
                color: "white",
                padding: 10,
                marginBottom: 12,
              }}
            />
          </label>

          <label>
            <div style={{ color: "#bdbdbd", fontSize: 13, marginBottom: 6 }}>
              Message
            </div>
            <textarea
              name="message"
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

          <input
            type="hidden"
            name="_subject"
            value="New message from arthur-balitskii.vercel.app"
          />

          <div style={{ marginTop: 12 }}>
            <button className="btn" type="submit">
              Send message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
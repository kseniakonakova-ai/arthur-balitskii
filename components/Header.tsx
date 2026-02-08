import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <Link href="/" className="brand" aria-label="Home">
          <strong>Arthur Balitskii</strong>
          <span>Illustration</span>
        </Link>

        <nav className="nav">
          <Link href="/galleries">Galleries</Link>
          <Link href="/clients">Clients</Link>
          <Link href="/about">Artist Bio</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
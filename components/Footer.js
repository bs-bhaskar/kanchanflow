
import Link from "next/link";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "mailto:hello@kanchanflow.com" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="KanchanFlow home">
              <span className="brand-mark">K</span>
              <span>
                Kanchan<span className="brand-accent">Flow</span>
              </span>
            </Link>

            <p>
              A connected workspace for manufacturing sales, quotations
              and operations. Built to keep your workflow moving forward.
            </p>

            <Link href="/features" className="footer-explore">
              Explore the platform <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="footer-column">
            <h2>Product</h2>
            <ul>
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h2>Company</h2>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("mailto:") ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} KanchanFlow. All rights reserved.</p>
          <Link href="/" aria-label="Back to homepage">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import Logo from "./Logo";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Logo />
          <nav className="site-header__nav">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="site-header__link"
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "site-header__link site-header__link--active" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link to="/contact" className="btn btn--primary site-header__cta">
            Start a project
          </Link>
          <button
            type="button"
            className="site-header__menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "close" : "menu"}
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav className="mobile-nav">
          <div className="mobile-nav__list">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="mobile-nav__link"
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "mobile-nav__link mobile-nav__link--active" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}

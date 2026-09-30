import { Link } from "@tanstack/react-router";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Logo />
          <p className="site-footer__blurb">
            A freelance web development studio building fast, full-stack sites,
            starters and apps for founders and small teams.
          </p>
        </div>

        <div>
          <span className="site-footer__heading">Studio</span>
          <Link to="/about" className="site-footer__link">
            About
          </Link>
          <Link to="/services" className="site-footer__link">
            Services
          </Link>
          <Link to="/work" className="site-footer__link">
            Work
          </Link>
        </div>

        <div>
          <span className="site-footer__heading">Resources</span>
          <Link to="/blog" className="site-footer__link">
            Blog
          </Link>
          <Link to="/contact" className="site-footer__link">
            Contact
          </Link>
          <Link to="/login" className="site-footer__link">
            Admin
          </Link>
        </div>

        <div>
          <span className="site-footer__heading">Get in touch</span>
          <a className="site-footer__link" href="mailto:hello@digitalwonderland.studio">
            hello@digitalwonderland.studio
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        © {new Date().getFullYear()} Digital Wonderland. All rights reserved.
      </div>
    </footer>
  );
}

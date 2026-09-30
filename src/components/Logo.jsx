import { Link } from "@tanstack/react-router";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo__mark" aria-hidden="true">
        <span className="logo__mark-letter">W</span>
      </span>
      <span className="logo__wordmark">
        Digital <span className="logo__wordmark-accent">Wonderland</span>
      </span>
    </Link>
  );
}

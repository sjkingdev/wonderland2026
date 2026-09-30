import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await login(email, password);
      navigate({ to: "/admin" });
    } catch {
      setError("Incorrect email or password.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">Admin</h1>
        <span className="login__subtitle">Digital Wonderland dashboard</span>

        {error && <p className="login__error">{error}</p>}

        <div className="login__field">
          <label className="login__label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="login__input"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login__field">
          <label className="login__label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="login__input"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn--primary login__submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Checking…" : "Log in"}
        </button>
      </form>
    </div>
  );
}

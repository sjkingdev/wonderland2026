import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendContactMessage } from "../api/contact";

const PROJECT_TYPES = [
  "Ecommerce store",
  "Blog / marketing site",
  "Web app",
  "Social platform clone",
  "Something else",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project_type: PROJECT_TYPES[0],
    message: "",
  });

  const mutation = useMutation({
    mutationFn: () => sendContactMessage(form),
    onSuccess: () => {
      setForm({ name: "", email: "", project_type: PROJECT_TYPES[0], message: "" });
    },
  });

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        mutation.mutate();
      }}
    >
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="contact-form__input"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="contact-form__input"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="project_type">
          Project type
        </label>
        <select
          id="project_type"
          className="contact-form__select"
          value={form.project_type}
          onChange={(e) => setForm((f) => ({ ...f, project_type: e.target.value }))}
        >
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">
          Tell us about the project
        </label>
        <textarea
          id="message"
          className="contact-form__textarea"
          required
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </div>

      <button className="btn btn--primary contact-form__submit" type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Sending…" : "Send message"}
      </button>

      {mutation.isSuccess && (
        <p className="contact-form__success">
          Thanks — we'll get back to you within a couple of days.
        </p>
      )}
      {mutation.isError && (
        <p className="contact-form__error">Something went wrong — please try again.</p>
      )}
    </form>
  );
}

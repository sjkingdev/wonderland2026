import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__eyebrow">Contact</span>
          <h1 className="page-hero__title">Tell us about the project.</h1>
          <p className="page-hero__subtitle">
            A few details now saves a round of back-and-forth later. We usually
            reply within a couple of business days.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

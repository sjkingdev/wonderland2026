import { Link } from "@tanstack/react-router";
import ServiceCard from "../components/ServiceCard";

const SERVICES = [
  {
    index: "01",
    title: "Ecommerce starters",
    description: "Full-stack storefronts, ready to reskin and connect to a payment provider.",
    items: ["Product catalog + cart", "Checkout flow", "Order & inventory basics"],
  },
  {
    index: "02",
    title: "Blog & marketing sites",
    description: "Fast, content-driven sites with a real admin editor behind them — like this one.",
    items: ["Post editor + drafts", "SEO-friendly pages", "Contact form + lead capture"],
  },
  {
    index: "03",
    title: "Social platform clones",
    description: "Twitter, Reddit, Instagram and Slack-style apps built on solid foundations.",
    items: ["Auth & user profiles", "Feeds, threads or channels", "Real-time where it matters"],
  },
  {
    index: "04",
    title: "Custom full-stack builds",
    description: "Something that doesn't fit a template? We'll build it from scratch.",
    items: ["React/Vite frontends", "Node or Python backends", "MySQL, hosted where you need it"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__eyebrow">Services</span>
          <h1 className="page-hero__title">What we build.</h1>
          <p className="page-hero__subtitle">
            Four kinds of projects we do most, though most engagements are some
            mix of these.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {SERVICES.map((service) => (
              <ServiceCard key={service.index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container container--narrow section-head--center">
          <h2>Not sure which fits?</h2>
          <p>Tell us what you're trying to build and we'll figure out the right shape for it.</p>
          <Link to="/contact" className="btn btn--primary">
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}

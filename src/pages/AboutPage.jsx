const VALUES = [
  {
    title: "Ship fast, ship solid",
    description:
      "We reach for proven, boring-in-a-good-way tooling — React, Vite, Node, MySQL — so projects launch quickly and don't fall over.",
  },
  {
    title: "White-label first",
    description:
      "Every starter we build is designed to be reskinned: swap the palette, the logo, the copy, and it's a different client's site.",
  },
  {
    title: "Full-stack, not just front-end",
    description:
      "Design, frontend, backend, database, auth — we build the whole thing, so there's one team to talk to, not three.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__eyebrow">About</span>
          <h1 className="page-hero__title">A small studio, built for speed.</h1>
          <p className="page-hero__subtitle">
            Digital Wonderland is a freelance web development studio. We build
            full-stack starter apps and custom sites for founders and small teams
            who need something real, fast.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <p>
            We started Digital Wonderland because most agency work is slower than
            it needs to be. Every project reinvents the same login form, the same
            post editor, the same contact page. So we built a library of
            white-label starters — ecommerce, blog, marketing, and social-platform
            clones — that we can reskin and ship in days, not months.
          </p>
          <p>
            The result is a studio that moves like a two-person team but delivers
            like a bigger one: real design decisions, a real backend, and a site
            that's actually yours to run once we hand it over.
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="hero__eyebrow">How we work</span>
            <h2>What we care about</h2>
          </div>
          <div className="grid grid--3">
            {VALUES.map((value) => (
              <div className="service-card" key={value.title}>
                <h3 className="service-card__title">{value.title}</h3>
                <p className="service-card__desc">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

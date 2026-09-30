import WorkCard from "../components/WorkCard";

const PROJECTS = [
  {
    tag: "Ecommerce starter",
    title: "Storefront kit",
    description: "A reskinnable full-stack ecommerce starter — catalog, cart, and checkout.",
  },
  {
    tag: "Blog & marketing",
    title: "Studio site kit",
    description: "This site's own template — a blog/marketing starter with an admin editor.",
  },
  {
    tag: "Social clone",
    title: "Thread feed kit",
    description: "A Twitter-style feed clone with auth, posts, and replies.",
  },
  {
    tag: "Social clone",
    title: "Forum kit",
    description: "A Reddit-style clone with communities, threads, and voting.",
  },
  {
    tag: "Social clone",
    title: "Photo feed kit",
    description: "An Instagram-style photo feed with galleries and captions.",
  },
  {
    tag: "Social clone",
    title: "Team chat kit",
    description: "A Slack-style clone with channels and real-time messaging.",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__eyebrow">Work</span>
          <h1 className="page-hero__title">A sample of the kits.</h1>
          <p className="page-hero__subtitle">
            Every project starts from one of these — then gets reskinned and
            extended for the client. Swap in real screenshots here as projects ship.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {PROJECTS.map((project) => (
              <WorkCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

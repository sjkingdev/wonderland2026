import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { listPosts } from "../api/posts";
import ServiceCard from "../components/ServiceCard";
import PostCard from "../components/PostCard";

const SERVICES_PREVIEW = [
  {
    index: "01",
    title: "White-label starters",
    description: "Ecommerce, blog and marketing starters, ready to reskin and ship.",
  },
  {
    index: "02",
    title: "Social clones",
    description: "Twitter, Reddit, Instagram and Slack clones built on solid full-stack foundations.",
  },
  {
    index: "03",
    title: "Custom full-stack builds",
    description: "React/Vite frontends, Node or Python backends, MySQL — built to your spec.",
  },
];

export default function HomePage() {
  const { data: posts } = useQuery({
    queryKey: ["posts", "latest"],
    queryFn: () => listPosts(),
  });

  const latestPosts = posts?.slice(0, 2) ?? [];

  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <span className="hero__eyebrow">Digital Wonderland</span>
          <h1 className="hero__title">Full-stack sites, built fast and built right.</h1>
          <p className="hero__subtitle">
            We design and build white-label starter apps and custom sites — ecommerce,
            marketing, blogs, and social platform clones — for founders and small
            teams who need to move quickly.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Start a project
            </Link>
            <Link to="/work" className="btn btn--ghost">
              See the work
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="hero__eyebrow">What we build</span>
            <h2>A few of the things we ship</h2>
          </div>
          <div className="grid grid--3">
            {SERVICES_PREVIEW.map((service) => (
              <ServiceCard key={service.index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section className="section">
          <div className="container container--narrow">
            <div className="section-head">
              <span className="hero__eyebrow">From the blog</span>
              <h2>Recent writing</h2>
            </div>
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

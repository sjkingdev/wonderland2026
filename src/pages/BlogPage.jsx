import { useQuery } from "@tanstack/react-query";
import { listPosts } from "../api/posts";
import PostCard from "../components/PostCard";

export default function BlogPage() {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts", "all"],
    queryFn: () => listPosts(),
  });

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="page-hero__eyebrow">Blog</span>
          <h1 className="page-hero__title">Notes from the studio.</h1>
          <p className="page-hero__subtitle">
            Build logs, launches, and the occasional opinion about full-stack tooling.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          {isLoading && <p>Loading posts…</p>}
          {isError && <p>Couldn't load posts — is the backend running?</p>}
          {posts?.length === 0 && <p>Nothing published yet — check back soon.</p>}
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

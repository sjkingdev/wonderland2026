import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/posts";

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export default function BlogPostPage({ slug }) {
  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPost(slug),
  });

  if (isLoading) {
    return (
      <div className="container container--narrow section">
        <p>Loading…</p>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="container container--narrow section">
        <p>This post doesn't exist or isn't published.</p>
      </div>
    );
  }

  return (
    <article className="section">
      <div className="container container--narrow post-page">
        <span className="post-page__meta">
          {formatDate(post.published_at)} — {post.author_name}
        </span>
        <h1 className="post-page__title">{post.title}</h1>

        {post.cover_image_url && (
          <img className="post-page__cover" src={post.cover_image_url} alt="" />
        )}

        <div className="post-page__body">
          {post.body.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

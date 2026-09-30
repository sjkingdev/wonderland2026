import { Link } from "@tanstack/react-router";

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <div className="post-card__frame">
        {post.cover_image_url && (
          <img className="post-card__thumb" src={post.cover_image_url} alt="" />
        )}
      </div>
      <div>
        <span className="post-card__meta">{formatDate(post.published_at)}</span>
        <h2 className="post-card__title">{post.title}</h2>
        {post.excerpt && <p className="post-card__excerpt">{post.excerpt}</p>}
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="post-card__readmore"
        >
          Read post →
        </Link>
      </div>
    </div>
  );
}

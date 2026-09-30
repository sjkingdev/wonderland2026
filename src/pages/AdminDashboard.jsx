import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { listAllPostsAdmin } from "../api/posts";

export default function AdminDashboard() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["admin-posts"],
    queryFn: listAllPostsAdmin,
  });

  return (
    <div className="container section">
      <div className="admin-dashboard__header">
        <h1>Posts</h1>
        <Link to="/admin/new" className="btn btn--primary">
          + New post
        </Link>
      </div>

      {isLoading && <p>Loading…</p>}

      {posts?.map((post) => (
        <div className="admin-row" key={post.id}>
          <span className="admin-row__title">{post.title}</span>
          <span
            className={`admin-row__status${
              post.is_published ? " admin-row__status--published" : ""
            }`}
          >
            {post.is_published ? "Published" : "Draft"}
          </span>
          <Link
            to="/admin/edit/$postId"
            params={{ postId: String(post.id) }}
            className="admin-row__edit"
          >
            Edit
          </Link>
        </div>
      ))}

      {posts?.length === 0 && <p>No posts yet — write your first one.</p>}
    </div>
  );
}

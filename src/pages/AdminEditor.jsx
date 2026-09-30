import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, updatePost, getPostForEditing, deletePost } from "../api/posts";

const emptyForm = {
  title: "",
  slug: "",
  excerpt: "",
  body: "",
  cover_image_url: "",
  is_published: false,
};

function slugifyClientSide(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminEditor({ postId }) {
  const isNew = postId === "new";
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState(emptyForm);

  const { data: existingPost } = useQuery({
    queryKey: ["admin-post", postId],
    queryFn: () => getPostForEditing(postId),
    enabled: !isNew,
  });

  useEffect(() => {
    if (existingPost) {
      setForm({
        title: existingPost.title,
        slug: existingPost.slug,
        excerpt: existingPost.excerpt || "",
        body: existingPost.body,
        cover_image_url: existingPost.cover_image_url || "",
        is_published: !!existingPost.is_published,
      });
    }
  }, [existingPost]);

  const saveMutation = useMutation({
    mutationFn: () => {
      const payload = {
        ...form,
        slug: form.slug || slugifyClientSide(form.title),
        excerpt: form.excerpt || null,
        cover_image_url: form.cover_image_url || null,
      };
      return isNew ? createPost(payload) : updatePost(existingPost.id, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      navigate({ to: "/admin" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deletePost(existingPost.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      navigate({ to: "/admin" });
    },
  });

  return (
    <div className="container section">
      <form
        className="editor"
        onSubmit={(e) => {
          e.preventDefault();
          saveMutation.mutate();
        }}
      >
        <h1>{isNew ? "New post" : "Edit post"}</h1>

        <div className="editor__field">
          <label className="editor__label" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            className="editor__input"
            required
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          />
        </div>

        <div className="editor__field">
          <label className="editor__label" htmlFor="slug">
            Slug (leave blank to auto-generate from title)
          </label>
          <input
            id="slug"
            className="editor__input"
            value={form.slug}
            placeholder={slugifyClientSide(form.title)}
            onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
          />
        </div>

        <div className="editor__field">
          <label className="editor__label" htmlFor="excerpt">
            Excerpt
          </label>
          <input
            id="excerpt"
            className="editor__input"
            value={form.excerpt}
            onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
          />
        </div>

        <div className="editor__field">
          <label className="editor__label" htmlFor="cover">
            Cover image URL
          </label>
          <input
            id="cover"
            className="editor__input"
            value={form.cover_image_url}
            onChange={(e) => setForm((f) => ({ ...f, cover_image_url: e.target.value }))}
          />
        </div>

        <div className="editor__field">
          <label className="editor__label" htmlFor="body">
            Body (paragraphs separated by a blank line)
          </label>
          <textarea
            id="body"
            className="editor__textarea"
            required
            value={form.body}
            onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
          />
        </div>

        <div className="editor__row">
          <label className="editor__checkbox-label">
            <input
              type="checkbox"
              checked={form.is_published}
              onChange={(e) => setForm((f) => ({ ...f, is_published: e.target.checked }))}
            />
            Published
          </label>
        </div>

        <div className="editor__actions">
          <button className="btn btn--primary" type="submit" disabled={saveMutation.isPending}>
            {saveMutation.isPending ? "Saving…" : "Save post"}
          </button>
          {!isNew && (
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                if (confirm("Delete this post? This can't be undone.")) {
                  deleteMutation.mutate();
                }
              }}
            >
              Delete
            </button>
          )}
        </div>

        {saveMutation.isError && (
          <p className="login__error">Couldn't save — check the slug isn't taken and try again.</p>
        )}
      </form>
    </div>
  );
}

import { api } from "./client";

export async function listPosts(q) {
  const { data } = await api.get("/posts", { params: q ? { q } : {} });
  return data;
}

export async function getPost(slug) {
  const { data } = await api.get(`/posts/${slug}`);
  return data;
}

export async function listAllPostsAdmin() {
  const { data } = await api.get("/posts/admin/all");
  return data;
}

export async function getPostForEditing(id) {
  const { data } = await api.get(`/posts/admin/${id}`);
  return data;
}

export async function createPost(payload) {
  const { data } = await api.post("/posts", payload);
  return data;
}

export async function updatePost(id, payload) {
  const { data } = await api.put(`/posts/${id}`, payload);
  return data;
}

export async function deletePost(id) {
  await api.delete(`/posts/${id}`);
}

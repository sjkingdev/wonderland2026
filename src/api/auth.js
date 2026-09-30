import { api, saveToken, clearToken } from "./client";

export async function login(email, password) {
  const { data } = await api.post("/auth/login", { email, password });
  saveToken(data.token);
  return data.admin;
}

export async function fetchMe() {
  const { data } = await api.get("/auth/me");
  return data;
}

export function logout() {
  clearToken();
}

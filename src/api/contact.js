import { api } from "./client";

export async function sendContactMessage(payload) {
  const { data } = await api.post("/contact", payload);
  return data;
}

import { api } from "./api";

export async function getStats() {
  const response = await api.get("/monitors/stats");

  return response.data;
}
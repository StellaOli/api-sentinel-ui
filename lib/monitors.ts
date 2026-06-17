import { api } from "./api";

export async function getMonitors() {
  const response = await api.get("/monitors");

  return response.data;
}
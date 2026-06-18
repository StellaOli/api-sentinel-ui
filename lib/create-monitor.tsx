import { api } from "./api";

interface CreateMonitorDto {
  name: string;
  url: string;
  interval: number;
  expectedStatus: number;
}

export async function createMonitor(
  data: CreateMonitorDto
) {
  const response = await api.post(
    "/monitors",
    data
  );

  return response.data;
}
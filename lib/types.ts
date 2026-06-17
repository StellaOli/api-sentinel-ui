export interface Monitor {
  id: string;
  name: string;
  url: string;
  interval: number;
  expectedStatus: number;
  currentStatus: boolean;
  lastCheckedAt?: string;
}

export interface LoginResponse {
  accessToken: string;
}

export interface Stats {
  totalMonitors: number;
  onlineMonitors: number;
  offlineMonitors: number;
  averageResponseTime: number;
}
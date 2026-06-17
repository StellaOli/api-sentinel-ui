"use client";

import { useEffect, useState } from "react";
import { getStats } from "@/lib/stats";
import { StatCard } from "@/components/dashboard/stat-card";
import { Monitor, Stats } from "@/lib/types";
import { getMonitors } from "@/lib/monitors";
import { MonitorCard } from "@/components/monitors/monitor-card";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>();  
  const [monitors, setMonitors] =
    useState<Monitor[]>([]);

    useEffect(() => {
    async function loadDashboard() {
        const monitorData = await getMonitors();
        const statsData = await getStats();

        setMonitors(monitorData);
        setStats(statsData);
    }

    loadDashboard();
    }, []);

  return (
    <DashboardLayout>
              <h1 className="text-3xl font-bold mb-8">
        API Sentinel
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

    <StatCard
        title="Total Monitors"
        value={stats?.totalMonitors ?? 0}
    />

    <StatCard
        title="Online"
        value={stats?.onlineMonitors ?? 0}
    />

    <StatCard
        title="Offline"
        value={stats?.offlineMonitors ?? 0}
    />

    <StatCard
        title="Avg Response"
        value={`${stats?.averageResponseTime ?? 0} ms`}
    />

    </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {monitors.map((monitor) => (
          <MonitorCard
            key={monitor.id}
            monitor={monitor}
          />
        ))}
      </div>
    
  

    </DashboardLayout>
     
);}
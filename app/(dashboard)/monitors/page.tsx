"use client";

import { useEffect, useState } from "react";

import { getMonitors } from "@/lib/monitors";
import { MonitorTable } from "@/components/monitors/monitor-table";
import { CreateMonitorDialog } from "@/components/monitors/create-monitor-dialog";

export default function MonitorsPage() {
  const [monitors, setMonitors] = useState([]);

  async function loadMonitors() {
    const data = await getMonitors();
    setMonitors(data);
  }

  useEffect(() => {
    loadMonitors();
  }, []);

  return (
    <>
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">Monitors</h1>

        <CreateMonitorDialog onCreated={loadMonitors} />
      </div>

      <MonitorTable monitors={monitors} />
    </>
  );
}
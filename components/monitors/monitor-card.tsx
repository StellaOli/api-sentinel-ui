import { Monitor } from "@/lib/types";

interface Props {
  monitor: Monitor;
}

export function MonitorCard({ monitor }: Props) {
  return (
    <div className="rounded-xl border p-5 shadow-sm">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold">
          {monitor.name}
        </h2>

        <span
          className={
            monitor.currentStatus
              ? "text-green-500"
              : "text-red-500"
          }
        >
          {monitor.currentStatus
            ? "Online"
            : "Offline"}
        </span>
      </div>

      <p className="text-sm text-gray-500">
        {monitor.url}
      </p>

      <p className="mt-3">
        Intervalo: {monitor.interval}s
      </p>
    </div>
  );
}
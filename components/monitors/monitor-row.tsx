import { Monitor } from "@/lib/types";
import { MonitorStatusBadge } from "./monitor-status-badge";
import { MonitorActions } from "./monitor-actions";

interface Props {
  monitor: Monitor;
}

export function MonitorRow({
  monitor,
}: Props) {
  return (
    <>
      <td>{monitor.name}</td>

      <td>
        <MonitorStatusBadge
          online={monitor.currentStatus}
        />
      </td>

      <td>{monitor.interval}s</td>

      <td>{monitor.url}</td>

      <td>
        <MonitorActions />
      </td>
    </>
  );
}
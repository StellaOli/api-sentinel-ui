import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Monitor } from "@/lib/types";

import { MonitorStatusBadge } from "./monitor-status-badge";
import { MonitorActions } from "./monitor-actions";

interface Props {
  monitors: Monitor[];
}

export function MonitorTable({
  monitors,
}: Props) {
  return (
    <Table>

      <TableHeader>

        <TableRow>

          <TableHead>Name</TableHead>

          <TableHead>Status</TableHead>

          <TableHead>Interval</TableHead>

          <TableHead>URL</TableHead>

          <TableHead></TableHead>

        </TableRow>

      </TableHeader>

      <TableBody>

        {monitors.map((monitor) => (

          <TableRow key={monitor.id}>

            <TableCell>
              {monitor.name}
            </TableCell>

            <TableCell>

              <MonitorStatusBadge
                online={monitor.currentStatus}
              />

            </TableCell>

            <TableCell>

              {monitor.interval}s

            </TableCell>

            <TableCell>

              {monitor.url}

            </TableCell>

            <TableCell>

              <MonitorActions />

            </TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>
  );
}
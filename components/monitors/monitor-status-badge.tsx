import { Badge } from "@/components/ui/badge";

interface Props {
  online: boolean;
}

export function MonitorStatusBadge({
  online,
}: Props) {
  return (
    <Badge
      variant={online ? "default" : "destructive"}
    >
      {online ? "Online" : "Offline"}
    </Badge>
  );
}
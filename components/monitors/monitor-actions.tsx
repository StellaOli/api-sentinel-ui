import { Button } from "@/components/ui/button";

export function MonitorActions() {
  return (
    <div className="flex gap-2">

      <Button
        size="sm"
        variant="outline"
      >
        View
      </Button>

      <Button
        size="sm"
        variant="destructive"
      >
        Delete
      </Button>

    </div>
  );
}
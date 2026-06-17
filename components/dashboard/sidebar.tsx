export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background p-6">
      <h1 className="text-2xl font-bold mb-8">
        API Sentinel
      </h1>

      <nav className="space-y-3">

        <div className="font-medium">
          Dashboard
        </div>

        <div className="text-muted-foreground">
          Monitors
        </div>

        <div className="text-muted-foreground">
          History
        </div>

        <div className="text-muted-foreground">
          Settings
        </div>

      </nav>
    </aside>
  );
}
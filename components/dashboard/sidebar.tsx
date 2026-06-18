import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 border-r p-6">

      <h1 className="text-2xl font-bold mb-8">
        API Sentinel
      </h1>

      <nav className="flex flex-col gap-4">

        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/monitors">
          Monitors
        </Link>

        <Link href="/history">
          History
        </Link>

        <Link href="/settings">
          Settings
        </Link>

      </nav>

    </aside>
  );
}
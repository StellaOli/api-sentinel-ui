import { ReactNode } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

interface Props {
  children: ReactNode;
}

export function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}
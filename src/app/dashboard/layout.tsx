// src/app/dashboard/layout.tsx
import { Sidebar } from "@/components/dashboard/Sideber";
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-0 lg:ml-72 w-full p-6">{children}</main>
    </div>
  );
}
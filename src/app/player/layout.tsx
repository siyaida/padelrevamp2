"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { PlayerSidebar } from "@/components/player/player-sidebar";

export default function PlayerLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* Desktop sidebar */}
      <aside className="hidden w-[280px] shrink-0 border-r border-white/5 lg:block">
        <div className="fixed h-screen w-[280px]">
          <PlayerSidebar />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {children}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, Bell, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/lib/auth-context";
import { useTranslation } from "@/lib/language-context";
import { LanguageToggle } from "@/components/language-toggle";
import { PlayerSidebar } from "./player-sidebar";

export function PlayerTopbar({ title }: { title: string }) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/5 bg-slate-950/80 px-4 backdrop-blur-xl md:px-6">
      <div className="flex items-center gap-3">
        {/* Mobile hamburger */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger
            render={<button className="flex size-9 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden" />}
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="left" showCloseButton={false} className="w-[280px] border-white/5 bg-slate-950 p-0">
            <PlayerSidebar onNavigate={() => setSheetOpen(false)} />
          </SheetContent>
        </Sheet>

        <h1 className="text-lg font-semibold text-white">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <LanguageToggle />

        {/* Notifications bell */}
        <button className="relative flex size-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white">
          <Bell className="size-4" />
          <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-green-500" />
        </button>

        {/* User avatar + logout */}
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-xs font-bold text-white">
            {user?.name?.split(" ").map(n => n[0]).join("") || "U"}
          </div>
          <span className="hidden text-sm font-medium text-white md:block">{user?.name}</span>
          <button
            onClick={handleLogout}
            title={t("player.logout")}
            className="ml-1 flex size-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            <LogOut className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

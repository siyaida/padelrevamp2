"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, History, Ticket, Crown, CalendarPlus, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/language-context";

const navItems = [
  { href: "/player/dashboard", icon: LayoutDashboard, key: "player.nav.dashboard" },
  { href: "/player/history", icon: History, key: "player.nav.history" },
  { href: "/player/vouchers", icon: Ticket, key: "player.nav.vouchers" },
  { href: "/player/membership", icon: Crown, key: "player.nav.membership" },
];

export function PlayerSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col bg-slate-950 p-4">
      {/* Logo */}
      <Link href="/" className="group mb-8 flex items-center gap-2.5 px-2">
        <div className="flex size-9 items-center justify-center rounded-lg bg-green-600 transition-transform group-hover:scale-105">
          <span className="text-sm font-black text-white">PS</span>
        </div>
        <span className="text-lg font-bold text-white">
          Padel <span className="text-green-400">Society</span>
        </span>
      </Link>

      {/* Nav items */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                active
                  ? "text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {active && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-green-600/15 border border-green-500/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon className="relative z-10 size-4" />
              <span className="relative z-10">{t(item.key)}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="space-y-1 border-t border-white/5 pt-4">
        <Link
          href="/reservations"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-green-400 transition-all hover:bg-green-600/10"
        >
          <CalendarPlus className="size-4" />
          {t("player.nav.bookCourt")}
        </Link>
        <Link
          href="/"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition-all hover:bg-white/5 hover:text-white"
        >
          <ArrowLeft className="size-4" />
          {t("player.nav.backToSite")}
        </Link>
      </div>
    </div>
  );
}

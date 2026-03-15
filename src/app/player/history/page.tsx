"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Trophy, XCircle, Clock, CheckCircle } from "lucide-react";
import { PlayerTopbar } from "@/components/player/player-topbar";
import { useTranslation } from "@/lib/language-context";
import { reservations } from "@/lib/player-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type FilterStatus = "all" | "upcoming" | "completed" | "cancelled";

const statusConfig = {
  upcoming: { color: "text-emerald-400 bg-emerald-500/15", icon: Clock },
  completed: { color: "text-green-400 bg-green-500/15", icon: CheckCircle },
  cancelled: { color: "text-slate-400 bg-slate-500/15", icon: XCircle },
};

export default function HistoryPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterStatus>("all");

  const filtered = filter === "all" ? reservations : reservations.filter((r) => r.status === filter);

  const totalMatches = reservations.filter((r) => r.status === "completed").length;
  const totalSpent = reservations.filter((r) => r.status !== "cancelled").reduce((s, r) => s + r.price, 0);
  const upcomingCount = reservations.filter((r) => r.status === "upcoming").length;

  const summaryStats = [
    { label: t("player.history.totalMatches"), value: totalMatches, icon: Trophy },
    { label: t("player.history.upcoming"), value: upcomingCount, icon: Calendar },
    { label: t("player.history.totalSpent"), value: `${totalSpent} TND`, icon: Calendar },
  ];

  const tabs: { key: FilterStatus; label: string }[] = [
    { key: "all", label: t("player.history.all") },
    { key: "upcoming", label: t("player.history.statusUpcoming") },
    { key: "completed", label: t("player.history.statusCompleted") },
    { key: "cancelled", label: t("player.history.statusCancelled") },
  ];

  return (
    <>
      <PlayerTopbar title={t("player.nav.history")} />

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
          {/* Stats summary */}
          <div className="mb-8 grid grid-cols-3 gap-4">
            {summaryStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i}
                  className="glass rounded-2xl p-5 text-center"
                >
                  <div className="mx-auto mb-2 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                    <Icon className="size-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Filter tabs */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3} className="mb-6">
            <div className="flex gap-2 rounded-xl bg-white/5 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    filter === tab.key
                      ? "bg-green-600 text-white shadow-lg shadow-green-600/25"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Desktop table */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4}>
            {/* Desktop */}
            <div className="hidden md:block">
              <div className="glass overflow-hidden rounded-2xl">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">{t("player.history.date")}</th>
                      <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">{t("player.history.time")}</th>
                      <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">{t("player.history.court")}</th>
                      <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">{t("player.history.opponent")}</th>
                      <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">{t("player.history.status")}</th>
                      <th className="px-5 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-400">{t("player.history.price")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filtered.map((res) => {
                      const cfg = statusConfig[res.status];
                      const Icon = cfg.icon;
                      return (
                        <tr key={res.id} className="transition-colors hover:bg-white/5">
                          <td className="px-5 py-4 text-sm text-white">{res.date}</td>
                          <td className="px-5 py-4 text-sm text-slate-300">{res.time}</td>
                          <td className="px-5 py-4 text-sm text-slate-300">{res.court}</td>
                          <td className="px-5 py-4 text-sm text-slate-300">{res.opponent}</td>
                          <td className="px-5 py-4">
                            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${cfg.color}`}>
                              <Icon className="size-3" />
                              {t(`player.history.status${res.status.charAt(0).toUpperCase() + res.status.slice(1)}`)}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-right text-sm text-white">{res.price} TND</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile cards */}
            <div className="space-y-3 md:hidden">
              {filtered.map((res, i) => {
                const cfg = statusConfig[res.status];
                const Icon = cfg.icon;
                return (
                  <motion.div
                    key={res.id}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={i}
                    className="glass rounded-xl p-4"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <p className="font-medium text-white">{res.court}</p>
                      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${cfg.color}`}>
                        <Icon className="size-3" />
                        {t(`player.history.status${res.status.charAt(0).toUpperCase() + res.status.slice(1)}`)}
                      </span>
                    </div>
                    <div className="space-y-1 text-sm text-slate-400">
                      <p>{res.date} &middot; {res.time}</p>
                      <p>{t("player.history.opponent")}: {res.opponent}</p>
                    </div>
                    <div className="mt-2 text-right text-sm font-medium text-green-400">{res.price} TND</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

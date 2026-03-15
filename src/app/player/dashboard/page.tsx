"use client";

import { motion } from "framer-motion";
import { Calendar, Ticket, Crown, TrendingUp, ArrowRight, Trophy, Star, Clock } from "lucide-react";
import Link from "next/link";
import { PlayerTopbar } from "@/components/player/player-topbar";
import { useTranslation } from "@/lib/language-context";
import { useAuth } from "@/lib/auth-context";
import { reservations, ticketBalance, activityFeed } from "@/lib/player-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const activityIcons: Record<string, React.ReactNode> = {
  calendar: <Calendar className="size-4" />,
  trophy: <Trophy className="size-4" />,
  ticket: <Ticket className="size-4" />,
  star: <Star className="size-4" />,
};

export default function DashboardPage() {
  const { t } = useTranslation();
  const { user } = useAuth();

  const upcomingReservations = reservations.filter((r) => r.status === "upcoming").slice(0, 3);

  const stats = [
    { icon: Calendar, label: t("player.dashboard.nextMatch"), value: "Mar 18", color: "from-green-500 to-emerald-600" },
    { icon: Ticket, label: t("player.dashboard.tickets"), value: `${ticketBalance.remaining}/${ticketBalance.total}`, color: "from-green-600 to-emerald-700" },
    { icon: Crown, label: t("player.dashboard.membership"), value: "Match", color: "from-emerald-500 to-green-700" },
    { icon: TrendingUp, label: t("player.dashboard.winRate"), value: "68%", color: "from-green-400 to-emerald-600" },
  ];

  return (
    <>
      <PlayerTopbar title={t("player.nav.dashboard")} />

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
          {/* Welcome hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-white">
              {t("player.dashboard.welcome")}, <span className="gradient-text">{user?.name?.split(" ")[0]}</span>
            </h1>
            <p className="mt-1 text-slate-400">{t("player.dashboard.welcomeSubtitle")}</p>
          </motion.div>

          {/* Stat cards */}
          <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={i + 1}
                  className="glass rounded-2xl p-5"
                >
                  <div className={`mb-3 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <Icon className="size-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Upcoming reservations */}
            <div className="lg:col-span-2">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={5}>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">{t("player.dashboard.upcomingReservations")}</h2>
                  <Link href="/player/history" className="flex items-center gap-1 text-sm text-green-400 hover:text-green-300">
                    {t("player.dashboard.viewAll")} <ArrowRight className="size-3" />
                  </Link>
                </div>

                <div className="space-y-3">
                  {upcomingReservations.map((res, i) => (
                    <motion.div
                      key={res.id}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                      custom={6 + i}
                      className="glass flex items-center justify-between rounded-xl p-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-green-600/15 text-green-400">
                          <Calendar className="size-5" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{res.court}</p>
                          <p className="text-sm text-slate-400">
                            {res.date} &middot; {res.time}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-white">{t("player.dashboard.vs")} {res.opponent}</p>
                        <p className="text-xs text-green-400">{res.price} TND</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick actions */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={9}
                className="mt-6 flex flex-wrap gap-3"
              >
                <Link href="/reservations">
                  <button className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-all hover:bg-green-500 hover:-translate-y-0.5">
                    <Calendar className="size-4" />
                    {t("player.dashboard.bookCourt")}
                  </button>
                </Link>
                <Link href="/player/vouchers">
                  <button className="glass flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10">
                    <Ticket className="size-4" />
                    {t("player.dashboard.myVouchers")}
                  </button>
                </Link>
                <Link href="/player/membership">
                  <button className="glass flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10">
                    <Crown className="size-4" />
                    {t("player.dashboard.upgradePlan")}
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Activity feed */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={5}>
              <h2 className="mb-4 text-lg font-semibold text-white">{t("player.dashboard.recentActivity")}</h2>
              <div className="glass rounded-2xl p-4">
                <div className="space-y-4">
                  {activityFeed.map((item, i) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative flex flex-col items-center">
                        <div className="flex size-8 items-center justify-center rounded-full bg-white/10 text-green-400">
                          {activityIcons[item.icon] || <Clock className="size-4" />}
                        </div>
                        {i < activityFeed.length - 1 && (
                          <div className="mt-1 flex-1 border-l border-white/10" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="text-sm font-medium text-white">{t(`player.activity.${item.title}`)}</p>
                        <p className="text-xs text-slate-400">{t(`player.activity.${item.description}`)}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

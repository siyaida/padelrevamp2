"use client";

import { motion } from "framer-motion";
import { Crown, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlayerTopbar } from "@/components/player/player-topbar";
import { useTranslation } from "@/lib/language-context";
import { membershipPlans, billingHistory, ticketBalance } from "@/lib/player-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function MembershipPage() {
  const { t } = useTranslation();

  const currentPlan = membershipPlans.find((p) => p.current);
  const usagePercent = Math.round((ticketBalance.used / ticketBalance.total) * 100);

  return (
    <>
      <PlayerTopbar title={t("player.nav.membership")} />

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
          {/* Current plan card */}
          {currentPlan && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="relative mb-8 overflow-hidden rounded-2xl border border-green-500/30 bg-green-500/5 p-6"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-green-500/10 blur-3xl" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                    <Crown className="size-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-green-400">{t("player.membership.currentPlan")}</p>
                    <h2 className="text-2xl font-bold text-white">{currentPlan.name}</h2>
                  </div>
                </div>

                <div className="mb-4 grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-sm text-slate-400">{t("player.membership.price")}</p>
                    <p className="text-xl font-bold text-white">{currentPlan.price} <span className="text-sm font-normal text-slate-400">DT/{t("player.membership.year")}</span></p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{t("player.membership.ticketsIncluded")}</p>
                    <p className="text-xl font-bold text-white">{currentPlan.tickets}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{t("player.membership.renewalDate")}</p>
                    <p className="text-xl font-bold text-white">2027-03-01</p>
                  </div>
                </div>

                {/* Usage progress bar */}
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-slate-400">{t("player.membership.ticketUsage")}</span>
                    <span className="text-white">{ticketBalance.used}/{ticketBalance.total}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                      style={{ width: `${usagePercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* All plans */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            <h2 className="mb-4 text-lg font-semibold text-white">{t("player.membership.availablePlans")}</h2>
          </motion.div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {membershipPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={i + 2}
                className={`relative rounded-2xl p-5 transition-all ${
                  plan.current
                    ? "border-2 border-green-500/50 bg-green-500/10"
                    : "glass hover:bg-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-2.5 right-4 rounded-full bg-green-600 px-3 py-0.5 text-xs font-medium text-white shadow-lg shadow-green-600/25">
                    {t("player.membership.popular")}
                  </span>
                )}

                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <p className="mt-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-slate-400"> DT/{t("player.membership.year")}</span>
                </p>

                {plan.tickets > 0 && (
                  <p className="mt-1 text-sm text-green-400">
                    {plan.tickets} {t("player.membership.ticketsLabel")}
                  </p>
                )}

                <ul className="mt-4 space-y-2">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="mt-0.5 size-4 shrink-0 text-green-400" />
                      {t(`player.membership.features.${feat}`)}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`mt-5 w-full text-sm font-semibold ${
                    plan.current
                      ? "bg-white/10 text-white hover:bg-white/15"
                      : "bg-green-600 text-white shadow-lg shadow-green-600/25 hover:bg-green-500"
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? t("player.membership.currentLabel") : t("player.membership.upgrade")}
                  {!plan.current && <ArrowRight className="ml-1 size-4" />}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Billing history */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={6}>
            <h2 className="mb-4 text-lg font-semibold text-white">{t("player.membership.billingHistory")}</h2>
            <div className="glass overflow-hidden rounded-2xl">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">{t("player.membership.billingDate")}</th>
                    <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-400">{t("player.membership.billingDesc")}</th>
                    <th className="px-5 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-400">{t("player.membership.billingAmount")}</th>
                    <th className="px-5 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-400">{t("player.membership.billingStatus")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {billingHistory.map((record) => (
                    <tr key={record.id} className="transition-colors hover:bg-white/5">
                      <td className="px-5 py-4 text-sm text-white">{record.date}</td>
                      <td className="px-5 py-4 text-sm text-slate-300">{t(`player.membership.billing.${record.description}`)}</td>
                      <td className="px-5 py-4 text-right text-sm text-white">{record.amount} TND</td>
                      <td className="px-5 py-4 text-right">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          record.status === "paid" ? "bg-green-500/15 text-green-400" : "bg-amber-500/15 text-amber-400"
                        }`}>
                          {t(`player.membership.billing.${record.status}`)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

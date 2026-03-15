"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Ticket, Copy, Check, Gift } from "lucide-react";
import { PlayerTopbar } from "@/components/player/player-topbar";
import { useTranslation } from "@/lib/language-context";
import { vouchers, ticketBalance } from "@/lib/player-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function VouchersPage() {
  const { t } = useTranslation();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const usedPercent = Math.round((ticketBalance.used / ticketBalance.total) * 100);
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (usedPercent / 100) * circumference;

  return (
    <>
      <PlayerTopbar title={t("player.nav.vouchers")} />

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
          {/* Ticket balance hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="glass mb-8 flex flex-col items-center gap-6 rounded-2xl p-8 sm:flex-row"
          >
            {/* Progress ring */}
            <div className="relative flex size-32 items-center justify-center">
              <svg className="size-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="54"
                  fill="none"
                  stroke="url(#green-gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="green-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute text-center">
                <p className="text-3xl font-bold text-white">{ticketBalance.remaining}</p>
                <p className="text-xs text-slate-400">{t("player.vouchers.remaining")}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">{t("player.vouchers.ticketBalance")}</h2>
              <p className="mt-1 text-slate-400">
                {ticketBalance.used} {t("player.vouchers.used")} / {ticketBalance.total} {t("player.vouchers.total")}
              </p>
              <div className="mt-3 h-2 w-48 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                  style={{ width: `${usedPercent}%` }}
                />
              </div>
            </div>
          </motion.div>

          {/* Voucher cards */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            <h2 className="mb-4 text-lg font-semibold text-white">{t("player.vouchers.myVouchers")}</h2>
          </motion.div>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            {vouchers.map((voucher, i) => (
              <motion.div
                key={voucher.id}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                custom={i + 2}
                className={`rounded-2xl border-2 border-dashed p-5 transition-all ${
                  voucher.used
                    ? "border-white/5 bg-white/[0.03] opacity-60"
                    : "border-green-500/30 bg-green-500/5 hover:border-green-500/50"
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gift className="size-5 text-green-400" />
                    <span className="text-lg font-bold text-green-400">{voucher.discount}</span>
                  </div>
                  {voucher.used && (
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-400">
                      {t("player.vouchers.usedLabel")}
                    </span>
                  )}
                </div>

                <p className="mb-1 text-sm text-slate-300">{t(`player.vouchers.descriptions.${voucher.description}`)}</p>
                <p className="mb-3 text-xs text-slate-500">
                  {t("player.vouchers.expires")}: {voucher.expiresAt}
                </p>

                <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
                  <code className="text-sm font-mono text-white">{voucher.code}</code>
                  {!voucher.used && (
                    <button
                      onClick={() => copyCode(voucher.id, voucher.code)}
                      className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300"
                    >
                      {copiedId === voucher.id ? (
                        <><Check className="size-3" /> {t("player.vouchers.copied")}</>
                      ) : (
                        <><Copy className="size-3" /> {t("player.vouchers.copy")}</>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ticket usage history */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={6}>
            <h2 className="mb-4 text-lg font-semibold text-white">{t("player.vouchers.usageHistory")}</h2>
            <div className="glass rounded-2xl divide-y divide-white/5">
              {[
                { date: "2026-03-10", court: "Center Court", tickets: 1 },
                { date: "2026-03-08", court: "Indoor Court 1", tickets: 1 },
                { date: "2026-03-05", court: "Outdoor Court 3", tickets: 1 },
                { date: "2026-03-01", court: "Center Court", tickets: 1 },
                { date: "2026-02-25", court: "Outdoor Court 2", tickets: 1 },
                { date: "2026-02-20", court: "Center Court", tickets: 1 },
              ].map((usage, i) => (
                <div key={i} className="flex items-center justify-between px-5 py-3">
                  <div className="flex items-center gap-3">
                    <Ticket className="size-4 text-slate-400" />
                    <div>
                      <p className="text-sm text-white">{usage.court}</p>
                      <p className="text-xs text-slate-500">{usage.date}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-red-400">-{usage.tickets}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

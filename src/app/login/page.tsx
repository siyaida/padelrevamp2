"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import { useTranslation } from "@/lib/language-context";
import { LanguageToggle } from "@/components/language-toggle";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function LoginPage() {
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  if (isAuthenticated) {
    router.push("/player/dashboard");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    // Simulate brief loading
    await new Promise((r) => setTimeout(r, 500));

    const success = login(email, password);
    if (success) {
      router.push("/player/dashboard");
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel — branding */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-slate-950 p-12 lg:flex">
        {/* Decorative gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-green-600/20 blur-[120px]" />
          <div className="absolute -bottom-20 right-0 h-[400px] w-[400px] rounded-full bg-emerald-500/15 blur-[100px]" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-[80px]" />
        </div>

        <div className="relative z-10">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex size-10 items-center justify-center rounded-xl bg-green-600 transition-transform group-hover:scale-105">
              <span className="text-lg font-black text-white">PS</span>
            </div>
            <span className="text-xl font-bold text-white">
              Padel <span className="text-green-400">Society</span>
            </span>
          </Link>
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
            {t("login.welcomeBack")}
            <br />
            <span className="gradient-text">{t("login.yourCourt")}</span>
          </h1>
          <p className="mt-4 max-w-md text-lg text-slate-400">
            {t("login.brandSubtitle")}
          </p>
        </motion.div>

        <div className="relative z-10 text-sm text-slate-500">
          &copy; 2026 Padel Society
        </div>
      </div>

      {/* Right panel — login form */}
      <div className="flex w-full flex-col items-center justify-center bg-slate-950 px-6 py-12 lg:w-1/2 lg:bg-slate-900/50">
        {/* Language toggle top-right */}
        <div className="absolute right-6 top-6">
          <LanguageToggle />
        </div>

        {/* Mobile logo */}
        <div className="mb-8 lg:hidden">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex size-10 items-center justify-center rounded-xl bg-green-600">
              <span className="text-lg font-black text-white">PS</span>
            </div>
            <span className="text-xl font-bold text-white">
              Padel <span className="text-green-400">Society</span>
            </span>
          </Link>
        </div>

        <motion.div
          className="w-full max-w-md"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-3xl font-bold text-white">{t("login.signIn")}</h2>
          <p className="mt-2 text-slate-400">{t("login.signInSubtitle")}</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <motion.div variants={fadeUp} custom={1}>
              <Label htmlFor="email" className="text-sm text-slate-300">
                {t("login.email")}
              </Label>
              <div className="relative mt-1.5">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("login.emailPlaceholder")}
                  className="border-white/10 bg-white/5 pl-10 text-white placeholder:text-slate-500 focus:border-green-500 focus:ring-green-500/20"
                  required
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={2}>
              <Label htmlFor="password" className="text-sm text-slate-300">
                {t("login.password")}
              </Label>
              <div className="relative mt-1.5">
                <Lock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="border-white/10 bg-white/5 pl-10 pr-10 text-white placeholder:text-slate-500 focus:border-green-500 focus:ring-green-500/20"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </motion.div>

            {/* Error message with shake */}
            {error && (
              <motion.div
                initial={{ x: -10 }}
                animate={{ x: [0, -8, 8, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
                className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400"
              >
                {t("login.invalidCredentials")}
              </motion.div>
            )}

            <motion.div variants={fadeUp} custom={3}>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 py-3 text-base font-semibold text-white shadow-lg shadow-green-600/25 transition-all hover:bg-green-500 hover:shadow-green-600/40 disabled:opacity-50"
              >
                {loading ? (
                  <div className="size-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                ) : (
                  <>
                    {t("login.signInButton")}
                    <ArrowRight className="ml-2 size-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </form>

          {/* Demo hint */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-8 rounded-xl border border-white/5 bg-white/5 p-4"
          >
            <p className="text-xs font-medium text-slate-400">{t("login.demoHint")}</p>
            <div className="mt-2 space-y-1 font-mono text-xs text-green-400">
              <p>Email: player@padel.tn</p>
              <p>Password: padel2024</p>
            </div>
          </motion.div>

          <p className="mt-6 text-center text-sm text-slate-500">
            <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
              {t("login.backToSite")}
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

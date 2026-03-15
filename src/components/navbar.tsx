"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/language-context";
import { LanguageToggle } from "@/components/language-toggle";
import { useAuth } from "@/lib/auth-context";
import { User } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/facilities", label: t("nav.facilities") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/reservations", label: t("nav.reservations") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/audit", label: t("nav.audit") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="flex size-10 items-center justify-center rounded-xl bg-green-600 transition-transform group-hover:scale-105">
            <span className="text-lg font-black text-white">PS</span>
          </div>
          <span className="text-xl font-bold text-white">
            Padel <span className="text-green-400">Society</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                pathname === link.href
                  ? "text-green-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-green-400"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          {isAuthenticated && (
            <Link href="/player/dashboard" className="hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-green-400 transition-all hover:bg-green-600/10 sm:flex">
              <User className="size-4" />
              {t("nav.mySpace")}
            </Link>
          )}
          <Link href="/reservations" className="hidden sm:block">
            <Button className="bg-green-600 px-6 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-all hover:bg-green-500 hover:shadow-green-600/40 hover:-translate-y-0.5">
              {t("nav.bookNow")}
            </Button>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex size-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto max-w-7xl px-6 py-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-all ${
                        pathname === link.href
                          ? "bg-green-600/10 text-green-400"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                {isAuthenticated && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                  >
                    <Link
                      href="/player/dashboard"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-green-400 transition-all hover:bg-green-600/10"
                    >
                      <User className="size-4" />
                      {t("nav.mySpace")}
                    </Link>
                  </motion.div>
                )}
                <div className="flex justify-center py-2">
                  <LanguageToggle />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link href="/reservations" onClick={() => setOpen(false)}>
                    <Button className="mt-4 w-full bg-green-600 py-3 text-base font-semibold text-white shadow-lg shadow-green-600/25 hover:bg-green-500">
                      {t("nav.bookNow")}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

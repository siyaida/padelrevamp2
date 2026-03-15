"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { useTranslation } from "@/lib/language-context";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { href: "/about", label: t("footer.aboutUs") },
    { href: "/facilities", label: t("nav.facilities") },
    { href: "/pricing", label: t("footer.membership") },
    { href: "/reservations", label: t("footer.bookACourt") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/audit", label: t("footer.siteAudit") },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950">
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.04),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/5 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-green-600 transition-transform group-hover:scale-105">
                <span className="text-lg font-black text-white">PS</span>
              </div>
              <span className="text-xl font-bold text-white">
                Padel <span className="text-green-400">Society</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {t("footer.description")}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition-all hover:bg-green-600/20 hover:text-green-400 hover:-translate-y-0.5"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t("footer.openingHours")}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex justify-between">
                <span>{t("footer.mondayFriday")}</span>
                <span className="text-slate-300">06:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("footer.saturday")}</span>
                <span className="text-slate-300">07:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("footer.sunday")}</span>
                <span className="text-slate-300">08:00 - 21:00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {t("footer.contactTitle")}
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Phone className="size-3.5 text-green-500" />
                </div>
                <a
                  href="tel:+21623456789"
                  className="text-slate-400 transition-colors hover:text-green-400"
                >
                  +216 23 456 789
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <Mail className="size-3.5 text-green-500" />
                </div>
                <a
                  href="mailto:nextconsulttn@gmail.com"
                  className="text-slate-400 transition-colors hover:text-green-400"
                >
                  nextconsulttn@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                  <MapPin className="size-3.5 text-green-500" />
                </div>
                <span className="text-slate-400">
                  Nouveau Club, 7 Rue du Royaume d&apos;Arabie Saoudite, Tunis
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-slate-600 sm:flex-row">
          <span>{t("footer.copyright")}</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-slate-400">
              {t("footer.privacyPolicy")}
            </a>
            <a href="#" className="transition-colors hover:text-slate-400">
              {t("footer.termsOfService")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

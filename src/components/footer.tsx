import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/facilities", label: "Facilities" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Branding */}
          <div>
            <span className="text-xl font-bold text-white">
              Padel <span className="text-green-500">Society</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed">
              Tunisia&apos;s premier padel club dedicated to growing the sport
              and building a vibrant community of players.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-green-500" />
                <a href="tel:+21623456789" className="hover:text-green-400">
                  +216 23 456 789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-green-500" />
                <a
                  href="mailto:nextconsulttn@gmail.com"
                  className="hover:text-green-400"
                >
                  nextconsulttn@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-green-500" />
                <span>
                  Nouveau Club, 7 Rue du Royaume d&apos;Arabie Saoudite, Tunis,
                  Tunisie
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          &copy; 2026 Padel Society. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

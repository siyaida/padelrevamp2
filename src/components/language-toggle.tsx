"use client";

import { useTranslation, type Language } from "@/lib/language-context";
import { motion } from "framer-motion";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="relative flex items-center rounded-full bg-white/10 p-0.5">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`relative z-10 rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-200 ${
            language === lang.code ? "text-white" : "text-slate-400 hover:text-slate-200"
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {language === lang.code && (
            <motion.div
              layoutId="lang-indicator"
              className="absolute inset-0 rounded-full bg-green-600"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}

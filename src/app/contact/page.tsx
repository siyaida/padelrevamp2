"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useTranslation } from "@/lib/language-context";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone"),
      value: "+216 23 456 789",
      href: "tel:+21623456789",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      value: "nextconsulttn@gmail.com",
      href: "mailto:nextconsulttn@gmail.com",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      value:
        "Nouveau Club, 7 Rue du Royaume d'Arabie Saoudite, Tunis, Tunisie",
      href: null,
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = t("contact.errors.nameRequired");
    if (!formData.email.trim()) {
      errs.email = t("contact.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t("contact.errors.emailInvalid");
    }
    if (formData.phone && !/^[+\d\s()-]{7,}$/.test(formData.phone)) {
      errs.phone = t("contact.errors.phoneInvalid");
    }
    if (!formData.message.trim()) errs.message = t("contact.errors.messageRequired");
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Radial gradient overlays */}
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/8 blur-[100px]" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/5 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-400"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            >
              {t("contact.title")}{" "}
              <span className="gradient-text">{t("contact.titleAccent")}</span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
            >
              {t("contact.subtitle")}
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* Contact Info Cards */}
      <section className="relative bg-slate-950 py-24 lg:py-32">
        <div className="mesh-gradient absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20 grid gap-6 sm:grid-cols-3"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={info.title} custom={index} variants={fadeUp}>
                <Card className="glass group h-full border-0 transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-green-500/5">
                  <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                    <div
                      className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${info.gradient} shadow-lg shadow-green-500/20`}
                    >
                      <info.icon className="size-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-base text-slate-400 transition-colors duration-300 hover:text-green-400"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base leading-relaxed text-slate-400">
                        {info.value}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Form + Map Grid */}
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                custom={0}
                variants={fadeUp}
                className="text-3xl font-bold text-white"
              >
                {t("contact.sendMessage")}
              </motion.h2>
              <motion.p
                custom={1}
                variants={fadeUp}
                className="mt-3 text-base leading-relaxed text-slate-400"
              >
                {t("contact.formSubtitle")}
              </motion.p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                  className="glass mt-10 flex flex-col items-center gap-5 rounded-2xl p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30"
                  >
                    <CheckCircle className="size-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white">
                    {t("contact.messageSent")}
                  </h3>
                  <p className="max-w-sm text-base text-slate-400">
                    {t("contact.thankYou")}
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                      });
                    }}
                    className="mt-3 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30"
                  >
                    {t("contact.sendAnother")}
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  custom={2}
                  variants={fadeUp}
                  onSubmit={handleSubmit}
                  className="mt-10 space-y-6"
                >
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-300"
                    >
                      {t("contact.nameLabel")}
                    </Label>
                    <Input
                      id="name"
                      placeholder={t("contact.namePlaceholder")}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      aria-invalid={!!errors.name}
                      className={`mt-2 h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-green-500 focus:ring-green-500/20 ${
                        errors.name
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-300"
                    >
                      {t("contact.emailLabel")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("contact.emailPlaceholder")}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      aria-invalid={!!errors.email}
                      className={`mt-2 h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-green-500 focus:ring-green-500/20 ${
                        errors.email
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-slate-300"
                    >
                      {t("contact.phoneLabel")}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t("contact.phonePlaceholder")}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      aria-invalid={!!errors.phone}
                      className={`mt-2 h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-green-500 focus:ring-green-500/20 ${
                        errors.phone
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-sm text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-slate-300"
                    >
                      {t("contact.messageLabel")}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.messagePlaceholder")}
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      aria-invalid={!!errors.message}
                      className={`mt-2 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-green-500 focus:ring-green-500/20 ${
                        errors.message
                          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                          : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 sm:w-auto sm:min-w-[200px]"
                  >
                    <Send className="mr-2 size-4" />
                    {t("contact.sendButton")}
                  </Button>
                </motion.form>
              )}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                custom={0}
                variants={fadeUp}
                className="text-3xl font-bold text-white"
              >
                {t("contact.ourLocation")}
              </motion.h2>
              <motion.p
                custom={1}
                variants={fadeUp}
                className="mt-3 text-base leading-relaxed text-slate-400"
              >
                Nouveau Club, 7 Rue du Royaume d&apos;Arabie Saoudite, Tunis,
                Tunisie
              </motion.p>
              <motion.div
                custom={2}
                variants={fadeUp}
                className="relative mt-10 flex h-80 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl ring-1 ring-white/10 lg:h-[420px]"
              >
                {/* Decorative gradient orbs inside map */}
                <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-green-500/10 blur-[60px]" />
                <div className="absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-emerald-500/8 blur-[50px]" />

                <div className="relative text-center">
                  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 ring-1 ring-white/10">
                    <MapPin className="size-7 text-green-400" />
                  </div>
                  <p className="text-sm font-medium text-slate-400">
                    {t("contact.mapComingSoon")}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

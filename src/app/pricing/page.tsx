"use client";

import Link from "next/link";
import { Check, Dumbbell, Users, Video } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PricingFAQ from "./faq";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const plans = [
  {
    name: "Starter",
    subtitle: "cours",
    price: 120,
    period: "year",
    tickets: 10,
    popular: false,
    features: [
      "Access to all courts",
      "Online booking",
      "Community access",
    ],
  },
  {
    name: "Match",
    subtitle: "match",
    price: 230,
    period: "year",
    tickets: 10,
    popular: true,
    features: [
      "All Starter features",
      "Priority booking",
      "Match organization",
      "Performance tracking",
    ],
  },
  {
    name: "Padel 10",
    subtitle: "padel",
    price: 250,
    period: "year",
    tickets: 10,
    popular: false,
    features: [
      "All Match features",
      "10 padel sessions included",
      "Equipment discount",
    ],
  },
  {
    name: "Mixed",
    subtitle: "mixed",
    price: 300,
    period: "year",
    tickets: 20,
    popular: false,
    features: [
      "All Padel 10 features",
      "Group training sessions",
      "Tournament entry",
      "Video analysis session",
    ],
  },
];

const services = [
  {
    icon: Dumbbell,
    name: "Private Coaching",
    description: "One-on-one sessions with professional coaches",
    price: "From 60 TND/hour",
  },
  {
    icon: Users,
    name: "Group Training",
    description: "Join group sessions for all skill levels",
    price: "From 30 TND/session",
  },
  {
    icon: Video,
    name: "Video Analysis",
    description: "Professional game analysis and feedback",
    price: "80 TND/session",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32 text-white">
        {/* Radial gradient overlays */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-emerald-500/8 blur-[100px]" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/5 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <Badge className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400">
              Flexible Plans
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            Membership &amp;{" "}
            <span className="gradient-text">Pricing</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            Choose the perfect membership plan for your padel journey.
            Every plan includes court access and our seamless booking system.
          </motion.p>
        </div>
      </section>

      {/* Plans */}
      <section className="mesh-gradient py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Find Your Perfect Plan
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              From casual players to dedicated athletes, we have a membership tier for every level.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className={plan.popular ? "lg:scale-105 z-10" : ""}
              >
                <Card
                  className={`relative flex h-full flex-col border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl ${
                    plan.popular
                      ? "ring-2 ring-green-500 bg-gradient-to-b from-green-50/80 via-white to-emerald-50/50"
                      : "bg-white"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge className="rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 px-4 py-1 text-xs font-bold text-slate-900 shadow-md shadow-amber-500/20">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4 pt-8 text-center">
                    <CardTitle className="text-lg font-semibold uppercase tracking-wide text-slate-500">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-5 flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-extrabold tracking-tight text-slate-900">
                        {plan.price}
                      </span>
                      <span className="text-base font-medium text-slate-400">
                        DT
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-400">
                      per {plan.period}
                    </p>
                    <p className="mt-3 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                      {plan.tickets} tickets included
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1 px-6">
                    <div className="mb-6 h-px bg-slate-100" />
                    <ul className="space-y-3.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-slate-600"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100">
                            <Check className="h-3 w-3 text-green-600" strokeWidth={3} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="px-6 pb-8 pt-4">
                    <Link
                      href="/register"
                      className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all duration-200 ${
                        plan.popular
                          ? "bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/25 hover:shadow-green-600/40"
                          : "bg-slate-800 hover:bg-slate-700"
                      }`}
                    >
                      Get Started
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-green-500/8 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-emerald-500/6 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <motion.div
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Additional{" "}
              <span className="gradient-text">Services</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Enhance your game with our professional services
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <Card className="glass group h-full border-0 text-center transition-all duration-300 hover:bg-white/12">
                    <CardContent className="flex flex-col items-center gap-5 px-6 pt-8 pb-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/20 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {service.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-400">
                        {service.description}
                      </p>
                      <p className="text-lg font-bold gradient-text">
                        {service.price}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div
            className="mb-14 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Everything you need to know about our memberships
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <PricingFAQ />
          </motion.div>
        </div>
      </section>
    </>
  );
}

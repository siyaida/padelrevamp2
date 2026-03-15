"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Lock,
  Wifi,
  Video,
  ShoppingBag,
  Coffee,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/language-context";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function FacilitiesPage() {
  const { t } = useTranslation();

  const courts = [
    {
      name: t("facilities.courts.centerCourt.name"),
      type: t("facilities.courts.centerCourt.type"),
      description: t("facilities.courts.centerCourt.description"),
      image:
        "https://plus.unsplash.com/premium_photo-1708692919464-b5608dd10542",
    },
    {
      name: t("facilities.courts.indoorCourts.name"),
      type: t("facilities.courts.indoorCourts.type"),
      description: t("facilities.courts.indoorCourts.description"),
      image:
        "https://images.unsplash.com/photo-1572854252129-a18ce4979ff4",
    },
    {
      name: t("facilities.courts.outdoorCourts.name"),
      type: t("facilities.courts.outdoorCourts.type"),
      description: t("facilities.courts.outdoorCourts.description"),
      image:
        "https://plus.unsplash.com/premium_photo-1708692919998-e3dc853ef8a8",
    },
  ];

  const amenities = [
    {
      icon: Home,
      name: t("facilities.amenities.clubhouse.name"),
      description: t("facilities.amenities.clubhouse.description"),
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Lock,
      name: t("facilities.amenities.lockerRooms.name"),
      description: t("facilities.amenities.lockerRooms.description"),
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Wifi,
      name: t("facilities.amenities.wifi.name"),
      description: t("facilities.amenities.wifi.description"),
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Video,
      name: t("facilities.amenities.videoAnalysis.name"),
      description: t("facilities.amenities.videoAnalysis.description"),
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: ShoppingBag,
      name: t("facilities.amenities.proShop.name"),
      description: t("facilities.amenities.proShop.description"),
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Coffee,
      name: t("facilities.amenities.cafe.name"),
      description: t("facilities.amenities.cafe.description"),
      color: "from-teal-500 to-cyan-600",
    },
  ];

  const equipment = [
    {
      item: t("facilities.equipment.racket.name"),
      price: t("facilities.equipment.racket.price"),
      image:
        "https://cdn.prod.website-files.com/633ef203ebdc24568b41624b/6656de4b39c52b0793bc7ac2__MS_3641-Edit-6522x4416-fae5400.jpg",
    },
    {
      item: t("facilities.equipment.balls.name"),
      price: t("facilities.equipment.balls.price"),
      image:
        "https://www.tennisleo.fi/wp-content/uploads/2023/09/Erilaisia-padelpalloja-jpg.webp",
    },
    {
      item: t("facilities.equipment.shoes.name"),
      price: t("facilities.equipment.shoes.price"),
      image:
        "https://justpadel.com/cdn/shop/articles/8f7e04620390e7d4810bd7dde7e1754f.jpg",
    },
    {
      item: t("facilities.equipment.trainingKit.name"),
      price: t("facilities.equipment.trainingKit.price"),
      image:
        "https://thepadelschool.com/wp-content/uploads/2023/07/padel-equipment-I-need-1.jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden bg-slate-950">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={courts[0].image}
            alt="Padel Society Facilities"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
        </div>

        {/* Decorative radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(34,197,94,0.08),transparent_60%)]" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5">
                <div className="size-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-green-400">
                  {t("facilities.badge")}
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {t("facilities.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400"
            >
              {t("facilities.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link href="/reservations">
                <Button className="h-14 bg-green-600 px-8 text-base font-semibold text-white shadow-2xl shadow-green-600/30 transition-all hover:bg-green-500 hover:shadow-green-600/40 hover:-translate-y-0.5">
                  {t("facilities.exploreCourts")}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-slate-500 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Courts Section */}
      <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.06),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
              {t("facilities.courtsLabel")}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t("facilities.courtsLabel")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              {t("facilities.courtsSubtitle")}
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {courts.map((court, i) => (
              <motion.div
                key={court.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={court.image}
                    alt={court.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="mb-3 rounded-full border-0 bg-green-600/20 px-3 py-1 text-xs font-semibold text-green-400 backdrop-blur-sm">
                    {court.type}
                  </Badge>
                  <h3 className="text-xl font-bold text-white">
                    {court.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/80">
                    {court.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              {t("facilities.amenitiesLabel")}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              {t("facilities.amenitiesLabel")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              {t("facilities.amenitiesSubtitle")}
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity, i) => {
              const Icon = amenity.icon;
              return (
                <motion.div
                  key={amenity.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  custom={i}
                  variants={fadeUp}
                >
                  <Card className="group relative overflow-hidden border-0 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="relative flex flex-col items-start gap-4 p-7">
                      <div
                        className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${amenity.color} shadow-lg`}
                      >
                        <Icon className="size-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {amenity.name}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-slate-500">
                        {amenity.description}
                      </p>
                      <div className="flex items-center gap-1 text-sm font-medium text-green-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        {t("facilities.learnMore")} <ChevronRight className="size-3.5" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment Rental Section */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              {t("facilities.equipmentLabel")}
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              {t("facilities.equipmentLabel")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              {t("facilities.equipmentSubtitle")}
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((eq, i) => (
              <motion.div
                key={eq.item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="group overflow-hidden border-0 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={eq.image}
                      alt={eq.item}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold text-slate-900">
                      {eq.item}
                    </h3>
                    <p className="mt-1 text-lg font-bold gradient-text">
                      {eq.price}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.12),transparent_60%)]" />
        <div className="absolute inset-0 noise-overlay" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {t("facilities.readyToPlay")}
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              {t("facilities.ctaSubtitle")}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/reservations">
                <Button className="h-14 bg-green-600 px-10 text-base font-semibold text-white shadow-2xl shadow-green-600/30 transition-all hover:bg-green-500 hover:shadow-green-600/40 hover:-translate-y-0.5">
                  {t("facilities.bookNow")}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="h-14 border-white/20 bg-white/5 px-10 text-base text-white hover:bg-white/10"
                >
                  {t("facilities.contactUs")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

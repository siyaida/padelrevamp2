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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const courts = [
  {
    name: "Center Court",
    type: "Competition",
    description:
      "Our premier competition court with professional lighting and spectator seating",
    image:
      "https://plus.unsplash.com/premium_photo-1708692919464-b5608dd10542",
  },
  {
    name: "Indoor Courts",
    type: "Indoor",
    description:
      "Climate-controlled indoor courts for year-round play",
    image:
      "https://images.unsplash.com/photo-1572854252129-a18ce4979ff4",
  },
  {
    name: "Outdoor Courts",
    type: "Outdoor",
    description:
      "Beautiful outdoor courts with perfect playing conditions",
    image:
      "https://plus.unsplash.com/premium_photo-1708692919998-e3dc853ef8a8",
  },
];

const amenities = [
  {
    icon: Home,
    name: "Clubhouse",
    description: "Modern clubhouse with lounge area, cafe, and pro shop",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Lock,
    name: "Locker Rooms",
    description: "Secure locker rooms with showers and changing facilities",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Wifi,
    name: "Free Wi-Fi",
    description: "High-speed internet access throughout the facility",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Video,
    name: "Video Analysis",
    description: "Professional video analysis system for game improvement",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: ShoppingBag,
    name: "Pro Shop",
    description: "Full-service pro shop with equipment and accessories",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Coffee,
    name: "Cafe",
    description: "On-site cafe serving refreshments and light meals",
    color: "from-teal-500 to-cyan-600",
  },
];

const equipment = [
  {
    item: "Premium Racket",
    price: "15 TND/hour",
    image:
      "https://cdn.prod.website-files.com/633ef203ebdc24568b41624b/6656de4b39c52b0793bc7ac2__MS_3641-Edit-6522x4416-fae5400.jpg",
  },
  {
    item: "Balls (3-pack)",
    price: "10 TND",
    image:
      "https://www.tennisleo.fi/wp-content/uploads/2023/09/Erilaisia-padelpalloja-jpg.webp",
  },
  {
    item: "Shoes",
    price: "20 TND/day",
    image:
      "https://justpadel.com/cdn/shop/articles/8f7e04620390e7d4810bd7dde7e1754f.jpg",
  },
  {
    item: "Training Kit",
    price: "30 TND/session",
    image:
      "https://thepadelschool.com/wp-content/uploads/2023/07/padel-equipment-I-need-1.jpg",
  },
];

export default function FacilitiesPage() {
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
                  World-Class Venues
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
              Our{" "}
              <span className="gradient-text">Facilities</span>
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
              Experience padel in a world-class environment with
              state-of-the-art courts and premium amenities designed for
              players of every level.
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
                  Book a Court
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
              Play Your Way
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Professional Courts
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              10 premium courts designed for players of all levels
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
              Beyond the Court
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Premium Amenities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              Everything you need for the perfect padel experience
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
                        Learn more <ChevronRight className="size-3.5" />
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
              Gear Up
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Equipment Rental
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              Don&apos;t have your own gear? We&apos;ve got you covered
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
              Ready to{" "}
              <span className="gradient-text">Play?</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              Book a court now and experience our world-class facilities.
              Your perfect game starts here.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/reservations">
                <Button className="h-14 bg-green-600 px-10 text-base font-semibold text-white shadow-2xl shadow-green-600/30 transition-all hover:bg-green-500 hover:shadow-green-600/40 hover:-translate-y-0.5">
                  Book a Court
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="h-14 border-white/20 bg-white/5 px-10 text-base text-white hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

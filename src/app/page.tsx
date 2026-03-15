"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Users,
  Trophy,
  Heart,
  BarChart3,
  Building2,
  Star,
  Quote,
  ArrowRight,
  Play,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const features = [
  {
    icon: Calendar,
    title: "Easy Court Booking",
    description:
      "Book your court anytime, anywhere with our simple online booking system.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Users,
    title: "Professional Coaching",
    description:
      "Learn from certified coaches and improve your game with personalized training.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Trophy,
    title: "Tournaments",
    description:
      "Participate in regular tournaments and compete with players of all levels.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "Join a vibrant community of padel enthusiasts and find your perfect match.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description:
      "Track your progress and analyze your game with detailed statistics.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Building2,
    title: "Premium Facilities",
    description:
      "Experience padel on professional-grade courts with top-notch amenities.",
    color: "from-teal-500 to-cyan-600",
  },
];

const testimonials = [
  {
    name: "Youssef M.",
    role: "Competitive Player",
    quote:
      "Padel Society has completely transformed my game. The coaching staff is world-class and the facilities are second to none in Tunisia.",
    rating: 5,
    avatar: "YM",
  },
  {
    name: "Amira K.",
    role: "Club Member",
    quote:
      "I joined as a complete beginner and the community made me feel welcome from day one. Now I play three times a week!",
    rating: 5,
    avatar: "AK",
  },
  {
    name: "Mehdi B.",
    role: "Tournament Player",
    quote:
      "The tournament organization is fantastic. It's the best competitive padel experience you can find in the region.",
    rating: 5,
    avatar: "MB",
  },
];

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "10", label: "Premium Courts" },
  { value: "20+", label: "Tournaments / Year" },
  { value: "15+", label: "Expert Coaches" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-slate-950">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://www.clubmahindra.com/storage/app/media/Holiday%20Club%20Resorts/Saimaa%20Finland/Paddle%20tennis.jpg"
            alt="Padel court at Padel Society"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(34,197,94,0.08),transparent_60%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5">
                <div className="size-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-green-400">
                  Tunisia&apos;s #1 Padel Club
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
              Elevate Your
              <br />
              <span className="gradient-text">Padel Game</span>
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
              World-class courts, expert coaching, and a passionate community.
              Join Padel Society and experience the best padel in Tunisia.
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
              <Link href="/facilities">
                <Button
                  variant="outline"
                  className="group h-14 border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/30"
                >
                  <Play className="mr-2 size-4 transition-transform group-hover:scale-110" />
                  Explore Facilities
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

      {/* Stats Section */}
      <section className="relative -mt-1 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-white lg:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Everything You Need
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              From booking courts to tracking your performance, we provide a
              complete padel experience.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="group relative overflow-hidden border-0 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="relative flex flex-col items-start gap-4 p-7">
                    <div
                      className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg`}
                    >
                      <feature.icon className="size-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-1 text-sm font-medium text-green-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more <ChevronRight className="size-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
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
              World-Class Venues
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Premium Courts
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              10 professional-grade courts designed for players of all levels
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Center Court",
                type: "Competition",
                image:
                  "https://plus.unsplash.com/premium_photo-1708692919464-b5608dd10542",
              },
              {
                name: "Indoor Courts",
                type: "Indoor",
                image:
                  "https://images.unsplash.com/photo-1572854252129-a18ce4979ff4",
              },
              {
                name: "Outdoor Courts",
                type: "Outdoor",
                image:
                  "https://plus.unsplash.com/premium_photo-1708692919998-e3dc853ef8a8",
              },
            ].map((court, i) => (
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
                  <span className="mb-2 inline-block rounded-full bg-green-600/20 px-3 py-1 text-xs font-semibold text-green-400 backdrop-blur-sm">
                    {court.type}
                  </span>
                  <h3 className="text-xl font-bold text-white">{court.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <Link href="/facilities">
              <Button
                variant="outline"
                className="border-white/20 bg-white/5 px-8 py-6 text-base text-white hover:bg-white/10"
              >
                View All Facilities
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              What Our Members Say
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="relative h-full border-0 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col gap-5 p-7">
                    <Quote className="size-10 text-green-600/15" />
                    <p className="flex-1 text-[15px] leading-relaxed text-slate-600">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-amber-400 text-amber-400"
                          />
                        )
                      )}
                    </div>
                    <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                      <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-sm font-bold text-white">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
              <span className="gradient-text">Start Playing?</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              Join 500+ members who&apos;ve made Padel Society their home court.
              Book your first session today.
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

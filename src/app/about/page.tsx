"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Flame, TrendingUp, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our club, from facilities to coaching.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a strong, supportive community of padel enthusiasts.",
  },
  {
    icon: Flame,
    title: "Passion",
    description:
      "Sharing our passion for padel and helping others discover the joy of the sport.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Continuous improvement and learning for players of all levels.",
  },
];

const team = [
  {
    name: "Ahmed Ben Ali",
    role: "Club Director",
    bio: "Former professional player with 15 years of coaching experience.",
    image:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
  },
  {
    name: "Sarah Smith",
    role: "Head Coach",
    bio: "Certified international coach specializing in player development.",
    image:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
  },
  {
    name: "Mohamed Karim",
    role: "Operations Manager",
    bio: "Ensuring smooth operations and excellent member experience.",
    image:
      "https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(22,163,74,0.08),transparent_60%)]" />
          <div className="noise-overlay absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400"
          >
            Our Story
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            About{" "}
            <span className="gradient-text">Padel Society</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            Tunisia&apos;s premier padel club dedicated to growing the sport and
            building a vibrant community of players.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="mesh-gradient absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600"
            >
              Our Mission
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Why We Exist
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="mt-6 text-lg leading-relaxed text-slate-600"
            >
              To provide a world-class padel experience that combines
              professional facilities, expert coaching, and a welcoming
              community atmosphere. We aim to make padel accessible to players
              of all levels while fostering a competitive and enjoyable
              environment.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Active Members" },
              { value: "8", label: "Professional Courts" },
              { value: "20+", label: "Certified Coaches" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={4 + i}
                className="text-center"
              >
                <div className="text-3xl font-bold text-green-600 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600"
            >
              What We Stand For
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Our Values
            </motion.h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
              >
                <Card className="group h-full border-0 bg-white text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardContent className="flex flex-col items-center gap-4 pt-4">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-700 shadow-lg shadow-green-500/20 transition-transform duration-300 group-hover:scale-110">
                      <value.icon className="size-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {value.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="mesh-gradient absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600"
            >
              The People Behind The Club
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="mx-auto mt-4 max-w-2xl text-lg text-slate-600"
            >
              The passionate people behind Padel Society.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 3}
              >
                <Card className="group overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  </div>
                  <CardContent className="relative -mt-12 text-center">
                    <div className="glass mx-auto inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-400">
                      {member.role}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate-600">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15),transparent_70%)]" />
          <div className="noise-overlay absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400"
          >
            Get Started
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Join Our Community
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="mx-auto mt-4 max-w-xl text-lg text-slate-400"
          >
            Ready to start your padel journey? Get in touch with us today!
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/reservations">
              <Button className="group h-12 min-w-[180px] bg-green-600 px-8 text-base text-white shadow-lg shadow-green-600/25 transition-all hover:bg-green-500 hover:shadow-xl hover:shadow-green-600/30">
                Join Now
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="h-12 min-w-[180px] border-slate-700 px-8 text-base text-slate-300 transition-all hover:border-green-600 hover:bg-green-600/10 hover:text-white"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

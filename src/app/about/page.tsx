import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Flame, TrendingUp } from "lucide-react";

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
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
  },
  {
    name: "Sarah Smith",
    role: "Head Coach",
    bio: "Certified international coach specializing in player development.",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
  },
  {
    name: "Mohamed Karim",
    role: "Operations Manager",
    bio: "Ensuring smooth operations and excellent member experience.",
    image: "https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            About <span className="text-green-400">Padel Society</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Tunisia&apos;s premier padel club dedicated to growing the sport and
            building a vibrant community of players.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            To provide a world-class padel experience that combines professional
            facilities, expert coaching, and a welcoming community atmosphere. We
            aim to make padel accessible to players of all levels while fostering
            a competitive and enjoyable environment.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Values
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-0 bg-white text-center shadow-sm"
              >
                <CardContent className="flex flex-col items-center gap-3 pt-2">
                  <div className="flex size-14 items-center justify-center rounded-full bg-green-50">
                    <value.icon className="size-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
            The passionate people behind Padel Society.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <Card
                key={member.name}
                className="overflow-hidden border-0 shadow-sm"
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardContent className="text-center">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {member.name}
                  </h3>
                  <div className="mt-1 text-sm font-medium text-green-600">
                    {member.role}
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-green-600">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-lg text-green-100">
            Ready to start your padel journey? Get in touch with us today!
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/reservations">
              <Button className="h-12 min-w-[160px] bg-white px-8 text-base text-green-700 hover:bg-green-50">
                Join Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="h-12 min-w-[160px] border-green-300 px-8 text-base text-white hover:bg-green-700"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

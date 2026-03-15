import Link from "next/link";
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
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Easy Court Booking",
    description:
      "Book your court anytime, anywhere with our simple online booking system.",
  },
  {
    icon: Users,
    title: "Professional Coaching",
    description:
      "Learn from certified coaches and improve your game with personalized training.",
  },
  {
    icon: Trophy,
    title: "Tournaments",
    description:
      "Participate in regular tournaments and compete with players of all levels.",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "Join a vibrant community of padel enthusiasts and find your perfect match.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description:
      "Track your progress and analyze your game with detailed statistics.",
  },
  {
    icon: Building2,
    title: "Premium Facilities",
    description:
      "Experience padel on professional-grade courts with top-notch amenities.",
  },
];

const testimonials = [
  {
    name: "Youssef M.",
    role: "Competitive Player",
    quote:
      "Padel Society has completely transformed my game. The coaching staff is world-class and the facilities are second to none in Tunisia.",
    rating: 5,
  },
  {
    name: "Amira K.",
    role: "Club Member",
    quote:
      "I joined as a complete beginner and the community made me feel welcome from day one. Now I play three times a week!",
    rating: 5,
  },
  {
    name: "Mehdi B.",
    role: "Tournament Player",
    quote:
      "The tournament organization is fantastic. It's the best competitive padel experience you can find in the region.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "10", label: "Premium Courts" },
  { value: "20", label: "Tournaments / Year" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-600/20 via-transparent to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to{" "}
            <span className="text-green-400">Padel Society</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Your premier destination for padel enthusiasts. We offer a range of
            services to help you improve your game and enjoy the sport.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/reservations">
              <Button className="h-12 min-w-[160px] bg-green-600 px-8 text-base text-white hover:bg-green-700">
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="h-12 min-w-[160px] border-slate-500 px-8 text-base text-slate-200 hover:bg-slate-800 hover:text-white"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-green-600 lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Everything You Need
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              From booking courts to tracking your performance, we provide a
              complete padel experience.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-0 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="flex flex-col items-start gap-3 pt-2">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-green-50">
                    <feature.icon className="size-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              What Our Members Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Hear from our community of passionate padel players.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="border-0 bg-slate-50 shadow-sm"
              >
                <CardContent className="flex flex-col gap-4 pt-2">
                  <Quote className="size-8 text-green-600/30" />
                  <p className="text-base leading-relaxed text-slate-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-green-600">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Play?
          </h2>
          <p className="mt-4 text-lg text-green-100">
            Join Padel Society today and experience the best padel in Tunisia.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/reservations">
              <Button className="h-12 min-w-[160px] bg-white px-8 text-base text-green-700 hover:bg-green-50">
                Book a Court
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

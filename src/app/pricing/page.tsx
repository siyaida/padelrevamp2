import Link from "next/link";
import { Check, Dumbbell, Users, Video } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PricingFAQ from "./faq";

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
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Membership &amp; Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Choose the perfect membership plan for your padel journey
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col border-0 shadow-lg ${
                  plan.popular
                    ? "ring-2 ring-green-600"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-yellow-500 px-3 py-1 text-xs font-semibold text-slate-900">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-2 text-center">
                  <CardTitle className="text-xl font-bold text-slate-900">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-sm text-slate-500">
                      DT/{plan.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-green-600 font-medium">
                    {plan.tickets} tickets included
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="justify-center border-t-0 bg-transparent">
                  <Link
                    href="/register"
                    className={`inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors ${
                      plan.popular
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-slate-800 hover:bg-slate-700"
                    }`}
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-slate-900">
            Additional Services
          </h2>
          <p className="mb-10 text-center text-slate-600">
            Enhance your game with our professional services
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.name}
                  className="border-0 text-center shadow-md"
                >
                  <CardContent className="flex flex-col items-center gap-4 pt-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {service.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {service.description}
                    </p>
                    <p className="text-lg font-bold text-green-600">
                      {service.price}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mb-10 text-center text-slate-600">
            Everything you need to know about our memberships
          </p>
          <PricingFAQ />
        </div>
      </section>
    </main>
  );
}

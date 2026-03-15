import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Lock,
  Wifi,
  Video,
  ShoppingBag,
  Coffee,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


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
  },
  {
    icon: Lock,
    name: "Locker Rooms",
    description: "Secure locker rooms with showers and changing facilities",
  },
  {
    icon: Wifi,
    name: "Free Wi-Fi",
    description: "High-speed internet access throughout the facility",
  },
  {
    icon: Video,
    name: "Video Analysis",
    description: "Professional video analysis system for game improvement",
  },
  {
    icon: ShoppingBag,
    name: "Pro Shop",
    description: "Full-service pro shop with equipment and accessories",
  },
  {
    icon: Coffee,
    name: "Cafe",
    description: "On-site cafe serving refreshments and light meals",
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
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Facilities
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Experience padel in a world-class environment with state-of-the-art
            courts and premium amenities
          </p>
        </div>
      </section>

      {/* Courts */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-slate-900">
            Professional Courts
          </h2>
          <p className="mb-10 text-center text-slate-600">
            10 premium courts designed for players of all levels
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {courts.map((court) => (
              <Card key={court.name} className="overflow-hidden border-0 shadow-lg">
                <div className="relative h-56 w-full">
                  <Image
                    src={court.image}
                    alt={court.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-slate-900">
                      {court.name}
                    </CardTitle>
                    <Badge className="bg-green-600 text-white">
                      {court.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{court.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-slate-900">
            Premium Amenities
          </h2>
          <p className="mb-10 text-center text-slate-600">
            Everything you need for the perfect padel experience
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <Card
                  key={amenity.name}
                  className="border-0 shadow-md transition-shadow hover:shadow-lg"
                >
                  <CardContent className="flex items-start gap-4 pt-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {amenity.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {amenity.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment Rental */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-slate-900">
            Equipment Rental
          </h2>
          <p className="mb-10 text-center text-slate-600">
            Don&apos;t have your own gear? We&apos;ve got you covered
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipment.map((eq) => (
              <Card
                key={eq.item}
                className="overflow-hidden border-0 shadow-md"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={eq.image}
                    alt={eq.item}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-slate-900">{eq.item}</h3>
                  <p className="mt-1 text-lg font-bold text-green-600">
                    {eq.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Play?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Book a court now and experience our world-class facilities
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-green-600 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-green-700"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}

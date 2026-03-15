import type { Metadata } from "next";

const BASE_URL = "https://padelsociety.netlify.app";

const pages: Record<
  string,
  { title: string; description: string }
> = {
  home: {
    title: "Padel Society | Tunisia's Premier Padel Club",
    description:
      "Experience world-class padel at Padel Society in Tunis. 10 premium courts, expert coaching, and a vibrant community. Book your court today.",
  },
  about: {
    title: "About Us | Padel Society",
    description:
      "Meet the team behind Padel Society. 500+ active members, 15 years of coaching experience, and a passion for growing padel in Tunisia.",
  },
  facilities: {
    title: "Our Facilities | Padel Society",
    description:
      "Explore Padel Society's 10 premium courts including indoor, outdoor, and competition courts. Pro shop, cafe, and locker rooms available.",
  },
  pricing: {
    title: "Membership & Pricing | Padel Society",
    description:
      "Flexible membership plans starting from 120 DT/year. Court bookings, coaching sessions, and equipment rental available at Padel Society.",
  },
  contact: {
    title: "Contact Us | Padel Society",
    description:
      "Get in touch with Padel Society. Located at Nouveau Club, Tunis. Call +216 23 456 789 or visit us to book your first session.",
  },
  reservations: {
    title: "Book a Court | Padel Society",
    description:
      "Reserve your padel court online at Padel Society. Choose from 10 premium courts with flexible time slots. Easy online booking.",
  },
  audit: {
    title: "Site Audit Report | Padel Society",
    description:
      "Comprehensive audit of the Padel Society website covering UI, SEO, performance, accessibility, security, and content quality.",
  },
};

export function getMetadata(page: string): Metadata {
  const pageData = pages[page] ?? pages.home;
  const path = page === "home" ? "" : `/${page}`;

  return {
    title: pageData.title,
    description: pageData.description,
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `${BASE_URL}${path}`,
      siteName: "Padel Society",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  };
}

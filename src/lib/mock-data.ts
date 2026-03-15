export interface Court {
  id: number;
  name: string;
  tickets: number;
  target: string;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const courts: Court[] = [
  { id: 1, name: "Terrain 1", tickets: 4, target: "Both", startHour: 8, startMinute: 0, endHour: 17, endMinute: 0 },
  { id: 2, name: "Terrain 2", tickets: 4, target: "Both", startHour: 6, startMinute: 0, endHour: 22, endMinute: 30 },
  { id: 3, name: "Terrain 3", tickets: 4, target: "Both", startHour: 6, startMinute: 0, endHour: 22, endMinute: 30 },
  { id: 4, name: "Terrain 4", tickets: 1, target: "Both", startHour: 5, startMinute: 0, endHour: 23, endMinute: 0 },
  { id: 5, name: 'Terrain 5 "Central"', tickets: 4, target: "Both", startHour: 0, startMinute: 0, endHour: 23, endMinute: 0 },
  { id: 6, name: "Terrain 6", tickets: 1, target: "Both", startHour: 1, startMinute: 0, endHour: 23, endMinute: 0 },
  { id: 7, name: "Terrain 7", tickets: 1, target: "Both", startHour: 5, startMinute: 0, endHour: 23, endMinute: 0 },
  { id: 8, name: "Terrain 8", tickets: 1, target: "Both", startHour: 5, startMinute: 0, endHour: 23, endMinute: 0 },
  { id: 9, name: "Terrain 9", tickets: 1, target: "Both", startHour: 5, startMinute: 0, endHour: 23, endMinute: 0 },
  { id: 10, name: "Terrain 10", tickets: 1, target: "Both", startHour: 5, startMinute: 0, endHour: 23, endMinute: 0 },
];

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

export function generateAvailability(courtId: number, date: Date): TimeSlot[] {
  const court = courts.find((c) => c.id === courtId);
  if (!court) return [];

  const slots: TimeSlot[] = [];
  const dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const dateSeed = dateStr.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  for (let hour = court.startHour; hour < court.endHour; hour++) {
    const seed = dateSeed * 100 + courtId * 31 + hour * 7;
    const isAvailable = seededRandom(seed) > 0.4;

    const startTime = `${hour.toString().padStart(2, "0")}:00`;
    const endTime = `${(hour + 1).toString().padStart(2, "0")}:00`;

    slots.push({ startTime, endTime, available: isAvailable });
  }

  return slots;
}

export function getAvailableCount(courtId: number, date: Date): number {
  return generateAvailability(courtId, date).filter((s) => s.available).length;
}

export const testimonials: Testimonial[] = [
  {
    name: "Yassine B.",
    role: "Club Member",
    quote: "The best padel facility in Tunisia. Courts are always in perfect condition and the booking system makes it so easy to reserve.",
    avatar: "YB",
  },
  {
    name: "Amira K.",
    role: "Tournament Player",
    quote: "I've played at many clubs across the country, but Padel Society stands out for its professional atmosphere and excellent coaching staff.",
    avatar: "AK",
  },
  {
    name: "Mehdi S.",
    role: "Weekend Player",
    quote: "Great place to play with friends on weekends. The online booking saves so much time. Highly recommended!",
    avatar: "MS",
  },
];

export const membershipPlans = [
  { name: "Cours", type: "Course", tickets: 10, price: 120, currency: "DT", popular: false },
  { name: "Match", type: "Match", tickets: 10, price: 230, currency: "DT", popular: true },
  { name: "Padel 10", type: "Match", tickets: 10, price: 250, currency: "DT", popular: false },
  { name: "Mixed", type: "Mixed", tickets: 20, price: 300, currency: "DT", popular: false },
];

export const businessInfo = {
  name: "Padel Society",
  tagline: "Tunisia's premier padel club",
  address: "Nouveau Club, 7 Rue du Royaume d'Arabie Saoudite, Tunis, Tunisie",
  phone: "+216 23 456 789",
  email: "nextconsulttn@gmail.com",
  stats: { activeMembers: "500+", premiumCourts: 10, tournamentsPerYear: 20 },
  amenities: ["Clubhouse", "Locker Rooms", "Free Wi-Fi", "Video Analysis", "Pro Shop", "Cafe"],
  values: ["Excellence", "Community", "Passion", "Growth"],
  mission:
    "To provide a world class padel experience that combines professional facilities, expert coaching and a welcoming community atmosphere.",
  team: [
    {
      name: "Ahmed Ben Ali",
      role: "Club Director",
      bio: "Former professional player with 15 years of coaching experience",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
    },
    {
      name: "Sarah Smith",
      role: "Head Coach",
      bio: "Certified international coach specializing in player development",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
    },
    {
      name: "Mohamed Karim",
      role: "Operations Manager",
      bio: "Ensuring smooth operations and excellent member experience",
      image: "https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg",
    },
  ],
  services: {
    coaching: { private: "60 TND/hour", group: "30 TND/session" },
    videoAnalysis: "80 TND/session",
    equipmentRental: [
      { item: "Premium Racket", price: "15 TND/hour" },
      { item: "Balls (3-pack)", price: "10 TND" },
      { item: "Shoes", price: "20 TND/day" },
      { item: "Training Kit", price: "30 TND/session" },
    ],
  },
};

export interface PlayerProfile {
  name: string;
  email: string;
  phone: string;
  memberSince: string;
  level: string;
  avatarInitials: string;
}

export interface Reservation {
  id: string;
  date: string;
  time: string;
  court: string;
  opponent: string;
  status: "upcoming" | "completed" | "cancelled";
  price: number;
}

export interface Voucher {
  id: string;
  code: string;
  discount: string;
  description: string;
  expiresAt: string;
  used: boolean;
}

export interface Ticket {
  total: number;
  used: number;
  remaining: number;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  tickets: number;
  features: string[];
  current?: boolean;
  popular?: boolean;
}

export interface BillingRecord {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: "paid" | "pending";
}

export interface ActivityItem {
  id: string;
  type: "match" | "booking" | "voucher" | "membership";
  title: string;
  description: string;
  date: string;
  icon: string;
}

export const playerProfile: PlayerProfile = {
  name: "Youssef Ben Ali",
  email: "player@padel.tn",
  phone: "+216 55 123 456",
  memberSince: "2024-03-15",
  level: "Intermediate",
  avatarInitials: "YB",
};

export const reservations: Reservation[] = [
  { id: "r1", date: "2026-03-18", time: "18:00 - 19:30", court: "Center Court", opponent: "Mehdi Trabelsi", status: "upcoming", price: 45 },
  { id: "r2", date: "2026-03-20", time: "10:00 - 11:30", court: "Indoor Court 2", opponent: "Amira Slimani", status: "upcoming", price: 40 },
  { id: "r3", date: "2026-03-22", time: "16:00 - 17:30", court: "Outdoor Court 1", opponent: "Karim Jebali", status: "upcoming", price: 35 },
  { id: "r4", date: "2026-03-10", time: "09:00 - 10:30", court: "Center Court", opponent: "Nadia Bouaziz", status: "completed", price: 45 },
  { id: "r5", date: "2026-03-08", time: "14:00 - 15:30", court: "Indoor Court 1", opponent: "Sami Khelifi", status: "completed", price: 40 },
  { id: "r6", date: "2026-03-05", time: "11:00 - 12:30", court: "Outdoor Court 3", opponent: "Leila Mansouri", status: "completed", price: 35 },
  { id: "r7", date: "2026-03-01", time: "17:00 - 18:30", court: "Center Court", opponent: "Ahmed Gharbi", status: "completed", price: 45 },
  { id: "r8", date: "2026-02-28", time: "19:00 - 20:30", court: "Indoor Court 3", opponent: "Fatma Riahi", status: "cancelled", price: 40 },
  { id: "r9", date: "2026-02-25", time: "08:00 - 09:30", court: "Outdoor Court 2", opponent: "Omar Belhaj", status: "completed", price: 35 },
  { id: "r10", date: "2026-02-20", time: "15:00 - 16:30", court: "Center Court", opponent: "Ines Chaabane", status: "completed", price: 45 },
];

export const vouchers: Voucher[] = [
  { id: "v1", code: "PADEL-SPRING-25", discount: "25%", description: "spring_discount", expiresAt: "2026-04-30", used: false },
  { id: "v2", code: "MEMBER-LOYALTY-10", discount: "10%", description: "loyalty_reward", expiresAt: "2026-06-30", used: false },
  { id: "v3", code: "FRIEND-REF-15", discount: "15%", description: "referral_bonus", expiresAt: "2026-05-15", used: false },
  { id: "v4", code: "WELCOME-2024", discount: "20%", description: "welcome_offer", expiresAt: "2025-12-31", used: true },
];

export const ticketBalance: Ticket = {
  total: 10,
  used: 6,
  remaining: 4,
};

export const membershipPlans: MembershipPlan[] = [
  { id: "starter", name: "Starter", price: 200, period: "year", tickets: 0, features: ["court_access", "online_booking", "community"] },
  { id: "match", name: "Match", price: 450, period: "year", tickets: 5, features: ["starter_features", "priority_booking", "match_org", "performance"], popular: true, current: true },
  { id: "padel10", name: "Padel 10", price: 700, period: "year", tickets: 10, features: ["match_features", "ten_sessions", "equipment_discount"] },
  { id: "mixed", name: "Mixed", price: 950, period: "year", tickets: 15, features: ["padel10_features", "group_training", "tournament_entry", "video_analysis"] },
];

export const billingHistory: BillingRecord[] = [
  { id: "b1", date: "2026-03-01", description: "membership_renewal", amount: 450, status: "paid" },
  { id: "b2", date: "2026-02-01", description: "extra_tickets", amount: 80, status: "paid" },
  { id: "b3", date: "2026-01-01", description: "membership_renewal", amount: 450, status: "paid" },
  { id: "b4", date: "2025-12-15", description: "coaching_session", amount: 60, status: "paid" },
];

export const activityFeed: ActivityItem[] = [
  { id: "a1", type: "booking", title: "court_booked", description: "center_court_mar18", date: "2026-03-15", icon: "calendar" },
  { id: "a2", type: "match", title: "match_completed", description: "won_vs_nadia", date: "2026-03-10", icon: "trophy" },
  { id: "a3", type: "voucher", title: "voucher_received", description: "spring_voucher", date: "2026-03-08", icon: "ticket" },
  { id: "a4", type: "membership", title: "plan_renewed", description: "match_plan_renewed", date: "2026-03-01", icon: "star" },
  { id: "a5", type: "match", title: "match_completed", description: "won_vs_sami", date: "2026-03-08", icon: "trophy" },
];

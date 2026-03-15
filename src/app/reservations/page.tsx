"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/booking/date-picker";
import { CourtSelector } from "@/components/booking/court-selector";
import { TimeSlots } from "@/components/booking/time-slots";
import { BookingSummary } from "@/components/booking/booking-summary";
import { CalendarDays, LayoutGrid, Clock, ChevronRight, ArrowLeft, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Court, TimeSlot } from "@/lib/mock-data";

const STEPS = [
  { id: 1, label: "Select Date", icon: CalendarDays },
  { id: 2, label: "Choose Court", icon: LayoutGrid },
  { id: 3, label: "Pick Time", icon: Clock },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.35, ease: "easeOut" as const },
};

export default function ReservationsPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setSelectedCourt(null);
    setSelectedSlot(null);
    setStep(2);
  };

  const handleSelectCourt = (court: Court) => {
    setSelectedCourt(court);
    setSelectedSlot(null);
    setStep(3);
  };

  const handleSelectSlot = (slot: TimeSlot) => {
    setSelectedSlot(slot);
  };

  const handleReset = () => {
    setSelectedDate(null);
    setSelectedCourt(null);
    setSelectedSlot(null);
    setStep(1);
  };

  const handleBack = () => {
    if (step === 3) {
      setSelectedSlot(null);
      setStep(2);
    } else if (step === 2) {
      setSelectedCourt(null);
      setStep(1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Header */}
      <div className="relative bg-slate-950 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-14 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-3">
              <span className="gradient-text">Book a Court</span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl max-w-lg">
              Reserve your padel court in just a few steps
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stepper */}
      <div className="max-w-6xl mx-auto px-4 -mt-7 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-white rounded-2xl shadow-lg border-0 p-5 sm:p-6"
        >
          <div className="flex items-center justify-center">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center">
                {/* Step button */}
                <button
                  onClick={() => {
                    if (s.id < step) setStep(s.id);
                  }}
                  className={cn(
                    "flex items-center gap-3 group transition-all duration-200",
                    s.id < step && "cursor-pointer",
                    s.id > step && "cursor-default"
                  )}
                >
                  {/* Numbered circle */}
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 shrink-0",
                      step === s.id &&
                        "bg-green-600 text-white shadow-md shadow-green-600/30 ring-4 ring-green-600/15",
                      step > s.id &&
                        "bg-green-100 text-green-700 group-hover:bg-green-200 group-hover:shadow-sm",
                      step < s.id && "bg-slate-100 text-slate-400"
                    )}
                  >
                    {step > s.id ? (
                      <Check className="size-4 stroke-[3]" />
                    ) : (
                      s.id
                    )}
                  </div>

                  {/* Label */}
                  <div className="hidden sm:block text-left">
                    <p
                      className={cn(
                        "text-xs font-medium uppercase tracking-wide",
                        step === s.id && "text-green-600",
                        step > s.id && "text-green-600/70",
                        step < s.id && "text-slate-400"
                      )}
                    >
                      Step {s.id}
                    </p>
                    <p
                      className={cn(
                        "text-sm font-semibold -mt-0.5",
                        step === s.id && "text-slate-900",
                        step > s.id &&
                          "text-slate-600 group-hover:text-slate-800",
                        step < s.id && "text-slate-400"
                      )}
                    >
                      {s.label}
                    </p>
                  </div>

                  {/* Mobile label */}
                  <span
                    className={cn(
                      "sm:hidden text-sm font-semibold",
                      step === s.id && "text-slate-900",
                      step > s.id && "text-slate-600",
                      step < s.id && "text-slate-400"
                    )}
                  >
                    {s.label}
                  </span>
                </button>

                {/* Connecting line */}
                {i < STEPS.length - 1 && (
                  <div className="mx-4 sm:mx-8 w-10 sm:w-16 h-0.5 rounded-full relative overflow-hidden bg-slate-200">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-green-500 rounded-full"
                      initial={false}
                      animate={{ width: step > s.id ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main area */}
          <div className="flex-1 min-w-0">
            {/* Back button */}
            <AnimatePresence>
              {step > 1 && (
                <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleBack}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-green-600 mb-5 cursor-pointer group transition-colors duration-200"
                >
                  <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span className="font-medium">Back</span>
                </motion.button>
              )}
            </AnimatePresence>

            {/* Step 1: Date */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-1"
                  {...fadeUp}
                  className="bg-white rounded-2xl border-0 shadow-lg p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-50 text-green-600">
                      <CalendarDays className="size-4" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Select a Date
                    </h2>
                  </div>
                  <p className="text-sm text-slate-500 mb-6 ml-11">
                    Choose your preferred date for playing
                  </p>
                  <DatePicker
                    selectedDate={selectedDate}
                    onSelectDate={handleSelectDate}
                    currentMonth={currentMonth}
                    onChangeMonth={setCurrentMonth}
                  />
                </motion.div>
              )}

              {/* Step 2: Court */}
              {step === 2 && selectedDate && (
                <motion.div
                  key="step-2"
                  {...fadeUp}
                  className="bg-white rounded-2xl border-0 shadow-lg p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-50 text-green-600">
                      <LayoutGrid className="size-4" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Choose a Court
                    </h2>
                  </div>
                  <p className="text-sm text-slate-500 mb-6 ml-11">
                    Select from our {10} available courts
                  </p>
                  <CourtSelector
                    selectedDate={selectedDate}
                    selectedCourt={selectedCourt}
                    onSelectCourt={handleSelectCourt}
                  />
                </motion.div>
              )}

              {/* Step 3: Time */}
              {step === 3 && selectedDate && selectedCourt && (
                <motion.div
                  key="step-3"
                  {...fadeUp}
                  className="bg-white rounded-2xl border-0 shadow-lg p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-50 text-green-600">
                      <Clock className="size-4" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      Pick a Time Slot
                    </h2>
                  </div>
                  <p className="text-sm text-slate-500 mb-6 ml-11">
                    Available times for {selectedCourt.name}
                  </p>
                  <TimeSlots
                    court={selectedCourt}
                    selectedDate={selectedDate}
                    selectedSlot={selectedSlot}
                    onSelectSlot={handleSelectSlot}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar summary */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <BookingSummary
                  selectedDate={selectedDate}
                  selectedCourt={selectedCourt}
                  selectedSlot={selectedSlot}
                  onReset={handleReset}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

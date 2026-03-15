"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/booking/date-picker";
import { CourtSelector } from "@/components/booking/court-selector";
import { TimeSlots } from "@/components/booking/time-slots";
import { BookingSummary } from "@/components/booking/booking-summary";
import { CalendarDays, LayoutGrid, Clock, ChevronRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Court, TimeSlot } from "@/lib/mock-data";

const STEPS = [
  { id: 1, label: "Select Date", icon: CalendarDays },
  { id: 2, label: "Choose Court", icon: LayoutGrid },
  { id: 3, label: "Pick Time", icon: Clock },
];

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
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Book a Court</h1>
          <p className="text-slate-300 text-lg">
            Reserve your padel court in just a few steps
          </p>
        </div>
      </div>

      {/* Stepper */}
      <div className="max-w-6xl mx-auto px-4 -mt-5">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => {
                    if (s.id < step) setStep(s.id);
                  }}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                    step === s.id && "bg-green-600 text-white",
                    step > s.id && "bg-green-100 text-green-700 cursor-pointer hover:bg-green-200",
                    step < s.id && "bg-slate-100 text-slate-400"
                  )}
                >
                  <s.icon className="size-4" />
                  <span className="hidden sm:inline">{s.label}</span>
                  <span className="sm:hidden">Step {s.id}</span>
                </button>
                {i < STEPS.length - 1 && (
                  <ChevronRight className="size-4 text-slate-300 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main area */}
          <div className="flex-1">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 mb-4 cursor-pointer"
              >
                <ArrowLeft className="size-4" />
                Back
              </button>
            )}

            {/* Step 1: Date */}
            {step === 1 && (
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-1">
                  Select a Date
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Choose your preferred date for playing
                </p>
                <DatePicker
                  selectedDate={selectedDate}
                  onSelectDate={handleSelectDate}
                  currentMonth={currentMonth}
                  onChangeMonth={setCurrentMonth}
                />
              </div>
            )}

            {/* Step 2: Court */}
            {step === 2 && selectedDate && (
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-1">
                  Choose a Court
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Select from our {10} available courts
                </p>
                <CourtSelector
                  selectedDate={selectedDate}
                  selectedCourt={selectedCourt}
                  onSelectCourt={handleSelectCourt}
                />
              </div>
            )}

            {/* Step 3: Time */}
            {step === 3 && selectedDate && selectedCourt && (
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-semibold text-slate-800 mb-1">
                  Pick a Time Slot
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Available times for {selectedCourt.name}
                </p>
                <TimeSlots
                  court={selectedCourt}
                  selectedDate={selectedDate}
                  selectedSlot={selectedSlot}
                  onSelectSlot={handleSelectSlot}
                />
              </div>
            )}
          </div>

          {/* Sidebar summary — desktop sticky, mobile bottom */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-6">
              <BookingSummary
                selectedDate={selectedDate}
                selectedCourt={selectedCourt}
                selectedSlot={selectedSlot}
                onReset={handleReset}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

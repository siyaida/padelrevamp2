"use client";

import { cn } from "@/lib/utils";
import { generateAvailability, type Court, type TimeSlot } from "@/lib/mock-data";
import { Clock } from "lucide-react";

interface TimeSlotsProps {
  court: Court;
  selectedDate: Date;
  selectedSlot: TimeSlot | null;
  onSelectSlot: (slot: TimeSlot) => void;
}

export function TimeSlots({ court, selectedDate, selectedSlot, onSelectSlot }: TimeSlotsProps) {
  const slots = generateAvailability(court.id, selectedDate);

  return (
    <div>
      <div className="flex items-center gap-4 mb-4 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded border-2 border-green-500 bg-green-50" />
          Available
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-3 h-3 rounded bg-slate-200" />
          Booked
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {slots.map((slot) => {
          const isSelected =
            selectedSlot?.startTime === slot.startTime &&
            selectedSlot?.endTime === slot.endTime;

          return (
            <button
              key={slot.startTime}
              disabled={!slot.available}
              onClick={() => onSelectSlot(slot)}
              className={cn(
                "flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                slot.available && !isSelected &&
                  "border-2 border-green-500 bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer",
                slot.available && isSelected &&
                  "border-2 border-green-600 bg-green-600 text-white cursor-pointer",
                !slot.available &&
                  "border border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed"
              )}
            >
              <Clock className="size-3.5" />
              {slot.startTime} - {slot.endTime}
            </button>
          );
        })}
      </div>
    </div>
  );
}

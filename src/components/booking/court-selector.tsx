"use client";

import { cn } from "@/lib/utils";
import { courts, getAvailableCount, type Court } from "@/lib/mock-data";
import { MapPin } from "lucide-react";

interface CourtSelectorProps {
  selectedDate: Date;
  selectedCourt: Court | null;
  onSelectCourt: (court: Court) => void;
}

export function CourtSelector({ selectedDate, selectedCourt, onSelectCourt }: CourtSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {courts.map((court) => {
        const availableCount = getAvailableCount(court.id, selectedDate);
        const isSelected = selectedCourt?.id === court.id;
        const startTime = `${court.startHour.toString().padStart(2, "0")}:${court.startMinute.toString().padStart(2, "0")}`;
        const endTime = `${court.endHour.toString().padStart(2, "0")}:${court.endMinute.toString().padStart(2, "0")}`;

        return (
          <button
            key={court.id}
            onClick={() => onSelectCourt(court)}
            className={cn(
              "flex flex-col gap-2 rounded-xl border p-4 text-left transition-all cursor-pointer",
              isSelected
                ? "border-green-600 bg-green-50 ring-2 ring-green-600"
                : "border-slate-200 bg-white hover:border-green-300 hover:shadow-sm"
            )}
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-slate-800">{court.name}</h4>
              <MapPin className="size-4 text-slate-400" />
            </div>
            <p className="text-xs text-slate-500">
              {startTime} - {endTime}
            </p>
            <div className="flex items-center justify-between mt-1">
              <span
                className={cn(
                  "text-xs font-medium rounded-full px-2 py-0.5",
                  availableCount > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                )}
              >
                {availableCount > 0 ? `${availableCount} slots available` : "Fully booked"}
              </span>
              <span className="text-xs text-slate-400">
                {court.tickets} {court.tickets === 1 ? "ticket" : "tickets"}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

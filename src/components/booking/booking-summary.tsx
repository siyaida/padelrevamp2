"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { CalendarDays, MapPin, Clock, CheckCircle2, Ticket } from "lucide-react";
import { useState } from "react";
import type { Court, TimeSlot } from "@/lib/mock-data";

interface BookingSummaryProps {
  selectedDate: Date | null;
  selectedCourt: Court | null;
  selectedSlot: TimeSlot | null;
  onReset: () => void;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatDate(date: Date): string {
  return `${DAY_NAMES[date.getDay()]}, ${date.getDate()} ${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
}

export function BookingSummary({ selectedDate, selectedCourt, selectedSlot, onReset }: BookingSummaryProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  const canConfirm = selectedDate && selectedCourt && selectedSlot;

  const handleConfirm = () => {
    setShowSuccess(true);
  };

  const handleClose = () => {
    setShowSuccess(false);
    onReset();
  };

  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Booking Summary</h3>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <CalendarDays className="size-4 text-green-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Date</p>
              <p className="text-sm font-medium text-slate-800">
                {selectedDate ? formatDate(selectedDate) : "Not selected"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="size-4 text-green-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Court</p>
              <p className="text-sm font-medium text-slate-800">
                {selectedCourt ? selectedCourt.name : "Not selected"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="size-4 text-green-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Time</p>
              <p className="text-sm font-medium text-slate-800">
                {selectedSlot
                  ? `${selectedSlot.startTime} - ${selectedSlot.endTime}`
                  : "Not selected"}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 flex items-start gap-3">
            <Ticket className="size-4 text-green-600 mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-slate-500">Price</p>
              <p className="text-sm font-bold text-slate-800">1 Ticket</p>
            </div>
          </div>
        </div>

        <Button
          className="w-full mt-5 bg-green-600 text-white hover:bg-green-700 cursor-pointer"
          size="lg"
          disabled={!canConfirm}
          onClick={handleConfirm}
        >
          Confirm Booking
        </Button>
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="size-6 text-green-600" />
            </div>
            <DialogTitle className="text-center">Booking Confirmed!</DialogTitle>
            <DialogDescription className="text-center">
              Your court has been reserved successfully.
            </DialogDescription>
          </DialogHeader>

          {selectedDate && selectedCourt && selectedSlot && (
            <div className="rounded-lg bg-slate-50 p-3 space-y-1.5 text-sm">
              <p>
                <span className="text-slate-500">Date:</span>{" "}
                <span className="font-medium">{formatDate(selectedDate)}</span>
              </p>
              <p>
                <span className="text-slate-500">Court:</span>{" "}
                <span className="font-medium">{selectedCourt.name}</span>
              </p>
              <p>
                <span className="text-slate-500">Time:</span>{" "}
                <span className="font-medium">
                  {selectedSlot.startTime} - {selectedSlot.endTime}
                </span>
              </p>
              <p>
                <span className="text-slate-500">Cost:</span>{" "}
                <span className="font-medium">1 Ticket</span>
              </p>
            </div>
          )}

          <DialogFooter>
            <Button className="w-full bg-green-600 text-white hover:bg-green-700 cursor-pointer" onClick={handleClose}>
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

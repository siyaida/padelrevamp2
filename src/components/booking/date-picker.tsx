"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  currentMonth: Date;
  onChangeMonth: (date: Date) => void;
}

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

export function DatePicker({ selectedDate, onSelectDate, currentMonth, onChangeMonth }: DatePickerProps) {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const prevMonth = () => onChangeMonth(new Date(year, month - 1, 1));
  const nextMonth = () => onChangeMonth(new Date(year, month + 1, 1));

  const canGoPrev = new Date(year, month, 1) > new Date(today.getFullYear(), today.getMonth(), 1);

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" size="icon-sm" onClick={prevMonth} disabled={!canGoPrev}>
          <ChevronLeft className="size-4" />
        </Button>
        <h3 className="text-lg font-semibold text-slate-800">
          {MONTH_NAMES[month]} {year}
        </h3>
        <Button variant="ghost" size="icon-sm" onClick={nextMonth}>
          <ChevronRight className="size-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAY_NAMES.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-slate-500 py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} />;
          }

          const date = new Date(year, month, day);
          date.setHours(0, 0, 0, 0);
          const isPast = date < today;
          const isToday = date.getTime() === today.getTime();
          const isSelected =
            selectedDate &&
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === month &&
            selectedDate.getFullYear() === year;

          return (
            <button
              key={day}
              disabled={isPast}
              onClick={() => onSelectDate(new Date(year, month, day))}
              className={cn(
                "h-10 rounded-lg text-sm font-medium transition-all",
                isPast && "text-slate-300 cursor-not-allowed",
                !isPast && !isSelected && "hover:bg-green-50 text-slate-700 cursor-pointer",
                isToday && !isSelected && "ring-2 ring-green-600 ring-offset-1",
                isSelected && "bg-green-600 text-white hover:bg-green-700"
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

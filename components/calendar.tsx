import React from "react";
import { Calendar as NextUICalendar } from "@nextui-org/react";
import { parseDate, CalendarDate } from '@internationalized/date';

export default function CalendarComponent() {
  return (
    <div className="flex gap-x-4">
      <NextUICalendar aria-label="Date (No Selection)" />
      <NextUICalendar 
        aria-label="Date (Uncontrolled)" 
        defaultValue={parseDate("2020-02-03")} 
      />
    </div>
  );
}

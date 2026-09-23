import React from "react";
import { DayOfWeek } from "@/types/restaurant";
import { Container } from "./ui/container";

interface HoursSectionProps {
  hours: Record<DayOfWeek, string>;
  currentDay: DayOfWeek;
}

const SCHEDULE_ROWS: { key: string; label: string; time: string; isClosed?: boolean }[] = [
  { key: "monday", label: "Monday", time: "Closed (Rest & Roasting)", isClosed: true },
  { key: "tuesday", label: "Tuesday", time: "08:00 – 15:00" },
  { key: "wednesday", label: "Wednesday", time: "08:00 – 15:00" },
  { key: "thursday", label: "Thursday", time: "08:00 – 15:00" },
  { key: "friday", label: "Friday", time: "08:00 – 16:00" },
  { key: "weekend", label: "Weekend", time: "09:00 – 17:00 (Sat & Sun Brunch)" },
];

export function HoursSection({ currentDay }: HoursSectionProps) {
  return (
    <section id="hours" aria-labelledby="hours-heading" className="scroll-mt-24 py-12 sm:py-16">
      <Container>
        {/* Large Warm Surface Container */}
        <div className="bg-[#FAF7F2] border border-[#E5DACB] rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left 7 Columns: Timetable */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#B45309]">
                  ✦ SERVICE TIMETABLE
                </span>
                <h2
                  id="hours-heading"
                  className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2B211B]"
                >
                  Weekly Opening Hours
                </h2>
                <p className="text-sm text-[#756A61] font-sans">
                  Walk-ins warmly welcomed. Kitchen operates continuously until closing time.
                </p>
              </div>

              {/* Schedule List Rows */}
              <div className="space-y-2.5 pt-1">
                {SCHEDULE_ROWS.map((row) => {
                  const isToday =
                    row.key === currentDay ||
                    (currentDay === "saturday" && row.key === "weekend") ||
                    (currentDay === "sunday" && row.key === "weekend");

                  return (
                    <div
                      key={row.key}
                      className={`bg-white border rounded-xl px-4 py-3.5 flex items-center justify-between transition-all ${
                        isToday ? "border-[#B45309] shadow-xs" : "border-[#E5DACB]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm sm:text-base font-sans font-semibold text-[#2B211B]">
                          {row.label}
                        </span>
                        {isToday && (
                          <span className="text-[10px] font-sans font-bold uppercase tracking-wider bg-[#B45309] text-white px-2 py-0.5 rounded-full">
                            TODAY
                          </span>
                        )}
                      </div>

                      <span
                        className={`text-xs sm:text-sm font-sans tabular-nums ${
                          row.isClosed
                            ? "text-[#756A61] italic"
                            : isToday
                            ? "text-[#B45309] font-bold"
                            : "text-[#2B211B] font-medium"
                        }`}
                      >
                        {row.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 5 Columns: Finding Us Location Card */}
            <div className="lg:col-span-5 bg-white border border-[#E5DACB] rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#B45309]">
                  VISIT US
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2B211B]">
                  Finding Us in Lisbon
                </h3>
                <p className="text-sm text-[#756A61] font-sans leading-relaxed">
                  Situated on sun-washed <strong className="font-semibold text-[#2B211B]">Rua da Boavista 84</strong>, just a 4-minute stroll from Cais do Sodré, bordering Santos and Bica.
                </p>

                {/* Location Details */}
                <div className="space-y-3 text-xs sm:text-sm font-sans text-[#2B211B] pt-2">
                  <div className="flex items-start gap-3">
                    <span className="text-base text-[#B45309]">📍</span>
                    <span>Rua da Boavista 84, 1200-066 Lisboa, Portugal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-base text-[#B45309]">🚊</span>
                    <span>Tram 25E / 28E or Metro Cais do Sodré</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-base text-[#B45309]">📞</span>
                    <a href="tel:+351211234567" className="hover:text-[#B45309] font-medium">
                      +351 21 123 4567
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-base text-[#B45309]">📸</span>
                    <a
                      href="https://instagram.com/cardamomhouse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B45309] font-medium"
                    >
                      @cardamomhouse
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="https://maps.google.com/?q=Rua+da+Boavista+84,+Lisboa"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#B45309] text-white text-xs font-sans font-bold uppercase tracking-wider py-3.5 px-4 rounded-full hover:bg-[#964205] shadow-xs transition-colors"
              >
                Open Maps Direction
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}




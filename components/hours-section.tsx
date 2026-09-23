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
    <section id="hours" aria-labelledby="hours-heading" className="scroll-mt-24 py-12 sm:py-16 relative">
      <Container>
        {/* Large Warm Glassmorphism Surface Container */}
        <div className="bg-white/70 dark:bg-white/5 backdrop-blur-2xl border border-white/90 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl shadow-[#B45309]/5 relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#B45309]/15 via-[#F59E0B]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            {/* Left 7 Columns: Timetable */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#B45309] dark:text-[#F59E0B]">
                  ✦ SERVICE TIMETABLE
                </span>
                <h2
                  id="hours-heading"
                  className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#2B211B] dark:text-[#F5EFE6]"
                >
                  Weekly Opening Hours
                </h2>
                <p className="text-sm text-[#756A61] dark:text-[#C7BBB0] font-sans">
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
                      className={`backdrop-blur-md rounded-xl px-4 py-3.5 flex items-center justify-between transition-all ${
                        isToday
                          ? "bg-white/90 dark:bg-white/10 border-2 border-[#B45309] dark:border-[#F59E0B] shadow-md shadow-[#B45309]/10"
                          : "bg-white/70 dark:bg-white/5 border border-white/80 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10 hover:border-[#B45309]/30"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm sm:text-base font-sans font-semibold text-[#2B211B] dark:text-[#F5EFE6]">
                          {row.label}
                        </span>
                        {isToday && (
                          <span className="text-[10px] font-sans font-bold uppercase tracking-wider bg-gradient-to-r from-[#B45309] to-[#D97706] text-white px-2.5 py-0.5 rounded-full shadow-xs">
                            TODAY
                          </span>
                        )}
                      </div>

                      <span
                        className={`text-xs sm:text-sm font-sans tabular-nums ${
                          row.isClosed
                            ? "text-[#756A61] dark:text-[#A89B90] italic"
                            : isToday
                            ? "text-[#B45309] dark:text-[#F59E0B] font-bold"
                            : "text-[#2B211B] dark:text-[#F5EFE6] font-medium"
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
            <div className="lg:col-span-5 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/90 dark:border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-6 shadow-md">
              <div className="space-y-4">
                <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#B45309] dark:text-[#F59E0B]">
                  VISIT US
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2B211B] dark:text-[#F5EFE6]">
                  Finding Us in Lisbon
                </h3>
                <p className="text-sm text-[#756A61] dark:text-[#C7BBB0] font-sans leading-relaxed">
                  Situated on sun-washed <strong className="font-semibold text-[#2B211B] dark:text-[#F5EFE6]">Rua da Boavista 84</strong>, just a 4-minute stroll from Cais do Sodré, bordering Santos and Bica.
                </p>

                {/* Location Details */}
                <div className="space-y-3 text-xs sm:text-sm font-sans text-[#2B211B] dark:text-[#F5EFE6] pt-2">
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-[#B45309] dark:text-[#F59E0B]">Address:</span>
                    <span>Rua da Boavista 84, 1200-066 Lisboa, Portugal</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-[#B45309] dark:text-[#F59E0B]">Transit:</span>
                    <span>Tram 25E / 28E or Metro Cais do Sodré</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#B45309] dark:text-[#F59E0B]">Phone:</span>
                    <a href="tel:+351211234567" className="hover:text-[#B45309] dark:hover:text-[#F59E0B] font-medium transition-colors">
                      +351 21 123 4567
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#B45309] dark:text-[#F59E0B]">Instagram:</span>
                    <a
                      href="https://instagram.com/cardamomhouse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B45309] dark:hover:text-[#F59E0B] font-medium transition-colors"
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
                className="block text-center bg-gradient-to-r from-[#B45309] via-[#C45A08] to-[#D97706] text-white text-xs font-sans font-bold uppercase tracking-wider py-3.5 px-4 rounded-full shadow-lg shadow-[#B45309]/25 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02] transition-all"
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




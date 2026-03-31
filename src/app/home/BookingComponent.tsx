"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const BookingComponent = () => {
  const [selectedGuests, setSelectedGuests] = useState<string>("2 Guests");

  const guestOptions = ["2 Guests", "4 Guests", "6 Guests", "Group (10+)"];

  return (
    <section className="py-20 px-6 md:px-12 w-full flex justify-center">
      <div className="bg-gamesNeutralLight rounded-[32px] md:rounded-[40px] p-8 md:p-14 w-full max-w-4xl relative overflow-hidden flex flex-col gap-10 shadow-xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-[44px] font-bold font-heading text-white mb-4 tracking-tight">
            Reserve Your Spot
          </h2>
          <p className="text-gray-400 font-sans text-base md:text-[17px]">
            Don't wait in line. Secure your equipment and lounge time in seconds.
          </p>
        </div>
        {/* Form area */}
        <div className="space-y-6">
          {/* Row 1: Dropdowns and Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Activity */}
            <div className="flex flex-col gap-2">
              <label className="text-gamesPrimary text-sm font-bold font-sans">Activity</label>
              <div className="relative">
                <select 
                   className="w-full appearance-none bg-[#08080A] text-white px-5 py-4 h-[56px] rounded-xl border border-transparent focus:border-gamesPrimary focus:outline-none focus:ring-1 focus:ring-gamesPrimary font-sans cursor-pointer"
                   defaultValue="Pool Table"
                >
                  <option value="Pool Table">Pool Table</option>
                  <option value="VIP Lounge">PlayStation</option>
                  <option value="Arcade Access">Ping Pong</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2">
              <label className="text-gamesPrimary text-sm font-bold font-sans">Date</label>
              <div className="relative">
                <input 
                  type="date"
                  style={{ colorScheme: "dark" }}
                  className="w-full bg-[#08080A] text-white px-5 py-4 h-[56px] rounded-xl border border-transparent focus:border-gamesPrimary focus:outline-none focus:ring-1 focus:ring-gamesPrimary font-sans placeholder-gray-500 cursor-pointer [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-60 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Time Slot */}
            <div className="flex flex-col gap-2">
              <label className="text-gamesPrimary text-sm font-bold font-sans">Time Slot</label>
              <div className="relative">
                <select 
                   className="w-full appearance-none bg-[#08080A] text-white px-5 py-4 h-[56px] rounded-xl border border-transparent focus:border-gamesPrimary focus:outline-none focus:ring-1 focus:ring-gamesPrimary font-sans cursor-pointer"
                   defaultValue="18:00 - 19:00"
                >
                  <option value="18:00 - 19:00">18:00 - 19:00</option>
                  <option value="19:00 - 20:00">19:00 - 20:00</option>
                  <option value="20:00 - 21:00">20:00 - 21:00</option>
                  <option value="21:00 - 22:00">21:00 - 22:00</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 2: Guests */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {guestOptions.map((option) => {
              const isActive = selectedGuests === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedGuests(option)}
                  className={`
                    px-6 py-4 rounded-xl font-bold font-sans text-sm transition-all h-[56px] border
                    ${isActive 
                      ? "bg-[#252532] text-gamesPrimary border-white/10" 
                      : "bg-[#08080A] text-gray-400 border-transparent hover:border-white/5 hover:text-gray-300"
                    }
                  `}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Row 3: Submit */}
          <div className="pt-6">
            <button 
              type="button" 
              className="w-full bg-gamesSecondary text-white font-bold font-sans text-[17px] -tracking-[0.2px] py-4 h-[60px] rounded-xl hover:opacity-90 transition-opacity active:scale-[0.99]"
            >
              Confirm Reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingComponent;

import React, { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-04-12T00:00:00"); // Set your target date here
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mt-6 w-full max-w-md">
      {/* Days */}
      <div className="flex flex-col items-center">
        <div className="text-4xl sm:text-6xl font-bold text-blue-500">
          {timeLeft.days}
        </div>
        <div className="text-sm sm:text-base text-gray-700">Days</div>
      </div>
      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="text-4xl sm:text-6xl font-bold text-red-500">
          {timeLeft.hours}
        </div>
        <div className="text-sm sm:text-base text-gray-700">Hours</div>
      </div>
      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="text-4xl sm:text-6xl font-bold text-yellow-500">
          {timeLeft.minutes}
        </div>
        <div className="text-sm sm:text-base text-gray-700">Minutes</div>
      </div>
      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="text-4xl sm:text-6xl font-bold text-green-500">
          {timeLeft.seconds}
        </div>
        <div className="text-sm sm:text-base text-gray-700">Seconds</div>
      </div>
    </div>
  );
};

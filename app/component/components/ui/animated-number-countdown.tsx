"use client";

import React, { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";

const MotionNumberFlow = motion.create(NumberFlow);

interface CountdownProps {
  endDate: Date;
  startDate?: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function AnimatedNumberCountdown({
  endDate,
  startDate,
  className,
}: CountdownProps) {
  const [timeElapsed, setTimeElapsed] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const start = startDate ? new Date(startDate) : new Date();
    const end = new Date(endDate);
    const totalDifference = end.getTime() - start.getTime();

    const calculateElapsed = () => {
      const now = new Date().getTime();
      const elapsed = now - start.getTime();

      if (elapsed < totalDifference && elapsed >= 0) {
        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((elapsed / 1000 / 60) % 60);
        const seconds = Math.floor((elapsed / 1000) % 60);
        setTimeElapsed({ days, hours, minutes, seconds });
      } else if (elapsed >= totalDifference) {
        // reached or passed the target
        const days = Math.floor(totalDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((totalDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((totalDifference / 1000 / 60) % 60);
        const seconds = Math.floor((totalDifference / 1000) % 60);
        setTimeElapsed({ days, hours, minutes, seconds });
      }
    };

    calculateElapsed();
    const timer = setInterval(calculateElapsed, 1000);
    return () => clearInterval(timer);
  }, [endDate, startDate]);

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeElapsed.days}
          className="text-5xl font-semibold tracking-tighter"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Days</span>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeElapsed.hours}
          className="text-5xl font-semibold tracking-tighter"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Hours</span>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeElapsed.minutes}
          className="text-5xl font-semibold tracking-tighter"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Minutes</span>
      </div>
      <div className="text-2xl font-bold">:</div>
      <div className="flex flex-col items-center">
        <MotionNumberFlow
          value={timeElapsed.seconds}
          className="text-5xl font-semibold tracking-tighter"
          format={{ minimumIntegerDigits: 2 }}
        />
        <span className="text-sm text-gray-500">Seconds</span>
      </div>
    </div>
  );
}

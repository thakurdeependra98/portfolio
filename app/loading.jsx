"use client";
import GradientText from "../components/ui/GradientText";
import CountUp from "../components/ui/CountUp";
import { useEffect, useState } from "react";

export default function LoadingPage({ onFinish, speed = 20 }) {
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
      // setHide(true); // This will be controlled by the parent now
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      aria-hidden={hide}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-green-600 transition-all duration-700 ease-out ${
        hide ? "-translate-y-8 opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="animate-spin w-12 h-12 border-4 border-gray-300 border-t-black rounded-full"
          aria-hidden
        />
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-5xl font-bold"
          />
        </GradientText>
      </div>
    </div>
  );
}

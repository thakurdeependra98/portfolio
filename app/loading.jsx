"use client";
import GradientText from "../components/ui/GradientText";
import CountUp from "../components/ui/CountUp";
import { useEffect, useState, useCallback } from "react";
import DecryptedText from "../components/ui/DecryptedText";

export default function LoadingPage({ onFinish }) {
  const [isFinished, setIsFinished] = useState(false);
  const countUpDuration = 1; // Duration in seconds, should match CountUp component

  const handleLoadingFinish = useCallback(() => {
    setIsFinished(true);
    if (onFinish) {
      onFinish();
    }
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-transform ease-in bg-[#000000ef] ${
        isFinished ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="text-xl font-light tracking-widest text-white">Loading...</div>
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
            duration={countUpDuration}
            className="count-up-text text-7xl font-bold"
            onEnd={handleLoadingFinish}
          />
        </GradientText>
      </div>
    </div>
  );
}

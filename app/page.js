"use client";
import { useState } from "react";
import SplitText from "../components/ui/SplitText";
import LoadingPage from "./loading";

const Page = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* show loader until it calls onFinish */}
      {!loadingDone && (
        <LoadingPage
          // optional: make loader slightly slower/faster
          speed={18}
          onFinish={() => {
            setLoadingDone(true);
          }}
        />
      )}

      {/* main content — render after loader done */}
      {loadingDone && (
        <SplitText
          text="Hello, GSAP!"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      )}
    </div>
  );
};

export default Page;

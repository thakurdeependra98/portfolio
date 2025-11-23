"use client";
import { useState } from "react";
import LoadingPage from "./loading";
import Home from "./home/page";
import Hero from "../components/common/Hero";
import SplashCursor from "../components/ui/SplashCursor";
import About from "./about/page";

const Page = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <div className="flex justify-center items-center bg-[#000000ef]">
      {!loadingDone && (
        <LoadingPage
          onFinish={() => {
            setLoadingDone(true);
          }}
        />
      )}

      {loadingDone && (
      <div>
        <Hero />
        {/* <Home /> */}
        <SplashCursor />
        <About/>
      </div>
      )}
    </div>
  );
};

export default Page;

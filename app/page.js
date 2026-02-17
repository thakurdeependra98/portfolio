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
    <div className="relative w-full min-h-screen bg-black">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-green-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
      </div>

      <div className="relative z-10">
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
    </div>
  );
};

export default Page;

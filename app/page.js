"use client";
import { useState, useRef } from "react";
import LoadingPage from "./loading";
import Home from "./home/page";
import SplashCursor from "../components/ui/SplashCursor";
import About from "./about/page";
import Service from "./service/page";
import Project from "./project/page";
import Experience from "./experience/page";

const getInitialLoadingDone = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const navigationType = window.performance?.getEntriesByType?.("navigation")?.[0]?.type;

  if (navigationType === "reload") {
    return false;
  }

  return Boolean(sessionStorage.getItem("portfolio_loaded"));
};

const Page = () => {
  const [loadingDone, setLoadingDone] = useState(getInitialLoadingDone);
  const containerRef = useRef(null);

  const handleLoadingFinish = () => {
    sessionStorage.setItem("portfolio_loaded", "true");
    setLoadingDone(true);
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-[#000000ef] text-white">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-green-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/50"></div>
      </div>

      <div className="relative z-10">
        {!loadingDone && (
          <LoadingPage onFinish={handleLoadingFinish} />
        )}

        {loadingDone && (
          <div>
            <Home />
            <div>
              <SplashCursor />
            </div>
            <div>
              <About />
            </div>
            <Service />
            <Experience />
            <Project />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

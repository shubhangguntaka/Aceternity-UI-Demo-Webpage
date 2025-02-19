"use client";
import React from "react";
import WavyBackgroundDemo from "./components/ui/wavy-background";
import LayoutGridDemo from "./components/ui/layout-grid";
import dynamic from "next/dynamic";
import AppleCardsCarouselDemo, { Carousel, Card } from "./components/ui/apple-cards-carousel";
import TextRevealCardPreview from "./components/ui/text-reveal-card";
const FloatingNavDemo = dynamic(() => import("./components/ui/floating-navbar"), {
  ssr: false,
});

export default function MyHome() {
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return (
    <div className="relative  w-full bg-black">
      <FloatingNavDemo />
      <div id="Home"><WavyBackgroundDemo /></div>
      <div id="Projects"><LayoutGridDemo /></div>
      <div id="Photos"><AppleCardsCarouselDemo /></div>
      <div id="End"><TextRevealCardPreview /></div>
    </div>
  );
}

import React from "react";
import Hero from "../components/home/Hero";
import HomeNewDrops from "../components/home/HomeNewDrops";
import HomeCategories from "../components/home/HomeCategories";
import HomeReview from "@/components/home/HomeReview";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <HomeNewDrops />
      <HomeCategories />
      <HomeReview />
    </div>
  );
}

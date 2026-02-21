import React from "react";
import Hero from "../components/home/Hero";
import HomeNewDrops from "../components/home/HomeNewDrops";
import HomeCategories from "../components/home/HomeCategories";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <HomeNewDrops />
      <HomeCategories />
    </div>
  );
}

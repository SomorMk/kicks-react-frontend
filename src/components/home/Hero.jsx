import React from "react";
import Container from "../common/Container";
import HeroShowcase from "./HeroShowcase";

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="flex justify-center">
          <h1 className="text-5xl sm:text-[90px] md:text-[120px] lg:text-[160px] xl:text-[200px] 2xl:text-[240px] leading-[100%] font-bold font-rubik uppercase">
            <span className="text-neutral-800">Do it </span>
            <span className="text-primary">right</span>
          </h1>
        </div>

        <div>
          <HeroShowcase />
        </div>
      </Container>
    </section>
  );
}

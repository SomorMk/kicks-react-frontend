import React from "react";
import Container from "../common/Container";
import HeroShowcase from "./HeroShowcase";

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="flex justify-center">
          <h1 className="text-[235px] leading-[100%] font-bold font-rubik uppercase">
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

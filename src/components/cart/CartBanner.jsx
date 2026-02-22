import React from "react";
import Container from "../common/Container";

export default function CartBanner() {
  return (
    <section className="py-8">
      <Container>
        <div className="flex flex-col gap-4">
          <div className="text-neutral-800 text-3xl font-semibold font-rubik">
            Saving to celebrate{" "}
          </div>

          <p className="text-secondary/70 text-sm md:text-base max-w-2xl leading-relaxed ">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.{" "}
            <button className="text-secondary/80 font-medium underline underline-offset-2 hover:text-primary transition-colors cursor-pointer">
              Join us
            </button>{" "}
            or{" "}
            <button className="text-secondary/80 font-medium underline underline-offset-2 hover:text-primary transition-colors cursor-pointer">
              Sign-in
            </button>
          </p>
        </div>
      </Container>
    </section>
  );
}

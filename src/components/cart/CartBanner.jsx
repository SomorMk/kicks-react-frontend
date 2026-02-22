import React from "react";
import Container from "../common/Container";

export default function CartBanner() {
  return (
    <section className="py-6 md:py-8">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="text-neutral-800 text-2xl sm:text-3xl font-semibold font-rubik">
            Saving to celebrate{" "}
          </div>

          <p className="text-secondary/70 text-sm md:text-base max-w-2xl leading-relaxed">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.{" "}
            <button className="text-secondary/80 font-medium underline underline-offset-2 hover:text-primary transition-colors cursor-pointer active:opacity-70">
              Join us
            </button>{" "}
            or{" "}
            <button className="text-secondary/80 font-medium underline underline-offset-2 hover:text-primary transition-colors cursor-pointer active:opacity-70">
              Sign-in
            </button>
          </p>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import Container from "@/components/common/Container";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-[#e7e7e3] py-10 font-rubik overflow-hidden">
      <Container className="px-4 text-center">
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-16 rounded-[48px] shadow-lg flex flex-col items-center gap-6 md:gap-8 relative">
          {/* Success Icon */}
          <div className="bg-primary/10 p-6 rounded-full">
            <CheckCircle size={64} className="text-primary" />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-secondary leading-[0.9] tracking-tighter">
              Thank you!
            </h1>
            <p className="text-secondary/60 text-base sm:text-lg md:text-xl font-medium max-w-sm mx-auto">
              Your order has been confirmed and is being processed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Link
              to="/"
              className="bg-secondary text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-black active:scale-95 transition-all text-xs sm:text-sm text-center"
            >
              Back to Home
            </Link>
          </div>

          {/* Decorative element */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
        </div>
      </Container>
    </div>
  );
}

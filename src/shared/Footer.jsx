import React from "react";
import logoWithPlus from "../assets/Images/logo-with-plus.png";
import logoHalf from "../assets/Images/logo-half.png";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="w-full font-rubik mt-20">
      <Container>
        {/* Top Section: Signup CTA */}
        <div className="bg-primary rounded-t-[48px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="flex flex-col gap-6 max-w-2xl z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase leading-tight">
              Join our KicksPlus Club & get 15% off
            </h2>
            <p className="text-white/80 text-lg">
              Sign up for free! Join the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-white/30 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white w-full sm:w-80"
              />
              <button className="bg-secondary text-white font-bold py-4 px-10 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all">
                Submit
              </button>
            </div>
          </div>
          <div className="z-10">
            <img src={logoWithPlus} alt="Kicks+" className="w-48 md:w-64" />
          </div>
          {/* Subtle decorative elements can go here if needed */}
        </div>

        {/* Bottom Section: Main Links Area */}
        <div className="bg-secondary rounded-t-[48px] -mt-12 pt-24 pb-12 px-4 md:px-10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {/* About Us */}
            <div className="flex flex-col gap-6">
              <h3 className="text-accent text-2xl font-bold">About us</h3>
              <p className="text-white/80 leading-relaxed">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-col gap-4">
              <h3 className="text-accent text-2xl font-bold">Categories</h3>
              <div className="flex flex-col gap-3">
                {[
                  "Runners",
                  "Sneakers",
                  "Basketball",
                  "Outdoor",
                  "Golf",
                  "Hiking",
                ].map((cat) => (
                  <a
                    key={cat}
                    href="#"
                    className="text-white hover:text-accent transition-colors"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h3 className="text-accent text-2xl font-bold">Company</h3>
              <div className="flex flex-col gap-3">
                {["About", "Contact", "Blogs"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-4">
              <h3 className="text-accent text-2xl font-bold">Follow us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-white hover:text-accent transition-colors"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-accent transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-accent transition-colors"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-accent transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.03 2.51-.01 5-.02 7.51a8.14 8.14 0 0 1-2.4 5.76 8.21 8.21 0 0 1-13.34-3.12c-.22-.64-.32-1.3-.35-1.97-.04-1.74.45-3.48 1.44-4.91 1.27-1.9 3.48-3.08 5.74-3.14V14.6c-1.35.08-2.67.75-3.41 1.88a4.11 4.11 0 0 0-.21 4.49 4.18 4.18 0 0 0 2.92 2.14c.64.1 1.29.09 1.93-.03 1.07-.18 2.05-.79 2.69-1.68.51-.71.74-1.58.74-2.46.03-3.66.01-7.32.02-10.98V.02z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Large Background Logo */}
          <div className="w-full flex justify-center select-none pointer-events-none">
            <img
              src={logoHalf}
              alt=""
              className="w-[120%] h-auto object-contain translate-y-20"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}

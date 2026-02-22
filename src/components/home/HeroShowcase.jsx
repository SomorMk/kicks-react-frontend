import { useState } from "react";
import HeroBg from "@/assets/Images/hero-op-1.png";
import HeroBg2 from "@/assets/Images/hero-op-2.jpg";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    src: HeroBg,
    thumb: HeroBg,
  },
  {
    id: 2,
    src: HeroBg2,
    thumb: HeroBg2,
  },
];

export default function HeroShowcase() {
  const [activeImg, setActiveImg] = useState(images[0]);

  return (
    <div className="flex items-center justify-center py-6 md:py-10 font-sans w-full">
      <div className="relative w-full overflow-hidden shadow-2xl transition-all duration-500 rounded-3xl md:rounded-[50px]">
        <div className="relative w-full aspect-8/10 md:aspect-16/7 rounded-3xl md:rounded-[50px] overflow-hidden bg-neutral-900">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
            style={{ backgroundImage: `url(${activeImg.src})` }}
          />

          {/* Dark overlay gradient for text readability */}
          <div className="hidden md:block absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent md:from-black/20 md:via-black/5 md:to-transparent" />

          {/* Side label - Hidden on mobile to save space */}
          <div className="absolute -top-10 left-0 h-full items-center hidden md:flex">
            <div
              className="bg-neutral-800/90 backdrop-blur-sm tracking-widest uppercase px-3 py-4 rounded-bl-2xl rounded-tl-2xl text-stone-200 text-xs font-semibold font-rubik border-r border-white/10"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                letterSpacing: "0.15em",
              }}
            >
              Nike product of the year
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-0 md:p-8 pl-5 md:pl-14 pb-5 md:pb-12">
            <h2 className="text-white text-2xl sm:text-5xl md:text-7xl font-semibold font-rubik leading-tight drop-shadow-lg">
              NIKE AIR MAX
            </h2>

            <p className="mt-2 md:mt-4 max-w-60/100 md:max-w-[450px] text-stone-200 text-sm md:text-xl font-medium font-open-sans line-clamp-3">
              Nike introducing the new air max for everyone&apos;s comfort
            </p>

            <Link
              to={"#"}
              className="mt-4 md:mt-6 w-fit bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all px-6 py-3 rounded-md md:rounded-sm shadow-lg text-white text-sm font-medium font-['Rubik'] uppercase tracking-wide"
            >
              Shop Now
            </Link>
          </div>

          {/* Thumbnail stack */}
          <div className="absolute right-4 bottom-4 md:right-5 md:bottom-5 flex flex-col gap-2 md:gap-3 z-20">
            {images.map((img) => (
              <button
                key={img.id}
                onClick={() => setActiveImg(img)}
                className={`rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-xl focus:outline-none 
              ${
                activeImg.id === img.id
                  ? "border-white scale-105 shadow-white/30"
                  : "border-white/40 hover:border-white hover:scale-105 opacity-80 hover:opacity-100"
              }
              size-15 md:size-24
            `}
              >
                <img
                  src={img.thumb}
                  alt={`View ${img.id}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

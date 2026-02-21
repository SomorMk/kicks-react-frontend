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
    <div className="flex items-center justify-center py-6 font-sans">
      <div
        className="relative w-full rounded-[50px] overflow-hidden shadow-2xl"
        style={{ aspectRatio: "16/7" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${activeImg.src})` }}
        />

        {/* Dark overlay gradient for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-black/5 to-transparent" />

        {/* Side label */}
        <div className="absolute -top-30 left-0 h-full flex items-center">
          <div
            className="bg-neutral-800 tracking-widest uppercase px-3 py-4 rounded-bl-2xl rounded-tl-2xl text-stone-200 text-xs font-semibold font-rubik"
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
        <div className="relative z-10 h-full flex flex-col justify-end gap-5 p-8 pl-14">
          <h2 className="text-white text-7xl font-semibold font-rubik">
            NIKE AIR MAX
          </h2>

          <p className="max-w-[450px] text-stone-200 text-xl font-medium font-open-sans">
            Nike introducing the new air max for everyone&apos;s comfort
          </p>

          <Link
            to={"#"}
            className="w-fit bg-indigo-500 active:scale-95 transition-all px-6 py-3 rounded-sm shadow-lg text-white text-sm font-medium font-['Rubik'] uppercase"
          >
            Shop Now
          </Link>
        </div>

        {/* Thumbnail stack */}
        <div className="absolute right-5 bottom-5 flex flex-col gap-3 z-10">
          {images.map((img) => (
            <button
              key={img.id}
              onClick={() => setActiveImg(img)}
              className={`size-24 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-xl focus:outline-none ${
                activeImg.id === img.id
                  ? "border-white scale-105 shadow-white/30"
                  : "border-white/40 hover:border-white hover:scale-105 opacity-80 hover:opacity-100"
              }`}
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
  );
}

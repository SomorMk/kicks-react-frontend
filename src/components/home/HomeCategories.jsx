import { useState, useEffect } from "react";
import Container from "../common/Container";
import useGetCategories from "@/hooks/categories/useGetAategories";

const DESKTOP_VISIBLE = 2;
const MOBILE_VISIBLE = 1;

export default function HomeCategories() {
  // Common States
  const [startIndex, setStartIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Categories Data Hook
  const { categoriesList, isCategoriesLoading, isCategoriesError } =
    useGetCategories();

  // Visible Count
  const visibleCount = isMobile ? MOBILE_VISIBLE : DESKTOP_VISIBLE;

  // Mobile Viewport Detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Sliding Logic
  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < (categoriesList?.length || 0);

  const slide = (dir) => {
    if (sliding) return;
    if (dir === "prev" && !canPrev) return;
    if (dir === "next" && !canNext) return;

    setDirection(dir);
    setSliding(true);

    setTimeout(() => {
      setStartIndex((i) => (dir === "next" ? i + 1 : i - 1));
      setSliding(false);
      setDirection(null);
    }, 400);
  };

  // Visible Items
  const visible = categoriesList?.slice(startIndex, startIndex + visibleCount);

  // Translations
  const exitTranslate = direction === "next" ? "-100%" : "100%";
  const enterTranslate = direction === "next" ? "100%" : "-100%";

  return (
    <section className="w-full bg-[#1a1a1a]">
      {/* Note for Zavisoft Reviewer: I am little bit poor about animation so I used inline style */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(var(--enter-x)); opacity: 0; }
          to   { transform: translateX(0);              opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateX(0);             opacity: 1; }
          to   { transform: translateX(var(--exit-x)); opacity: 0; }
        }
        .card-enter {
          animation: slideIn 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .card-exit {
          animation: slideOut 0.4s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>

      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-4 md:px-8 pt-6 md:pt-[90px] pb-4 md:pb-[60px]">
          <h2 className="text-white text-3xl md:text-6xl font-semibold font-rubik uppercase leading-[0.95] md:leading-[0.9]">
            Categories
          </h2>

          <div className="flex gap-2 self-start md:self-auto">
            <button
              onClick={() => slide("prev")}
              disabled={!canPrev || sliding}
              aria-label="Previous categories"
              className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition-all
              ${
                canPrev && !sliding
                  ? "border-neutral-500 text-white hover:bg-white hover:text-black"
                  : "border-neutral-700 text-neutral-600 cursor-not-allowed"
              }`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              onClick={() => slide("next")}
              disabled={!canNext || sliding}
              aria-label="Next categories"
              className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition-all
              ${
                canNext && !sliding
                  ? "border-neutral-500 text-white hover:bg-white hover:text-black"
                  : "border-neutral-700 text-neutral-600 cursor-not-allowed"
              }`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Area */}
        <div className="relative px-4 md:px-8 pb-0 overflow-hidden">
          <div
            className="grid gap-0 overflow-hidden"
            style={{
              gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
              borderRadius: "1.5rem 1.5rem 0 0",
              backgroundColor: "#efefef",
            }}
          >
            {visible?.map((cat, idx) => (
              <div
                key={cat?.id}
                className={
                  direction ? (idx === 0 ? "card-exit" : "card-enter") : ""
                }
                style={{
                  "--enter-x": enterTranslate,
                  "--exit-x": exitTranslate,
                }}
              >
                <CategoryCard
                  cat={cat}
                  borderRight={idx < visibleCount - 1}
                  isMobile={isMobile}
                />
              </div>
            ))}
          </div>
        </div>

        {isCategoriesError && (
          <div className="text-center py-8 text-neutral-400 font-rubik px-4 md:px-8">
            Failed to load categories. Please try again.
          </div>
        )}
      </Container>
    </section>
  );
}

function CategoryCard({ cat, borderRight, isMobile }) {
  return (
    <div
      className={`relative flex flex-col ${borderRight ? "border-r border-neutral-300" : ""}`}
      style={{ minHeight: isMobile ? "400px" : "520px" }}
    >
      {/* Shoe image */}
      <div
        className={`w-full flex-1 flex items-center justify-center ${isMobile ? "max-h-[320px]" : "max-h-[460px]"}`}
      >
        <img
          src={cat?.image}
          alt={cat?.name?.replace("\n", " ")}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Footer row */}
      <div className="flex items-end justify-between px-4 md:px-6 pb-4 md:pb-6 absolute bottom-0 left-0 w-full">
        <h3 className="font-black uppercase text-neutral-900 leading-tight whitespace-pre-line text-sm md:text-base">
          {cat?.name}
        </h3>

        <button className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-neutral-900 hover:bg-neutral-700 active:scale-95 transition-all flex items-center justify-center shrink-0 ml-3 md:ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M10.1668 9.10565H22.8947V21.8336M22.0108 9.98954L9.10615 22.8942"
              stroke="#E7E7E3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import Container from "../common/Container";
import useGetCategories from "@/hooks/categories/useGetAategories";

const VISIBLE = 2;

export default function HomeCategories() {
  // Common States
  const [startIndex, setStartIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(null);

  // Categories Data Hook
  const { categoriesList, isCategoriesLoading, isCategoriesError } =
    useGetCategories();

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < categoriesList?.length;

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

  const visible = categoriesList?.slice(
    startIndex + 1,
    startIndex + 1 + VISIBLE,
  );

  // slide-out: cards exit opposite to nav direction
  // slide-in: new cards enter from the nav direction
  const exitTranslate = direction === "next" ? "-100%" : "100%";
  const enterTranslate = direction === "next" ? "100%" : "-100%";

  return (
    <section className="w-full bg-[#1a1a1a]">
      {/* Inject keyframes */}
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
        {/* Dark header bar */}
        <div className="flex items-center justify-between px-8 pt-[90px] pb-[60px]">
          <h2 className="text-white text-6xl font-semibold font-rubik uppercase">
            Categories
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => slide("prev")}
              disabled={!canPrev || sliding}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all
              ${
                canPrev && !sliding
                  ? "border-neutral-500 text-white hover:bg-white hover:text-black"
                  : "border-neutral-700 text-neutral-600 cursor-not-allowed"
              }`}
            >
              <svg
                width="16"
                height="16"
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
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all
              ${
                canNext && !sliding
                  ? "border-neutral-500 text-white hover:bg-white hover:text-black"
                  : "border-neutral-700 text-neutral-600 cursor-not-allowed"
              }`}
            >
              <svg
                width="16"
                height="16"
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

        {/* Cards area */}
        <div className="relative px-8 pb-0 overflow-hidden">
          <div
            className="grid gap-0 overflow-hidden"
            style={{
              gridTemplateColumns: `repeat(${VISIBLE}, 1fr)`,
              borderRadius: "1.5rem 1.5rem 0 0",
              backgroundColor: "#efefef",
            }}
          >
            {visible?.map((cat, idx) => (
              <div
                key={cat?.id}
                className={`${direction ? "card-enter" : ""}`}
                style={{
                  "--enter-x": enterTranslate,
                  "--exit-x": exitTranslate,
                }}
              >
                <CategoryCard cat={cat} borderRight={idx < VISIBLE - 1} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CategoryCard({ cat, borderRight }) {
  return (
    <div
      className={`relative flex flex-col ${borderRight ? "border-r border-neutral-300" : ""}`}
      style={{ minHeight: "520px" }}
    >
      {/* Shoe image */}
      <div className="w-full max-h-[460px] flex-1 flex items-center justify-center">
        <img
          src={cat.image}
          alt={cat.name.replace("\n", " ")}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer row */}
      <div className="flex items-end justify-between px-6 pb-6 absolute bottom-0 left-0 w-full">
        <h3 className="font-black uppercase text-neutral-900 leading-tight whitespace-pre-line">
          {cat.name}
        </h3>

        <button className="w-10 h-10 rounded-lg bg-neutral-900 hover:bg-neutral-700 active:scale-95 transition-all flex items-center justify-center shrink-0 ml-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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

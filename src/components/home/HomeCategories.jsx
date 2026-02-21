import { useState } from "react";
import ProductImg1 from "../../assets/images/categories-1.png";
import ProductImg2 from "../../assets/images/categories-2.png";
import Container from "../common/Container";

const categories = [
  {
    id: 1,
    name: "Lifestyle\nShoes",
    image: ProductImg1,
  },
  {
    id: 2,
    name: "Basketball\nShoes",
    image: ProductImg2,
  },
  {
    id: 3,
    name: "Running\nShoes",
    image: ProductImg1,
  },
  {
    id: 4,
    name: "Training\nShoes",
    image: ProductImg2,
  },
  {
    id: 5,
    name: "Soccer\nShoes",
    image: ProductImg1,
  },
  {
    id: 6,
    name: "Outdoor\nShoes",
    image: ProductImg2,
  },
];

const VISIBLE = 2;

export default function HomeCategories() {
  const [startIndex, setStartIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(null); // 'left' | 'right'

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < categories.length;

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

  const visible = categories.slice(startIndex, startIndex + VISIBLE);

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
      </Container>

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
          {visible.map((cat, idx) => (
            <div
              key={cat.id}
              className={direction ? "card-enter" : ""}
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
      <div className="flex-1 flex items-center justify-center px-10 pt-10 pb-4">
        <img
          src={cat.image}
          alt={cat.name.replace("\n", " ")}
          className="w-full object-contain"
          style={{ maxHeight: "260px" }}
        />
      </div>

      {/* Footer row */}
      <div className="flex items-end justify-between px-6 pb-6">
        <h3
          className="font-black uppercase text-neutral-900 leading-tight whitespace-pre-line"
          style={{ fontSize: "1.35rem" }}
        >
          {cat.name}
        </h3>
        <button className="w-10 h-10 rounded-lg bg-neutral-900 hover:bg-neutral-700 active:scale-95 transition-all flex items-center justify-center shrink-0 ml-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </button>
      </div>
    </div>
  );
}

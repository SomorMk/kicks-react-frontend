import React, { useRef, useState } from "react";
import ProductCard from "../common/ProductCard";
import Container from "../common/Container";
import useGetProducts from "@/hooks/products/useGetProducts";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RelatedProducts({ currentProductId }) {
  // Products Hook
  const { products, isProductsLoading, isProductsError } = useGetProducts();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter out the current product and limit to 12
  const relatedProducts = products
    ?.filter((p) => p.id !== currentProductId)
    ?.slice(0, 12);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const gap = 24;
      const scrollAmount = containerWidth + gap;

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.clientWidth;
      const index = Math.round(scrollLeft / (containerWidth + 24));
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-12 bg-[#e7e7e3]">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-rubik font-bold uppercase text-secondary">
            You may also like
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 flex items-center justify-center bg-[#C8C8C3] hover:bg-[#b0b0ad] transition-colors rounded-lg"
              aria-label="Previous products"
            >
              <ChevronLeft size={24} className="text-secondary" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-black transition-colors rounded-lg"
              aria-label="Next products"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-hidden gap-4 md:gap-6 no-scrollbar pb-8 snap-x snap-mandatory"
        >
          {isProductsLoading && !isProductsError
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-18px)] shrink-0"
                >
                  <ProductCardSkeleton />
                </div>
              ))
            : relatedProducts?.map((product) => (
                <div
                  key={product?.id}
                  className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-18px)] shrink-0 snap-start"
                >
                  <ProductCard product={product} />
                </div>
              ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-start sm:justify-center mt-4">
          <div className="flex gap-2 h-1.5 items-center">
            {Array.from({
              length: Math.ceil((relatedProducts?.length || 0) / 4),
            }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "w-14 bg-primary" : "w-14 bg-[#C8C8C3]"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

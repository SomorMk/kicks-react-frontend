import React, { useEffect, useRef, useState } from "react";
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
  const [productsPerView, setProductsPerView] = useState(1);

  // Filter out the current product and limit to 12
  const relatedProducts = products
    ?.filter((p) => p.id !== currentProductId)
    ?.slice(0, 12);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.clientWidth;
      const index = Math.round(scrollLeft / (containerWidth + 24));
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const updateProductsPerView = () => {
      if (window.innerWidth >= 1024) setProductsPerView(4);
      else if (window.innerWidth >= 640) setProductsPerView(2);
      else setProductsPerView(1);
    };

    updateProductsPerView();
    window.addEventListener("resize", updateProductsPerView);
    return () => window.removeEventListener("resize", updateProductsPerView);
  }, []);

  // Update scroll function to use productsPerView
  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth / productsPerView;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 md:py-12 bg-[#e7e7e3]">
      <Container className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-rubik font-bold uppercase text-secondary leading-tight">
            You may also like
          </h2>
          <div className="flex gap-2 self-start sm:self-auto">
            <button
              onClick={() => scroll("left")}
              disabled={activeIndex === 0}
              className="w-10 h-10 flex items-center justify-center bg-[#C8C8C3] hover:bg-[#b0b0ad] disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-lg active:scale-95"
              aria-label="Previous products"
            >
              <ChevronLeft size={20} className="text-secondary sm:size-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={
                activeIndex >=
                Math.ceil((relatedProducts?.length || 0) / productsPerView) - 1
              }
              className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-lg active:scale-95"
              aria-label="Next products"
            >
              <ChevronRight size={20} className="text-white sm:size-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-6 no-scrollbar pb-8 snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {isProductsLoading && !isProductsError
            ? Array.from({ length: productsPerView }).map((_, index) => (
                <div
                  key={index}
                  className="w-[calc(100%-12px)] sm:w-[calc(50%-16px)] lg:w-[calc(25%-18px)] shrink-0 snap-center"
                >
                  <ProductCardSkeleton />
                </div>
              ))
            : relatedProducts?.map((product) => (
                <div
                  key={product?.id}
                  className="w-[calc(100%-12px)] sm:w-[calc(50%-16px)] lg:w-[calc(25%-18px)] shrink-0 snap-center"
                >
                  <ProductCard product={product} />
                </div>
              ))}
        </div>

        {/* Indicators - Dynamic based on productsPerView */}
        <div className="flex justify-start sm:justify-center mt-2 md:mt-4 px-4 sm:px-0">
          <div className="flex gap-2 h-1.5 items-center">
            {Array.from({
              length: Math.ceil(
                (relatedProducts?.length || 0) / productsPerView,
              ),
            }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-8 sm:w-14 bg-primary"
                    : "w-8 sm:w-14 bg-[#C8C8C3]"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import ProductCard from "../common/ProductCard";
import Container from "../common/Container";
import useGetProducts from "@/hooks/products/useGetProducts";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

export default function HomeNewDrops() {
  // Get products from API
  const { products, isProductsLoading, isProductsError } = useGetProducts();

  // Calculate skeleton count based on screen size
  const skeletonCount =
    typeof window !== "undefined" && window.innerWidth < 640 ? 2 : 4;

  return (
    <section className="py-10 md:py-16 lg:py-20">
      <Container className="px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-rubik font-bold uppercase leading-[0.95] md:leading-[0.9] text-secondary">
            Don't miss out <br className="hidden sm:block" /> New Drops
          </h2>

          <button className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-rubik font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#3b55c2] transition-colors self-start md:self-auto active:scale-95">
            Shop New Drops
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {!isProductsLoading &&
            !isProductsError &&
            products
              ?.slice(0, 8)
              ?.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}

          {isProductsLoading && !isProductsError && (
            <>
              {Array.from({ length: skeletonCount }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </>
          )}

          {isProductsError && (
            <div className="col-span-full text-center py-12 text-neutral-500 font-rubik">
              Failed to load products. Please try again.
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

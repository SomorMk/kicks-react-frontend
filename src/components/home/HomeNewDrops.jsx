import React from "react";
import ProductCard from "../common/ProductCard";
import Container from "../common/Container";
import useGetProducts from "@/hooks/products/useGetProducts";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

export default function HomeNewDrops() {
  // Products from API
  const { products, isProductsLoading, isProductsError } = useGetProducts();

  return (
    <section className="py-8 md:py-0">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-rubik font-bold uppercase leading-[0.9] text-secondary">
            Don't miss out <br /> New Drops
          </h2>
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-rubik font-semibold text-sm uppercase tracking-wider hover:bg-[#3b55c2] transition-colors self-start md:self-auto">
            Shop New Drops
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products?.slice(0, 8)?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}

          {isProductsLoading &&
            !isProductsError &&
            Array.from({ length: 4 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
        </div>

        {/* {products?.length > 8 && (
          <div className="flex justify-center mt-10">
            <button className="bg-primary text-white px-12 py-4 rounded-lg font-rubik font-semibold text-sm uppercase tracking-wider hover:bg-[#3b55c2] transition-colors">
              View All
            </button>
          </div>
        )} */}
      </Container>
    </section>
  );
}

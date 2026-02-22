import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 group">
      {/* Image Container */}
      <div className="relative aspect-square bg-[#ECEEF0] rounded-2xl md:rounded-[28px] flex items-center justify-center overflow-hidden border-4 sm:border-8 border-white shadow-sm">
        {/* "New" Badge - Responsive sizing */}
        <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#4A69E2] text-white text-[10px] sm:text-xs font-rubik font-semibold px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-br-lg sm:rounded-br-[16px] rounded-tl-lg sm:rounded-tl-[16px] z-20">
          New
        </span>

        {/* Primary Image */}
        <img
          src={product?.images?.[0]}
          alt={product?.title}
          className="w-full h-full object-contain absolute inset-0 transition-all duration-500 ease-in-out transform-gpu group-hover:scale-105 opacity-100 group-hover:opacity-0"
          loading="lazy"
        />

        {/* Hover Image */}
        <img
          src={product?.images?.[1]}
          alt={product?.title}
          className="w-full h-full object-contain absolute inset-0 transition-all duration-500 ease-in-out transform-gpu group-hover:scale-105 opacity-0 group-hover:opacity-100"
          loading="lazy"
        />
      </div>

      {/* Product Title */}
      <h3 className="text-base sm:text-lg md:text-xl font-rubik font-semibold uppercase leading-tight text-secondary line-clamp-1 min-h-6 sm:min-h-7">
        {product?.title}
      </h3>

      {/* CTA Button */}
      <Link
        to={`/product/${product?.id}`}
        className="w-full bg-secondary text-white py-2.5 sm:py-3 md:py-4 rounded-lg font-rubik font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider hover:bg-[#323230] transition-colors inline-block text-center active:scale-[0.98]"
      >
        View Product — <span className="text-[#FFA52F]">${product?.price}</span>
      </Link>
    </div>
  );
};

export default ProductCard;

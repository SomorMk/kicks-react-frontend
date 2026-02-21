import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col gap-4 group">
      <div className="relative aspect-square bg-[#ECEEF0] rounded-[28px] flex items-center justify-center overflow-hidden border-8 border-white">
        <span className="absolute top-0 left-0 bg-[#4A69E2] text-white text-xs font-rubik font-semibold px-4 py-2 rounded-br-[16px] rounded-tl-[16px] z-20">
          New
        </span>

        <img
          src={product?.images[0]}
          alt={product?.title}
          className="w-full h-full object-contain absolute inset-0 transition-all duration-500 ease-in-out transform-gpu group-hover:scale-105 opacity-100 group-hover:opacity-0"
        />

        <img
          src={product?.images[1]}
          alt={product?.title}
          className="w-full h-full object-contain absolute inset-0 transition-all duration-500 ease-in-out transform-gpu group-hover:scale-105 opacity-0 group-hover:opacity-100"
        />
      </div>

      <h3 className="text-xl md:text-xl font-rubik font-semibold uppercase leading-tight text-secondary line-clamp-1">
        {product?.title}
      </h3>

      <Link
        to={`/product/${product?.id}`}
        className="w-full bg-secondary text-white py-4 rounded-lg font-rubik font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#323230] transition-colors inline-block text-center"
      >
        View Product — <span className="text-[#FFA52F]">${product?.price}</span>
      </Link>
    </div>
  );
};

export default ProductCard;

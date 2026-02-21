import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 group animate-pulse">
      <div className="relative aspect-square bg-[#ECEEF0] rounded-[28px] flex items-center justify-center overflow-hidden border-8 border-white">
        <div className="absolute top-0 left-0 bg-gray-300 text-xs font-rubik font-semibold px-4 py-2 rounded-br-[16px] rounded-tl-[16px] z-20 w-16 h-8"></div>

        <div className="w-full h-full bg-gray-200 absolute inset-0"></div>
      </div>

      <div className="h-8 bg-gray-300 rounded w-3/4"></div>

      <div className="w-full bg-gray-300 py-4 rounded-lg h-12"></div>
    </div>
  );
};

export default ProductCardSkeleton;

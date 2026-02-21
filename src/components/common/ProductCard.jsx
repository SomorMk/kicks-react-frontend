import React from "react";

const ProductCard = ({ image, name, price, isNew }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square bg-[#ECEEF0] rounded-[28px] p-4 flex items-center justify-center overflow-hidden border-8 border-white">
        {isNew && (
          <span className="absolute top-0 left-0 bg-[#4A69E2] text-white text-xs font-rubik font-semibold px-4 py-2 rounded-br-[16px] rounded-tl-[16px]">
            New
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-rubik font-semibold uppercase leading-tight text-secondary">
        {name}
      </h3>
      <button className="w-full bg-secondary text-white py-4 rounded-lg font-rubik font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#323230] transition-colors">
        View Product — <span className="text-[#FFA52F]">${price}</span>
      </button>
    </div>
  );
};

export default ProductCard;

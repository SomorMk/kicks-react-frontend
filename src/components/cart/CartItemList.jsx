import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function CartItemList() {
  const { items } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 md:py-20 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-center gap-4 md:gap-6">
        <div className="bg-[#ECEEF0] p-6 md:p-8 rounded-full">
          <svg
            className="w-12 h-12 md:w-16 md:h-16 text-secondary/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-rubik font-bold uppercase text-secondary">
            Your bag is empty
          </h2>
          <p className="text-secondary/60 text-sm md:text-base max-w-xs md:max-w-none">
            Look like you haven't added anything to your bag yet. Let's start
            shopping!
          </p>
        </div>
        <Link
          to="/"
          className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-rubik font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all text-sm md:text-base w-full sm:w-auto"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl md:rounded-[28px] p-4 md:p-8 flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-rubik font-bold uppercase text-secondary">
          Your Bag
        </h2>
        <p className="text-secondary/60 text-sm md:text-base font-medium">
          Items in your bag not reserved- check out now to make them yours.
        </p>
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        {items.map((item, index) => (
          <CartItem
            key={`${item.id}-${item.size}-${item.color.name}`}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";

export default function OrderSummary() {
  const { items } = useSelector((state) => state.cart);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const delivery = subtotal > 0 ? 6.99 : 0;
  const total = subtotal + delivery;

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <h2 className="text-2xl sm:text-3xl font-rubik font-bold uppercase text-secondary">
        Order Summary
      </h2>

      <div className="flex flex-col gap-3 md:gap-4 font-medium">
        <div className="flex justify-between items-center text-secondary/80 text-sm md:text-base uppercase">
          <span>
            {items.length} ITEM{items.length !== 1 ? "S" : ""}
          </span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-secondary/80 text-sm md:text-base">
          <span>Delivery</span>
          <span>${delivery.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-secondary/80 text-sm md:text-base">
          <span>Sales Tax</span>
          <span>-</span>
        </div>
        <div className="flex justify-between items-center text-lg sm:text-xl font-bold text-secondary pt-3 md:pt-4 border-t border-secondary/10">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:gap-4">
        <button
          disabled={items.length === 0}
          className="w-full bg-secondary text-white py-3.5 sm:py-4 rounded-xl font-rubik font-bold uppercase tracking-widest hover:bg-black active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          Checkout
        </button>
        <button className="text-secondary font-bold underline underline-offset-4 hover:text-primary transition-colors cursor-pointer text-left text-sm">
          Use a promo code
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { Heart, SquareX, ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/Redux/Slices/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(
      removeFromCart({ id: item.id, size: item.size, color: item.color }),
    );
  };

  const handleQuantityUpdate = (e) => {
    dispatch(
      updateQuantity({
        id: item.id,
        size: item.size,
        color: item.color,
        quantity: parseInt(e.target.value),
      }),
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 group transition-all">
      {/* Product Image */}
      <div className="w-full sm:w-48 aspect-square rounded-[24px] overflow-hidden bg-[#ECEEF0] shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 gap-1">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-xl md:text-2xl font-rubik font-bold uppercase text-secondary leading-tight">
              {item.title}
            </h3>
            <p className="text-[#70706e] text-sm md:text-base font-medium">
              {item.category}
            </p>
            <p className="text-[#70706e] text-sm md:text-base font-medium">
              {item.color.name}
            </p>
          </div>
          <p className="text-xl font-bold text-primary">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        {/* Options */}
        <div className="flex gap-6 mt-1 items-center">
          <div className="flex items-center gap-2">
            <span className="text-[#70706e] font-medium text-base">Size</span>
            <div className="relative inline-flex items-center cursor-pointer">
              <span className="font-bold text-secondary">{item.size}</span>
              <ChevronDown size={18} className="ml-1 text-secondary" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#70706e] font-medium text-base">
              Quantity
            </span>
            <div className="relative inline-flex items-center">
              <select
                value={item.quantity}
                onChange={handleQuantityUpdate}
                className="appearance-none bg-transparent font-bold text-secondary outline-none cursor-pointer pr-5"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="absolute right-0 pointer-events-none text-secondary"
              />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-auto pt-2">
          <button className="text-secondary hover:text-primary transition-colors cursor-pointer">
            <Heart size={26} strokeWidth={1.5} />
          </button>
          <button
            onClick={handleRemove}
            className="text-secondary hover:text-red-500 transition-colors cursor-pointer"
          >
            <SquareX size={26} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

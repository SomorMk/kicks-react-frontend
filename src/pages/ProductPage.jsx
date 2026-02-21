import React, { useState } from "react";
import { Heart } from "lucide-react";

const PRODUCT_DATA = {
  id: "adidas-4dfwd-parley",
  name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
  price: 125.0,
  tag: "New Release",
  description:
    "This product is excluded from all promotional discounts and offers.",
  colors: [
    { name: "Shadow Navy", hex: "#2B3444", active: true },
    { name: "Army Green", hex: "#7A8A78", active: false },
  ],
  sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
  outOfStockSizes: [39, 40],
  about: [
    "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
    "Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
  ],
  images: [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop", // Side view placeholder
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop", // On foot placeholder
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop", // Closeup Laces placeholder
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop", // Closeup Sole placeholder
  ],
};

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState(PRODUCT_DATA.colors[0]);

  return (
    <div className="min-h-screen bg-[#e7e7e3] p-4 md:p-10 font-rubik">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Section: Image Gallery (Takes 2 columns on large screens) */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PRODUCT_DATA.images.map((img, index) => (
            <div
              key={index}
              className="aspect-square rounded-3xl overflow-hidden bg-white"
            >
              <img
                src={img}
                alt={`${PRODUCT_DATA.name} - view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Section: Product Details */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg w-fit">
              {PRODUCT_DATA.tag}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold uppercase leading-tight text-secondary">
              {PRODUCT_DATA.name}
            </h1>
            <p className="text-2xl font-bold text-primary">
              ${PRODUCT_DATA.price.toFixed(2)}
            </p>
          </div>

          {/* Color Selection */}
          <div className="flex flex-col gap-3">
            <span className="font-bold uppercase text-sm tracking-wider text-secondary">
              Color
            </span>
            <div className="flex gap-4">
              {PRODUCT_DATA.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all ${
                    selectedColor.name === color.name
                      ? "border-secondary scale-110"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase text-sm tracking-wider text-secondary">
                Size
              </span>
              <button className="text-xs font-bold uppercase underline decoration-2 underline-offset-4 cursor-pointer">
                Size Chart
              </button>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))] gap-2">
              {PRODUCT_DATA.sizes.map((size) => {
                const isOutOfStock =
                  PRODUCT_DATA.outOfStockSizes.includes(size);
                const isActive = selectedSize === size;
                return (
                  <button
                    key={size}
                    disabled={isOutOfStock}
                    onClick={() => setSelectedSize(size)}
                    className={`flex items-center justify-center h-12 rounded-lg font-medium transition-all ${
                      isOutOfStock
                        ? "bg-[#e7e7e3] text-[#a8a8a1] cursor-not-allowed"
                        : isActive
                          ? "bg-secondary text-white"
                          : "bg-white text-secondary border border-transparent hover:border-secondary"
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex gap-2">
              <button className="flex-1 bg-secondary text-white font-bold py-4 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all">
                Add to Cart
              </button>
              <button className="bg-secondary text-white p-4 rounded-xl hover:brightness-110 transition-all">
                <Heart size={24} />
              </button>
            </div>
            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all">
              Buy It Now
            </button>
          </div>

          {/* About the Product */}
          <div className="flex flex-col gap-4 pt-4 border-t border-[#d1d1cc]">
            <h3 className="font-bold uppercase text-sm tracking-wider text-secondary">
              About the product
            </h3>
            <p className="text-secondary text-sm font-medium">
              {selectedColor.name} /{" "}
              {PRODUCT_DATA.colors.find((c) => c.name !== selectedColor.name)
                ?.name || "Default"}
            </p>
            <p className="text-secondary text-sm leading-relaxed">
              {PRODUCT_DATA.description}
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              {PRODUCT_DATA.about.map((item, index) => (
                <li
                  key={index}
                  className="text-secondary text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

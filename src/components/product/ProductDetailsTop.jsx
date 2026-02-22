import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import Container from "../common/Container";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux/Slices/cartSlice";
import toast from "react-hot-toast";

export default function ProductDetailsTop({ productDetails }) {
  // Global States
  const dispatch = useDispatch();

  // Unavailable Datas from API
  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
  const outOfStockSizes = [39, 40];
  const colors = [
    { name: "Shadow Navy", hex: "#2B3444", active: true },
    { name: "Army Green", hex: "#7A8A78", active: false },
    { name: "Gray", hex: "#808080", active: false },
    { name: "Black", hex: "#000000", active: false },
    { name: "White", hex: "#FFFFFF", active: false },
  ];

  // Common States
  const [selectedSize, setSelectedSize] = useState(38);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (!productDetails) return;

    const cartItem = {
      id: productDetails.id,
      title: productDetails.title,
      price: productDetails.price,
      image: productDetails.images[0],
      category: productDetails.category?.name || "Running Shoes",
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    };

    dispatch(addToCart(cartItem));
    toast.success("Added to Bag!");
  };

  return (
    <div className="min-h-screen bg-[#e7e7e3] py-4 md:py-10 font-rubik">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Section: Image Gallery */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Main Image - Featured on mobile */}
            <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-sm">
              <img
                src={productDetails?.images?.[0]}
                alt={`${productDetails?.name} - main view`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Grid - Scrollable on mobile */}
            {productDetails?.images?.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {productDetails.images.map((img, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-2xl overflow-hidden bg-white cursor-pointer border-2 border-transparent hover:border-secondary transition-all active:scale-95"
                  >
                    <img
                      src={img}
                      alt={`${productDetails?.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Section: Product Details */}
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Product Header */}
            <div className="flex flex-col gap-3 md:gap-4">
              <span className="bg-primary text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-lg w-fit uppercase tracking-wider">
                New Release
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-tight text-secondary">
                {productDetails?.title}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-primary">
                ${productDetails?.price.toFixed(2)}
              </p>
            </div>

            {/* Color Selection */}
            <div className="flex flex-col gap-2 md:gap-3">
              <span className="font-bold uppercase text-xs sm:text-sm tracking-wider text-secondary">
                Color
              </span>
              <div className="flex gap-3 flex-wrap">
                {colors?.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer border-2 transition-all focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
                      selectedColor.name === color.name
                        ? "border-secondary scale-110"
                        : "border-transparent hover:scale-105"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="flex justify-between items-center">
                <span className="font-bold uppercase text-xs sm:text-sm tracking-wider text-secondary">
                  Size
                </span>
                <button className="text-xs font-bold uppercase underline decoration-2 underline-offset-4 cursor-pointer hover:text-secondary/80 transition-colors">
                  Size Chart
                </button>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-[repeat(auto-fill,minmax(48px,1fr))] gap-2">
                {sizes?.map((size) => {
                  const isOutOfStock = outOfStockSizes.includes(size);
                  const isActive = selectedSize === size;
                  return (
                    <button
                      key={size}
                      disabled={isOutOfStock}
                      onClick={() => setSelectedSize(size)}
                      className={`flex items-center justify-center h-11 sm:h-12 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-secondary/50 ${
                        isOutOfStock
                          ? "bg-[#d1d1cc] text-[#a8a8a1] cursor-not-allowed opacity-50"
                          : isActive
                            ? "bg-secondary text-white"
                            : "bg-white text-secondary border border-[#d1d1cc] hover:border-secondary"
                      }`}
                      aria-label={`Select size ${size}${isOutOfStock ? " (out of stock)" : ""}`}
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
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-secondary text-white font-bold py-3 sm:py-4 rounded-xl uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all text-xs sm:text-sm"
                >
                  Add to Cart
                </button>
                <button
                  className="bg-secondary text-white p-3 sm:p-4 rounded-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
              <button className="w-full bg-primary text-white font-bold py-3 sm:py-4 rounded-xl uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all text-xs sm:text-sm">
                Buy It Now
              </button>
            </div>

            {/* About the Product */}
            <div className="flex flex-col gap-3 md:gap-4 pt-4 border-t border-[#d1d1cc]">
              <h3 className="font-bold uppercase text-xs sm:text-sm tracking-wider text-secondary">
                About the product
              </h3>
              <p className="text-secondary text-xs sm:text-sm font-medium">
                Category:{" "}
                <span className="font-semibold">
                  {productDetails?.category?.name}
                </span>
              </p>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed line-clamp-4 md:line-clamp-none">
                {productDetails?.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

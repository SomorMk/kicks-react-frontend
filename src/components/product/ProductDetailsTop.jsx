import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import Container from "../common/Container";
import { useDispatch } from "react-redux";
import { addToCart } from "@/Redux/Slices/cartSlice";
import toast from "react-hot-toast";

export default function ProductDetailsTop({ productDetails }) {
  const dispatch = useDispatch();

  // Unavailable Datas
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
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Section: Image Gallery */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {productDetails?.images?.map((img, index) => (
              <div
                key={index}
                className="aspect-square rounded-3xl overflow-hidden bg-white"
              >
                <img
                  src={img}
                  alt={`${productDetails?.name} - view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Section: Product Details */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg w-fit">
                New Release
              </span>
              <h1 className="text-3xl md:text-4xl font-bold uppercase leading-tight text-secondary">
                {productDetails?.title}
              </h1>
              <p className="text-2xl font-bold text-primary">
                ${productDetails?.price.toFixed(2)}
              </p>
            </div>

            {/* Color Selection */}
            <div className="flex flex-col gap-3">
              <span className="font-bold uppercase text-sm tracking-wider text-secondary">
                Color
              </span>
              <div className="flex gap-4">
                {colors?.map((color) => (
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
                {sizes?.map((size) => {
                  const isOutOfStock = outOfStockSizes.includes(size);
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
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-secondary text-white font-bold py-4 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all"
                >
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
                Category: {productDetails?.category?.name}
              </p>
              <p className="text-secondary text-sm leading-relaxed">
                {productDetails?.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

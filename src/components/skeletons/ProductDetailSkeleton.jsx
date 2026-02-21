import React from "react";
import { Heart } from "lucide-react";

const ProductDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#e7e7e3] p-4 md:p-10 font-rubik animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="aspect-square rounded-3xl overflow-hidden bg-white"
            >
              <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300"></div>
            </div>
          ))}
        </div>

        {/* Right Section: Product Details Skeleton */}
        <div className="flex flex-col gap-6">
          {/* Header Skeleton */}
          <div className="flex flex-col gap-4">
            {/* Tag Skeleton */}
            <div className="w-16 h-6 bg-gray-300 rounded-lg"></div>

            {/* Title Skeleton - Multiple lines */}
            <div className="space-y-2">
              <div className="w-3/4 h-8 bg-gray-300 rounded"></div>
              <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
            </div>

            {/* Price Skeleton */}
            <div className="w-24 h-8 bg-gray-300 rounded"></div>
          </div>

          {/* Color Selection Skeleton */}
          <div className="flex flex-col gap-3">
            <div className="w-16 h-4 bg-gray-300 rounded"></div>
            <div className="flex gap-4">
              {[1, 2, 3].map((color) => (
                <div
                  key={color}
                  className="w-8 h-8 rounded-full bg-gray-300"
                ></div>
              ))}
            </div>
          </div>

          {/* Size Selection Skeleton */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="w-16 h-4 bg-gray-300 rounded"></div>
              <div className="w-20 h-4 bg-gray-300 rounded"></div>
            </div>

            {/* Size Grid Skeleton */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))] gap-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className="flex items-center justify-center h-12 rounded-lg bg-gray-200"
                >
                  <span className="text-gray-400">{size}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions Skeleton */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex gap-2">
              <div className="flex-1 h-12 bg-gray-300 rounded-xl"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-xl flex items-center justify-center">
                <Heart size={24} className="text-gray-400" />
              </div>
            </div>
            <div className="w-full h-12 bg-gray-300 rounded-xl"></div>
          </div>

          {/* About the Product Skeleton */}
          <div className="flex flex-col gap-4 pt-4 border-t border-[#d1d1cc]">
            <div className="w-32 h-4 bg-gray-300 rounded"></div>

            {/* Color selection text skeleton */}
            <div className="w-40 h-3 bg-gray-200 rounded"></div>

            {/* Description lines skeleton */}
            <div className="space-y-2">
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-5/6 h-3 bg-gray-200 rounded"></div>
              <div className="w-4/6 h-3 bg-gray-200 rounded"></div>
            </div>

            {/* List items skeleton */}
            <ul className="space-y-2 pl-5">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mt-1.5"></div>
                  <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced version with shimmer effect
export const ProductDetailSkeletonWithShimmer = () => {
  return (
    <div className="min-h-screen bg-[#e7e7e3] p-4 md:p-10 font-rubik">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Section with Shimmer */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="aspect-square rounded-3xl overflow-hidden bg-white relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent shimmer"></div>
              <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300"></div>
            </div>
          ))}
        </div>

        {/* Right Section with Shimmer */}
        <div className="flex flex-col gap-6 relative">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent shimmer pointer-events-none"></div>

          {/* Rest of the skeleton content with lighter backgrounds */}
          <div className="flex flex-col gap-4">
            <div className="w-16 h-6 bg-gray-200 rounded-lg"></div>
            <div className="space-y-2">
              <div className="w-3/4 h-8 bg-gray-200 rounded"></div>
              <div className="w-1/2 h-8 bg-gray-200 rounded"></div>
            </div>
            <div className="w-24 h-8 bg-gray-200 rounded"></div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="w-16 h-4 bg-gray-200 rounded"></div>
            <div className="flex gap-4">
              {[1, 2, 3].map((color) => (
                <div
                  key={color}
                  className="w-8 h-8 rounded-full bg-gray-200"
                ></div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="w-16 h-4 bg-gray-200 rounded"></div>
              <div className="w-20 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))] gap-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <div key={size} className="h-12 rounded-lg bg-gray-200"></div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <div className="flex gap-2">
              <div className="flex-1 h-12 bg-gray-200 rounded-xl"></div>
              <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
            </div>
            <div className="w-full h-12 bg-gray-200 rounded-xl"></div>
          </div>

          <div className="flex flex-col gap-4 pt-4 border-t border-[#d1d1cc]">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
            <div className="w-40 h-3 bg-gray-100 rounded"></div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-gray-100 rounded"></div>
              <div className="w-5/6 h-3 bg-gray-100 rounded"></div>
              <div className="w-4/6 h-3 bg-gray-100 rounded"></div>
            </div>
            <ul className="space-y-2">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mt-1.5"></div>
                  <div className="w-3/4 h-3 bg-gray-100 rounded"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

// Component with loading state management
export const ProductDetailWithLoading = ({ isLoading, product, error }) => {
  if (error) {
    return (
      <div className="min-h-screen bg-[#e7e7e3] p-4 md:p-10 font-rubik flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">Failed to load product details</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return <ProductDetailSkeletonWithShimmer />;
  }

  return (
    <div className="min-h-screen bg-[#e7e7e3] p-4 md:p-10 font-rubik">
      {/* Your actual product detail component here */}
      <div>{/* Product content */}</div>
    </div>
  );
};

export default ProductDetailSkeleton;

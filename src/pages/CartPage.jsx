import React from "react";
import Container from "@/components/common/Container";
import CartBanner from "@/components/cart/CartBanner";
import CartItemList from "@/components/cart/CartItemList";
import OrderSummary from "@/components/cart/OrderSummary";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function CartPage() {
  return (
    <div className="min-h-screen font-rubik flex flex-col gap-0">
      {/* Banner Section */}
      <CartBanner />

      <Container className="w-full px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Left Column: Bag Items */}
          <div className="lg:col-span-2">
            <CartItemList />
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </Container>

      {/* Related Products Carousel */}
      <div className="border-t border-secondary/10">
        <RelatedProducts />
      </div>
    </div>
  );
}

import React from "react";
import ProductCard from "../common/ProductCard";
import Container from "../common/Container";

const products = [
  {
    id: 1,
    name: "Adidas 4dfwd x parley running shoes",
    price: 125,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Adidas 4dfwd x parley running shoes",
    price: 125,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Adidas 4dfwd x parley running shoes",
    price: 125,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Adidas 4dfwd x parley running shoes",
    price: 125,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
  },
];

export default function HomeNewDrops() {
  return (
    <section className="py-8 md:py-16">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-rubik font-bold uppercase leading-[0.9] text-secondary">
            Don't miss out <br /> New Drops
          </h2>
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-rubik font-semibold text-sm uppercase tracking-wider hover:bg-[#3b55c2] transition-colors self-start md:self-auto">
            Shop New Drops
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

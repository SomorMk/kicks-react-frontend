import Navbar from "@/shared/Navbar";
import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "@/shared/Footer";

export default function MainLayout() {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

import Navbar from "@/shared/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/shared/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

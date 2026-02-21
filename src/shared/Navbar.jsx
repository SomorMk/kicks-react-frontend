import React, { useState, useEffect } from "react";
import logo from "@/assets/Images/logo.png";
import { Search, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import Container from "@/components/common/Container";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optional: Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "New Drops 🔥", href: "#" },
    { name: "Men", href: "#", hasDropdown: true },
    { name: "Women", href: "#", hasDropdown: true },
  ];

  return (
    <nav
      className={`relative py-4 md:py-8 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}
    >
      <Container>
        {/* Main Navbar Bar */}
        <div className="flex w-full items-center justify-between rounded-[32px] bg-white px-4 py-4 md:px-10 md:py-6 font-rubik shadow-sm">
          {/* Left Section: Mobile Menu Toggle & Desktop Links */}
          <div className="flex flex-1 items-center justify-start">
            {/* Mobile Toggle */}
            <button
              className="lg:hidden cursor-pointer text-secondary hover:text-primary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center justify-start gap-6 xl:gap-8 font-semibold text-secondary">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center gap-1 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.name}
                  {link.hasDropdown && <IoMdArrowDropdown size={18} />}
                </Link>
              ))}
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex flex-1 items-center justify-center">
            <Link to={"/"} className="flex items-center justify-center">
              <img
                src={logo}
                alt="Kicks Logo"
                className="h-8 md:h-10 object-contain"
              />
            </Link>
          </div>

          {/* Right Section: Actions */}
          <div className="flex flex-1 items-center justify-end gap-4 md:gap-6 text-secondary">
            {/* Desktop Search & User */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                className="cursor-pointer hover:text-primary transition-colors"
                aria-label="Search"
              >
                <Search size={24} />
              </button>
              <button
                className="cursor-pointer hover:text-primary transition-colors"
                aria-label="User Profile"
              >
                <User size={24} />
              </button>
            </div>

            {/* Mobile Search (Visible only on mobile) */}
            <button
              className="lg:hidden cursor-pointer hover:text-primary transition-colors"
              aria-label="Search"
            >
              <Search size={24} />
            </button>

            {/* Cart (Visible on all devices) */}
            <button
              className="relative cursor-pointer hover:text-primary transition-colors"
              aria-label="Cart"
            >
              <div className="flex bg-[#ffa52f] rounded-full w-8 h-8 md:w-10 md:h-10 items-center justify-center text-sm font-bold text-white shadow-sm">
                0
              </div>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-out Menu */}
          <div className="absolute top-0 left-0 h-full w-[80%] max-w-xs bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-300">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="font-rubik font-bold text-xl text-secondary">
                Menu
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-secondary" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gray-50 text-secondary font-semibold font-rubik transition-colors"
                  >
                    {link.name}
                    {link.hasDropdown && <IoMdArrowDropdown size={20} />}
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="flex flex-col gap-4">
                  <Link
                    to="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 text-secondary font-semibold font-rubik transition-colors"
                  >
                    <User size={20} />
                    Account
                  </Link>
                  <Link
                    to="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 text-secondary font-semibold font-rubik transition-colors"
                  >
                    <Search size={20} />
                    Search
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer Actions (Optional) */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <button className="w-full py-3 bg-primary text-white font-rubik font-semibold rounded-xl hover:opacity-90 transition-opacity">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

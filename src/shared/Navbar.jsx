import React from "react";
import logo from "@/assets/Images/logo.png";
import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import Container from "@/components/common/Container";

export default function Navbar() {
  return (
    <nav className="p-8">
      <Container>
        <div className="flex w-full items-center justify-between rounded-[32px] bg-white px-10 py-6 font-rubik shadow-sm">
          {/* Left Links */}
          <div className="flex flex-1 items-center justify-start gap-8 font-semibold text-[#232321]">
            <Link
              to="#"
              className="flex items-center gap-1 hover:text-primary transition-colors whitespace-nowrap"
            >
              New Drops 🔥
            </Link>
            <Link
              to="#"
              className="flex items-center gap-1 hover:text-primary transition-colors whitespace-nowrap"
            >
              Men <IoMdArrowDropdown size={18} />
            </Link>
            <Link
              to="#"
              className="flex items-center gap-1 hover:text-primary transition-colors whitespace-nowrap"
            >
              Women <IoMdArrowDropdown size={18} />
            </Link>
          </div>

          {/* Logo - Centered */}
          <Link to={"/"} className="flex flex-1 items-center justify-center">
            <img src={logo} alt="Kicks Logo" className="h-8 md:h-10" />
          </Link>

          {/* Right Actions */}
          <div className="flex flex-1 items-center justify-end gap-6 text-[#232321]">
            <button className="cursor-pointer hover:text-primary transition-colors">
              <Search size={24} />
            </button>
            <button className="cursor-pointer hover:text-primary transition-colors">
              <User size={24} />
            </button>
            <button className="relative cursor-pointer hover:text-primary transition-colors">
              <div className="flex bg-[#ffa52f] rounded-full w-8 h-8 items-center justify-center text-sm font-bold">
                0
              </div>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

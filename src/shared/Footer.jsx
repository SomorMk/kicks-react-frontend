import React from "react";
import Container from "@/components/common/Container";

// Logos
import logoWithPlus from "../assets/Images/logo-with-plus.png";
import logoHalf from "../assets/Images/logo-half.png";

// Social Icons
import FacebookLogoSVG from "@/components/SVG/FacebookLogoSVG";
import InstagramLogoSVG from "@/components/SVG/InstagramLogoSVG";
import TwitterLogoSVG from "@/components/SVG/TwitterLogoSVG";
import TiktokLogoSVG from "@/components/SVG/TiktokLogoSVG";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

// Footer Categories Links
const CategoriesLinks = [
  {
    name: "Runners",
    link: "/runners",
  },
  {
    name: "Sneakers",
    link: "/sneakers",
  },
  {
    name: "Basketball",
    link: "/basketball",
  },
  {
    name: "Outdoor",
    link: "/outdoor",
  },
  {
    name: "Golf",
    link: "/golf",
  },
  {
    name: "Hiking",
    link: "/hiking",
  },
];

// Footer Company Links
const CompanyLinks = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
];

// Footer Social Links
const SocialLinks = [
  {
    name: "Facebook",
    link: "#",
    icon: <FacebookLogoSVG />,
  },
  {
    name: "Instagram",
    link: "#",
    icon: <InstagramLogoSVG />,
  },
  {
    name: "Twitter",
    link: "#",
    icon: <TwitterLogoSVG />,
  },
  {
    name: "Tiktok",
    link: "#",
    icon: <TiktokLogoSVG />,
  },
];

export default function Footer() {
  // Top Section
  const TopSectionTitle = "Join our KicksPlus Club & get 15% off";
  const TopSectionDescription = "Sign up for free! Join the community.";

  // About Us
  const AboutUsDescription =
    "We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.";

  return (
    <footer className="w-full font-rubik mt-20">
      <Container>
        {/* Top Section: Signup */}
        <div className="bg-primary rounded-t-[48px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="flex flex-col gap-6 max-w-2xl z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase leading-tight">
              {TopSectionTitle}
            </h2>
            <p className="text-white/80 text-lg">{TopSectionDescription}</p>

            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-white rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white w-full sm:w-80"
              />
              <button
                onClick={() => toast("The feature is not ready yet!")}
                className="bg-secondary text-white font-bold py-4 px-10 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="z-10">
            <img src={logoWithPlus} alt="Kicks+" className="w-48 md:w-64" />
          </div>
        </div>

        {/* Bottom Section: Links Area */}
        <div className="bg-secondary rounded-t-[48px] -mt-12 pt-24 pb-12 px-4 md:px-10 relative overflow-hidden">
          <div className="flex gap-40 relative z-10">
            {/* About Us */}
            <div className="w-4/12">
              <div className="flex flex-col gap-6">
                <h3 className="text-orange-400 text-3xl font-semibold font-rubik">
                  About us
                </h3>
                <p className="text-stone-200 text-xl font-semibold font-open-sans">
                  {AboutUsDescription}
                </p>
              </div>
            </div>

            <div className="w-8/12 grid grid-cols-3 gap-10">
              {/* Categories */}
              <div className="flex flex-col gap-4">
                <h3 className="text-orange-400 text-3xl font-semibold font-rubik">
                  Categories
                </h3>
                <div className="flex flex-col gap-3">
                  {CategoriesLinks?.map((cat) => (
                    <Link
                      key={cat?.name}
                      to={cat?.link}
                      className="text-white hover:text-accent transition-colors"
                    >
                      {cat?.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-4">
                <h3 className="text-orange-400 text-3xl font-semibold font-rubik">
                  Company
                </h3>
                <div className="flex flex-col gap-3">
                  {CompanyLinks?.map((link) => (
                    <Link
                      key={link?.name}
                      to={link?.link}
                      className="text-white hover:text-accent transition-colors"
                    >
                      {link?.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col gap-4">
                <h3 className="text-orange-400 text-3xl font-semibold font-rubik">
                  Follow us
                </h3>
                <div className="flex gap-4">
                  {SocialLinks?.map((link) => (
                    <Link
                      key={link?.name}
                      to={link?.link}
                      target="_blank"
                      className="text-white hover:text-accent transition-colors"
                    >
                      {link?.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Large Background Logo */}
          <div className="w-full flex justify-center select-none pointer-events-none">
            <img
              src={logoHalf}
              alt=""
              className="w-[120%] h-auto object-contain translate-y-14"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}

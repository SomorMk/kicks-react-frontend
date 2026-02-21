import React from "react";
import { Star } from "lucide-react";
import Container from "../common/Container";

// Review Images
import ReviewImageOne from "@/assets/Images/review (1).png";
import ReviewImageTwo from "@/assets/Images/review (2).png";
import ReviewImageThree from "@/assets/Images/review (3).png";

// User Avatar Images
import UserAvatarOne from "@/assets/Images/user (1).png";
import UserAvatarTwo from "@/assets/Images/user (2).png";
import UserAvatarThree from "@/assets/Images/user (3).png";
import { Link } from "react-router-dom";

// Review Data
const REVIEWS_DATA = [
  {
    id: 1,
    title: "Good Quality",
    content: "I highly recommend shopping from kicks",
    rating: 5,
    user: {
      name: "User 1",
      avatar: UserAvatarOne,
    },
    image: ReviewImageOne,
  },
  {
    id: 2,
    title: "Good Quality",
    content: "I highly recommend shopping from kicks",
    rating: 5,
    user: {
      name: "User 2",
      avatar: UserAvatarTwo,
    },
    image: ReviewImageTwo,
  },
  {
    id: 3,
    title: "Good Quality",
    content: "I highly recommend shopping from kicks",
    rating: 5,
    user: {
      name: "User 3",
      avatar: UserAvatarThree,
    },
    image: ReviewImageThree,
  },
];

export default function HomeReview() {
  return (
    <section>
      <Container>
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl md:text-7xl font-bold uppercase text-secondary">
            Reviews
          </h2>
          <Link
            to="#"
            className="bg-primary text-white font-bold py-3 px-8 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all text-sm"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[32px] overflow-hidden flex flex-col"
            >
              {/* Review Header & Content */}
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-xl font-bold text-secondary">
                      {review.title}
                    </h4>
                    <p className="text-secondary/80 text-sm">
                      {review.content}
                    </p>
                  </div>
                  {/* User Avatar Tag (Empty as requested) */}
                  <div className="w-12 h-12 rounded-full bg-[#E7E7E3] overflow-hidden">
                    <img
                      src={review.user.avatar}
                      alt={review.user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-[#FFA52F] text-[#FFA52F]"
                      />
                    ))}
                  </div>
                  <span className="font-bold text-secondary">
                    {review.rating.toFixed(1)}
                  </span>
                </div>
              </div>

              {/* Main Image Tag (Empty as requested) */}
              <div className="aspect-4/3 w-full bg-[#E7E7E3] overflow-hidden">
                <img
                  src={review.image}
                  alt="Review Highlight"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

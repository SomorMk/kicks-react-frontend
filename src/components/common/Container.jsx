import React from "react";

export default function Container({ children, className }) {
  return (
    <div className={`max-w-[1320px] mx-auto px-5 ${className}`}>{children}</div>
  );
}

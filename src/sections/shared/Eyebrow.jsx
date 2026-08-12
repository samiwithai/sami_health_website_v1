import React from "react";

export default function Eyebrow({ children, light = false, center = false, className = "" }) {
  const color = light ? "text-gray-300" : "text-gray-500";
  return (
    <div
      className={`font-mono text-xs tracking-widest uppercase flex items-center gap-2.5 ${color} ${
        center ? "justify-center" : ""
      } ${className}`}
    >
      <span className={`inline-block w-5 h-px ${light ? "bg-gray-300" : "bg-gray-500"}`} />
      {children}
    </div>
  );
}

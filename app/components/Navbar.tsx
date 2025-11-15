"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="logo" className="w-10 h-auto" />
        <span className="text-xl font-bold">REVINK</span>
      </div>

      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <ul
        className={`md:flex md:space-x-10 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-6 md:p-0 space-y-6 md:space-y-0 transition-all ${
          open ? "block" : "hidden md:flex"
        }`}
      >
        <li><a href="#about" className="hover:text-gray-300">소개</a></li>
        <li><a href="#solution" className="hover:text-gray-300">솔루션</a></li>
        <li><a href="#portfolio" className="hover:text-gray-300">포트폴리오</a></li>
        <li><a href="#review" className="hover:text-gray-300">후기</a></li>
        <li><a href="#contact" className="hover:text-gray-300">문의</a></li>
      </ul>
    </nav>
  );
}


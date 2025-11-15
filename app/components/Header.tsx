"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* 로고 */}
        <div className="text-xl font-bold tracking-widest">
          REVINK
        </div>

        {/* 메뉴 */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <Link href="#about" className="hover:text-white">소개</Link>
          <Link href="#services" className="hover:text-white">서비스</Link>
          <Link href="#portfolio" className="hover:text-white">포트폴리오</Link>
          <Link href="#reviews" className="hover:text-white">후기</Link>
          <Link href="#contact" className="hover:text-white">문의</Link>
        </nav>
      </div>
    </header>
  );
}

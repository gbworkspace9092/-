"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          {/* 로고 & 소개 */}
          <div>
            <h3 className="text-2xl font-semibold text-white tracking-wide mb-2">
              REVINK
            </h3>
            <p className="text-gray-500 text-sm">
              두피문신 · 헤어스타일링 프리미엄 스튜디오
            </p>
          </div>

          {/* 메뉴 */}
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-white">소개</a>
            <a href="#services" className="hover:text-white">서비스</a>
            <a href="#portfolio" className="hover:text-white">포트폴리오</a>
            <a href="#review" className="hover:text-white">후기</a>
            <a href="#contact" className="hover:text-white">문의</a>
          </div>

          {/* 연락처 */}
          <div className="text-sm">
            <p className="mb-1">📍 경기도 수원시 권선구 권선동 1297-3번지 권선프라자 상가 5층</p>
            <a href="tel:01000000000" className="hover:text-white block">
              📞 010-2932-9092
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-white block"
            >
              📸 Instagram @onyour_revink
            </a>
          </div>

        </div>

        {/* 하단 저작권 */}
        <div className="mt-10 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} REVINK. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center"
    >
      {/* 배경 이미지 */}
      <img
        src="/interior.jpg"
        alt="REVINK Interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 텍스트 */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl font-extrabold mb-4">REVINK</h1>
        <p className="text-lg text-gray-300">
          두피문신 · 헤어 스타일링 프리미엄 샵
        </p>
      </div>
    </section>
  );
}

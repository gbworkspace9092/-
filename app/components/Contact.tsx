"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] bg-black text-white flex flex-col items-center justify-center px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-6">예약 · 상담 문의</h2>
      <p className="text-gray-400 mb-10 text-center">
        빠르고 편하게 상담받으세요.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="https://pf.kakao.com"
          target="_blank"
          className="px-8 py-3 bg-yellow-400 text-black rounded-lg font-semibold text-center"
        >
          카카오톡 상담
        </a>

        <a
          href="tel:01000000000"
          className="px-8 py-3 bg-white text-black rounded-lg font-semibold text-center"
        >
          전화 상담
        </a>

        <a
          href="#"
          className="px-8 py-3 bg-gray-800 border border-gray-600 text-white rounded-lg font-semibold text-center"
        >
          예약 신청하기
        </a>
      </div>
    </section>
  );
}

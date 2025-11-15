"use client";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-black text-white px-4 py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-12">포트폴리오</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="border border-gray-700 h-64 flex items-center justify-center">헤어라인 교정</div>
        <div className="border border-gray-700 h-64 flex items-center justify-center">두피 문신 시술</div>
        <div className="border border-gray-700 h-64 flex items-center justify-center">밀도 보강</div>
        <div className="border border-gray-700 h-64 flex items-center justify-center">정수리 보완</div>
        <div className="border border-gray-700 h-64 flex items-center justify-center">M자 교정</div>
        <div className="border border-gray-700 h-64 flex items-center justify-center">전체 커버</div>
      </div>
    </section>
  );
}

"use client";

export default function Solution() {
  const steps = [
    {
      num: "STEP 01",
      title: "1:1 맞춤 상담",
      desc: "두피 상태 및 원하는 스타일을 정확히 파악하여 가장 적합한 솔루션을 제안합니다.",
    },
    {
      num: "STEP 02",
      title: "디자인 설계",
      desc: "얼굴형, 라인, 밀도 등을 분석해 자연스럽고 어울리는 헤어 디자인을 설계합니다.",
    },
    {
      num: "STEP 03",
      title: "시술 진행",
      desc: "정교한 기술과 프리미엄 장비로 고객에게 제일 어울리는 스타일을 제공하고, 안정적이고 위생적인 시술을 진행합니다.",
    },
    {
      num: "STEP 04",
      title: "체크 및 보정",
      desc: "미세한 부분까지 확인하고 보정하여 완성도를 높입니다.",
    },
    {
      num: "STEP 05",
      title: "사후 관리 안내",
      desc: "최적의 유지력을 위한 관리 방법을 안내해드립니다.",
    },
  ];

  return (
    <section
      id="solution"
      className="bg-black text-white py-20 px-6 border-t border-gray-800"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        REVINK 솔루션 과정
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="border border-gray-700 rounded-xl p-6 hover:bg-gray-900 transition"
          >
            <div className="text-sm text-gray-500 mb-2">{step.num}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

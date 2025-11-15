export default function Review() {
  const reviews = [
    {
      name: "김지훈 고객님",
      text: "M자 교정 시술을 받았는데 정말 자연스럽게 잘 나왔어요. 상담도 꼼꼼하게 잘 해주셔서 믿음이 갔습니다.",
    },
    {
      name: "박수연 고객님",
      text: "두피 밀도 보강 시술 받았는데 확실히 이미지가 살아났어요! 관리 방법도 자세히 알려주셔서 도움 많이 됐습니다.",
    },
    {
      name: "최민석 고객님",
      text: "헤어라인 교정 너무 만족합니다. 자연스러운 라인 덕분에 자신감이 생겼어요.",
    },
  ];

  return (
    <section
      id="review"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20"
    >
      <h2 className="text-4xl font-bold mb-12">RE VINK 후기</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-xl p-6 bg-gray-900/40 backdrop-blur-md"
          >
            <p className="text-lg leading-relaxed text-gray-300 mb-4">“{r.text}”</p>
            <p className="text-right font-semibold text-gray-400">– {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

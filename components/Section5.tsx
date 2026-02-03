
import React from 'react';
import { TechCard } from './Visuals';

const Section5: React.FC = () => {
  const principles = [
    { key: "责任结果", text: "为导向，关注目标达成。" },
    { key: "实事求是", text: "为原则，强调数据说话。" },
    { key: "深刻反思", text: "为基础，触及灵魂自省。" },
    { key: "考评结合", text: "为牵引，导向协同互锁。" }
  ];

  return (
    <div className="w-full max-w-4xl px-6 flex flex-col justify-center">
      <h2 className="text-2xl md:text-4xl font-black mb-10 text-center tracking-tight leading-tight">
        述职倡导与原则：<br/><span className="text-orange-500">导向结果 · 实事求是 · 深刻反思</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-center mb-10">
        <div className="flex-1 w-full flex justify-center items-center gap-6 relative">
           <div className="w-36 h-36 md:w-52 md:h-52 rounded-full border-[6px] border-gray-700 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gray-600/30 z-0"></div>
              <span className="z-10 text-2xl md:text-3xl font-black text-gray-400">30%</span>
              <span className="z-10 text-xs md:text-sm text-gray-400 font-bold">讲过去</span>
           </div>
           <div className="w-40 h-40 md:w-60 md:h-60 rounded-full border-[8px] border-orange-500 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(245,130,32,0.3)]">
              <div className="absolute bottom-0 left-0 w-full h-[70%] bg-orange-500/20 z-0"></div>
              <span className="z-10 text-4xl md:text-5xl font-black text-orange-500">70%</span>
              <span className="z-10 text-sm md:text-lg font-black tracking-widest">讲未来</span>
           </div>
        </div>

        <div className="flex-1 space-y-5 w-full">
          {principles.map((p, i) => (
            <div key={i} className="flex items-center gap-4 text-base md:text-lg border-b border-white/10 pb-3">
              <span className="text-orange-500 font-black whitespace-nowrap text-xl">以{p.key}</span>
              <span className="text-gray-200 font-medium">{p.text}</span>
            </div>
          ))}
        </div>
      </div>

      <TechCard className="text-center italic text-gray-200 p-6 bg-white/[0.01] rounded-3xl">
        <p className="text-sm md:text-xl mb-2 font-medium">成功的述职，不仅仅是一个总结；更是如何产生价值；</p>
        <p className="text-orange-500 font-black text-lg md:text-2xl underline decoration-orange-500/50 underline-offset-8">如何在未来做得更好</p>
      </TechCard>
    </div>
  );
};

export default Section5;

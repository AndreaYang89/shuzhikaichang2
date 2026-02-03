
import React from 'react';
import { TechCard } from './Visuals';

const Section2: React.FC = () => {
  return (
    <div className="w-full max-w-4xl px-6 flex flex-col items-center">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-2 tracking-tight">总体定位</h2>
        <div className="text-orange-500 text-lg md:text-2xl font-semibold">年度述职会 + 战略目标与思想的对齐会</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 w-full">
        {[
          { title: "战略承接", desc: "确保集团战略意图有效解码" },
          { title: "经营目标达成", desc: "确立清晰的实现路径" },
          { title: "人的成长与连接", desc: "促进认知进化与团队协作" }
        ].map((item, i) => (
          <TechCard key={i} className="text-center py-6 px-4 border-orange-500/20">
            <div className="text-orange-500 text-2xl font-black mb-2">0{i+1}</div>
            <div className="font-bold text-white text-base md:text-xl mb-2">{item.title}</div>
            <div className="text-gray-300 text-sm md:text-base leading-snug">{item.desc}</div>
          </TechCard>
        ))}
      </div>

      <div className="glass p-8 bg-orange-500/10 border-orange-500/30 w-full rounded-3xl">
        <p className="text-center text-base md:text-xl text-orange-50 font-medium leading-loose">
          2025年度述职会<br/>
          既是<span className="text-orange-400 font-bold">收获之际</span>，也是<span className="text-orange-400 font-bold">思维盛宴</span><br/>
          既是<span className="text-orange-400 font-bold">学习之旅</span>，也是<span className="text-orange-400 font-bold">团队建设</span><br/>
          既是<span className="text-orange-400 font-bold">反思复盘</span>，也是<span className="text-orange-400 font-bold">战略对齐</span>
        </p>
      </div>
    </div>
  );
};

export default Section2;

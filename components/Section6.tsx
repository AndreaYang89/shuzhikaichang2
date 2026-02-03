
import React from 'react';
import { TechCard } from './Visuals';

const Section6: React.FC = () => {
  const rules = [
    { title: "全勤守时", text: "准时开始结束；全程参与，无故不缺席", color: "border-l-orange-500" },
    { title: "安静专注", text: "手机静音，除评委外不使用电脑", color: "border-l-blue-500" },
    { title: "述职者管理", text: "做好时间管理，言简意赅", color: "border-l-emerald-500" },
    { title: "提问者踊跃", text: "踊跃发言，遵守信息安全", color: "border-l-white" }
  ];

  return (
    <div className="w-full max-w-4xl px-6 flex flex-col justify-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black mb-2 tracking-tighter">述职纪律</h2>
        <p className="text-orange-500 text-sm md:text-lg uppercase tracking-[0.4em] font-bold opacity-80 font-mono">Discipline & Focus</p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="relative w-40 h-40 md:w-64 md:h-64 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradientClock)" strokeWidth="3" strokeDasharray="283" strokeDashoffset="40" />
            <defs>
              <linearGradient id="gradientClock" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f58220" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-mono text-3xl md:text-5xl font-black text-white/10 select-none">2025</div>
        </div>

        <div className="flex-1 grid grid-cols-1 gap-4 w-full">
          {rules.map((r, i) => (
            <TechCard key={i} className={`border-l-[6px] ${r.color} py-5 px-6 rounded-r-2xl bg-white/[0.02]`}>
              <div className="font-black text-white text-base md:text-xl mb-1 tracking-tight">{r.title}</div>
              <div className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">{r.text}</div>
            </TechCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;

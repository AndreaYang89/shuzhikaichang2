
import React from 'react';
import { TechCard } from './Visuals';

const Section4: React.FC = () => {
  return (
    <div className="w-full max-w-4xl px-6 flex flex-col justify-center">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-2 tracking-tight">年终述职：深度参与</h2>
        <p className="text-orange-500 text-lg md:text-2xl font-medium">在过程中看见与被看见</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="text-xl md:text-2xl font-bold">好的述职不是<span className="text-red-500 underline decoration-4 underline-offset-8">“抓坏人”</span></div>
            <div className="text-3xl md:text-5xl font-black text-orange-500 italic tracking-tighter">而是“找可能”</div>
          </div>
          
          <TechCard className="border-l-[6px] border-l-orange-500 bg-orange-500/10 py-6 px-6 rounded-r-3xl">
            <p className="text-lg md:text-2xl font-medium leading-relaxed mb-1">任何一个人述职，都是<span className="text-orange-400 font-black">一面镜子</span></p>
            <p className="text-gray-400 text-base md:text-xl">照出自己、折射他人</p>
          </TechCard>
        </div>

        <div className="space-y-6">
          <div className="glass p-5 rounded-3xl border-white/20 bg-white/[0.03]">
            <h4 className="text-orange-500 font-black mb-2 flex items-center gap-3 text-lg">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_#f58220]"></div> 述职者
            </h4>
            <p className="text-white text-base md:text-lg font-medium">对他人意见都要有<span className="text-orange-400 font-bold">“接纳”</span>的心态</p>
            <p className="text-white text-base md:text-lg font-medium">回答要有<span className="text-orange-400 font-bold">“重点、精炼”</span></p>
          </div>

          <div className="glass p-5 rounded-3xl border-white/20 bg-white/[0.03]">
            <h4 className="text-orange-500 font-black mb-2 flex items-center gap-3 text-lg">
              <div className="w-2.5 h-2.5 bg-white/70 rounded-full"></div> 贡献者
            </h4>
            <p className="text-white text-base md:text-lg font-medium">要帮助<span className="text-orange-400 font-bold">他人照镜子</span> 看盲区</p>
            <p className="text-white text-base md:text-lg font-medium">要有<span className="text-orange-400 font-bold">建设性</span>的意见反馈</p>
          </div>

          <div className="text-center md:text-right pt-2">
             <span className="px-5 py-2 border border-orange-500/40 rounded-full text-orange-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
               欢迎现场同事反馈和提问
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;

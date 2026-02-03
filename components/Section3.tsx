
import React from 'react';
import { TechCard } from './Visuals';

const Section3: React.FC = () => {
  const values = [
    {
      title: "个人总结与多维反馈",
      subtitle: "真实复盘与成长起点",
      details: ["系统回顾年度工作与关键判断", "不仅呈现结果，也回顾取舍路径", "将周边反馈视为重要成长资源"]
    },
    {
      title: "战略规划思维的训练",
      subtitle: "从“做事”到“承接战略”",
      details: ["基于格局理解作出业务判断", "围绕集团战略进行策略推演", "将意图解码为岗位 OKR 目标"]
    },
    {
      title: "开放学习与交流对齐",
      subtitle: "用认知对齐支撑落地",
      details: ["促进认知碰撞与视角拓展", "强调见识拓展对组织的意义", "摆明潜在失败，争取协同方案"]
    },
    {
      title: "团队连接与文化建设",
      subtitle: "为长期协作夯实基础",
      details: ["通过互动增强信任与理解", "在高压讨论外保留组织温度", "强化共同体意识与跨团队配合"]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-6 max-w-6xl">
      <h2 className="text-2xl md:text-4xl font-black mb-8 text-center tracking-tight">
        述职会承载进化的<span className="text-orange-500">四重价值</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {values.map((v, i) => (
          <TechCard key={i} className="flex flex-col p-5 border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500 font-black border border-orange-500/40 text-lg">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-white text-base md:text-lg leading-tight">{v.title}</h3>
                <p className="text-orange-400 text-xs font-bold uppercase tracking-wider">{v.subtitle}</p>
              </div>
            </div>
            <ul className="space-y-1.5 pl-2">
              {v.details.map((d, idx) => (
                <li key={idx} className="text-gray-300 text-sm md:text-base leading-relaxed flex gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </TechCard>
        ))}
      </div>
      <div className="text-center mt-8 text-orange-500/80 font-bold italic text-sm md:text-lg tracking-widest">
        看清工作中的取舍与假设
      </div>
    </div>
  );
};

export default Section3;

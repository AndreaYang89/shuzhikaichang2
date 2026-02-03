
import React from 'react';

const Section7: React.FC = () => {
  const modelData = [
    { category: "决断力", sub: [
      { name: "战略思维", desc: "洞察规律，抓住主要矛盾" },
      { name: "战略风险承担", desc: "敢于决策担责，开拓机会" }
    ]},
    { category: "理解力", sub: [
      { name: "系统性思维", desc: "具备全面视野与逻辑架构" },
      { name: "妥协灰度", desc: "顾全大局，寻求迂回前进" }
    ]},
    { category: "与人连接力", sub: [
      { name: "客户伙伴关系", desc: "建立基于信任的双赢关系" },
      { name: "协作影响力", desc: "超越局部利益，协同目标" },
      { name: "跨文化融合", desc: "求同存异，文化融合" }
    ]},
    { category: "执行力", sub: [
      { name: "责任结果导向", desc: "目标感强，不断超越自我" },
      { name: "激励发展团队", desc: "激发斗志，助力他人成长" },
      { name: "组织能力建设", desc: "一致有效，可持续发展" }
    ]}
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-4 max-w-6xl">
      <div className="mb-6 text-center">
         <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-1">岗位人才商业领导力模型</h2>
         <p className="text-orange-500 text-xs md:text-sm font-black tracking-[0.3em] uppercase opacity-70">
           Decision / Execution / Understanding / Connection
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {modelData.map((item, i) => (
          <div key={i} className="glass flex overflow-hidden border-white/20 bg-white/[0.04] rounded-2xl">
            <div className="w-24 md:w-32 bg-orange-500/20 flex items-center justify-center p-3 font-black text-orange-400 text-xs md:text-base text-center uppercase tracking-tighter border-r border-white/10 leading-tight">
              {item.category}
            </div>
            <div className="flex-1 divide-y divide-white/10">
              {item.sub.map((subItem, idx) => (
                <div key={idx} className="p-3 md:p-4 flex flex-col gap-1 group hover:bg-orange-500/5 transition-all">
                  <div className="font-black text-orange-100 text-sm md:text-lg">{subItem.name}</div>
                  <div className="text-gray-300 text-[11px] md:text-sm leading-snug font-medium">{subItem.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 text-[10px] md:text-xs text-orange-400 font-black tracking-[0.4em] uppercase">
        2025 Leadership Assessment Matrix
      </div>
    </div>
  );
};

export default Section7;

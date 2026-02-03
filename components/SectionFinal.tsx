
import React from 'react';
import { AbstractRing } from './Visuals';

const SectionFinal: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl text-center px-6">
      <AbstractRing color="rgba(255, 255, 255, 0.05)" />
      
      <div className="space-y-8">
        <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto shadow-[0_0_40px_#f58220] flex items-center justify-center animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black tracking-widest text-white">
          未来已来<br/>
          <span className="text-orange-500">向新而行</span>
        </h2>
        
        <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto"></div>
        
        <p className="text-gray-400 font-light tracking-[0.5em] text-sm md:text-lg">
          感谢每一位诺亚人的深度参与
        </p>

        <div className="pt-12 text-gray-600 text-[10px] font-mono tracking-widest uppercase">
          Noah Business Unit 2025 Annual Review
        </div>
      </div>
    </div>
  );
};

export default SectionFinal;

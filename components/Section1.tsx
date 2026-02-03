
import React from 'react';
import { AbstractRing } from './Visuals';

const Section1: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl text-center px-6">
      <AbstractRing />
      <div className="mb-4 text-orange-500 font-bold tracking-[0.5em] text-sm md:text-lg opacity-80 uppercase">
        NOAH GROUP 2025
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
        正行BU2025年度<br/><span className="text-orange-500">述职会</span>
      </h1>
      <div className="h-1 w-24 bg-orange-500 mx-auto rounded-full mb-8"></div>
      <p className="text-gray-400 text-sm md:text-base tracking-[0.2em] font-light">
        STRATEGY ALIGNMENT & PERFORMANCE REVIEW
      </p>
    </div>
  );
};

export default Section1;


import React, { useState, useEffect, useRef } from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import SectionFinal from './components/SectionFinal';

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const index = Math.round(containerRef.current.scrollTop / window.innerHeight);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  const sections = [
    <Section1 />,
    <Section2 />,
    <Section3 />,
    <Section4 />,
    <Section5 />,
    <Section6 />,
    <Section7 />,
    <SectionFinal />
  ];

  return (
    <div className="relative">
      {/* Navigation Indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {sections.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'bg-orange-500 scale-150 shadow-[0_0_10px_#f58220]' : 'bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Main Container */}
      <div ref={containerRef} className="scroll-container">
        {sections.map((component, index) => (
          <div key={index} className="section">
            <div className={`w-full h-full flex flex-col items-center justify-center transition-opacity duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
              {component}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Footer */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs font-mono tracking-widest pointer-events-none">
        PAGE {activeIndex + 1} / {sections.length}
      </div>
    </div>
  );
};

export default App;


import React from 'react';

export const AbstractRing: React.FC<{ color?: string }> = ({ color = "rgba(245, 130, 32, 0.2)" }) => (
  <div className="absolute animate-float" style={{ zIndex: -1 }}>
    <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
      <circle cx="300" cy="300" r="250" stroke={color} strokeWidth="80" strokeDasharray="10 20" />
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="20" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  </div>
);

export const TechCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`glass p-5 border border-white/10 shadow-2xl ${className}`}>
    {children}
  </div>
);

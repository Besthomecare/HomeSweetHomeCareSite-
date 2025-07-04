import React from 'react';

export function HomeSweetHomeLogo({ className, inverted = false }: { className?: string, inverted?: boolean }) {
  const logoColor = inverted ? "#FFFFFF" : "#006B54"; // Use white if inverted, otherwise use the accent color
  
  return (
    <svg 
      className={className} 
      viewBox="0 0 480 480" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heart Outline */}
      <path 
        d="M240 100C190 100 150 140 150 190C150 220 165 240 180 260L240 320L300 260C315 240 330 220 330 190C330 140 290 100 240 100Z" 
        stroke={logoColor} 
        strokeWidth="14" 
        fill="none"
      />
      
      {/* House */}
      <path 
        d="M240 140L190 185V250H215V220H265V250H290V185L240 140Z" 
        fill={logoColor}
      />
      
      {/* Windows */}
      <rect x="225" y="190" width="10" height="10" fill={logoColor}/>
      <rect x="245" y="190" width="10" height="10" fill={logoColor}/>
      
      {/* Supporting Hand */}
      <path 
        d="M310 240C295 270 270 290 240 290C215 290 190 275 175 260C165 250 155 235 155 220C155 215 160 210 165 210C170 210 175 215 175 220C175 235 200 260 240 260C270 260 285 245 295 230C300 225 310 230 310 240Z" 
        fill={logoColor}
      />
    </svg>
  );
}

export default HomeSweetHomeLogo;

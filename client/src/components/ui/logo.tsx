import { FC } from "react";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon";
  colorMode?: "light" | "dark";
}

const Logo: FC<LogoProps> = ({ 
  className = "", 
  variant = "full", 
  colorMode = "light" 
}) => {
  const logoColor = colorMode === "light" ? "#006B54" : "#FFFFFF";
  
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width={variant === "full" ? "220" : "60"} 
        height={variant === "full" ? "220" : "60"} 
        viewBox="0 0 480 480" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${variant === "full" ? "h-20 w-auto" : "h-14 w-auto"}`}
      >
        {/* Heart with House and Hand - Based on the official logo */}
        <g>
          {/* Heart Outline */}
          <path d="M240 100C190 100 150 140 150 190C150 220 165 240 180 260L240 320L300 260C315 240 330 220 330 190C330 140 290 100 240 100Z" 
            stroke={logoColor} strokeWidth="14" fill="none"/>
          
          {/* House */}
          <path d="M240 140L190 185V250H215V220H265V250H290V185L240 140Z" 
            fill={logoColor}/>
          
          {/* Windows */}
          <rect x="225" y="190" width="10" height="10" fill={logoColor}/>
          <rect x="245" y="190" width="10" height="10" fill={logoColor}/>
          
          {/* Supporting Hand */}
          <path d="M310 240C295 270 270 290 240 290C215 290 190 275 175 260C165 250 155 235 155 220C155 215 160 210 165 210C170 210 175 215 175 220C175 235 200 260 240 260C270 260 285 245 295 230C300 225 310 230 310 240Z" 
            fill={logoColor}/>
        </g>
        
        {variant === "full" && (
          <g>
            <text x="240" y="370" fontFamily="serif" fontSize="36" fontWeight="bold" fill={logoColor} textAnchor="middle">HOME SWEET</text>
            <text x="240" y="415" fontFamily="serif" fontSize="36" fontWeight="bold" fill={logoColor} textAnchor="middle">HOME</text>
            <text x="240" y="455" fontFamily="sans-serif" fontSize="24" fontWeight="normal" fill={logoColor} textAnchor="middle">CARE</text>
          </g>
        )}
      </svg>
      
      {variant === "full" && (
        <div className="ml-3 flex-shrink-0">
          <h1 className={`font-heading font-bold text-xl leading-tight ${colorMode === "light" ? "text-accent" : "text-white"}`}>HOME SWEET<br />HOME</h1>
          <p className={`text-sm font-medium tracking-wider ${colorMode === "light" ? "text-accent" : "text-white text-opacity-80"}`}>CARE</p>
        </div>
      )}
    </div>
  );
};

export default Logo;

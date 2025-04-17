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
  const primaryColor = colorMode === "light" ? "#8B4513" : "#FFFFFF";
  const accentColor = colorMode === "light" ? "#006B54" : "#E8DED1";

  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width={variant === "full" ? "200" : "40"} 
        height={variant === "full" ? "60" : "40"} 
        viewBox="0 0 240 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-auto"
      >
        <g>
          {/* Heart Shape */}
          <path d="M120 40 C120 40, 170 0, 220 40 C270 80, 220 140, 120 180 C20 140, -30 80, 20 40 C70 0, 120 40, 120 40Z" fill="none" stroke={accentColor} strokeWidth="12" />
          
          {/* House */}
          <path d="M160 80 L90 80 L90 140 L160 140 L160 80 Z" fill="none" stroke={accentColor} strokeWidth="8" />
          <path d="M125 40 L70 90 L180 90 L125 40 Z" fill="none" stroke={accentColor} strokeWidth="8" />
          <path d="M155 80 L155 60 L140 60 L140 70 Z" fill="none" stroke={accentColor} strokeWidth="6" />
          
          {/* Windows */}
          <rect x="105" y="100" width="15" height="15" fill="none" stroke={accentColor} strokeWidth="6" />
          <rect x="130" y="100" width="15" height="15" fill="none" stroke={accentColor} strokeWidth="6" />
          
          {/* Hand */}
          <path d="M60 140 C60 140, 70 100, 120 120 C160 135, 180 130, 180 150 C180 170, 160 180, 120 160 C80 140, 60 140, 60 140 Z" fill="none" stroke={accentColor} strokeWidth="10" />
        </g>
        
        {variant === "full" && (
          <g>
            <text x="120" y="210" fontFamily="EB Garamond, serif" fontSize="24" fontWeight="bold" fill={primaryColor} textAnchor="middle">HOME SWEET</text>
            <text x="120" y="240" fontFamily="EB Garamond, serif" fontSize="24" fontWeight="bold" fill={primaryColor} textAnchor="middle">HOME</text>
            <text x="120" y="270" fontFamily="Source Sans Pro, sans-serif" fontSize="18" fill={accentColor} textAnchor="middle">CARE</text>
          </g>
        )}
      </svg>
      
      {variant === "full" && (
        <div className="ml-2">
          <h1 className={`font-heading font-bold text-2xl ${colorMode === "light" ? "text-primary" : "text-white"}`}>HOME SWEET HOME</h1>
          <p className={`text-lg font-medium ${colorMode === "light" ? "text-accent" : "text-white text-opacity-80"}`}>CARE</p>
        </div>
      )}
    </div>
  );
};

export default Logo;

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
  // Define colors based on theme
  const primaryColor = colorMode === "light" ? "#006B54" : "#FFFFFF";
  const accentColor = colorMode === "light" ? "#8B4513" : "#E8DED1";
  
  return (
    <div className={`flex items-center ${className} ml-0 pl-0`}>
      <svg 
        width={variant === "full" ? "330" : "90"} 
        height={variant === "full" ? "330" : "90"} 
        viewBox="0 0 480 480" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${variant === "full" ? "h-36 w-auto" : "h-24 w-auto"} ml-0`}
      >
        {/* House Icon with Heart Shape */}
        <g>
          {/* Heart Outline with subtle gradient */}
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} stopOpacity="1" />
              <stop offset="100%" stopColor={accentColor} stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Heart Background */}
          <path d="M240 105C195 105 155 145 155 195C155 225 170 245 185 265L240 320L295 265C310 245 325 225 325 195C325 145 285 105 240 105Z" 
            fill="url(#heartGradient)" fillOpacity="0.1"/>
          
          {/* Heart Outline */}
          <path d="M240 100C190 100 150 140 150 190C150 220 165 240 180 260L240 320L300 260C315 240 330 220 330 190C330 140 290 100 240 100Z" 
            stroke={primaryColor} strokeWidth="14" fill="none"/>
          
          {/* House with shadow */}
          <path d="M240 140L190 185V250H215V220H265V250H290V185L240 140Z" 
            fill={primaryColor}/>
          <path d="M242 143L242 140L238 143L242 143Z" 
            fill={accentColor} fillOpacity="0.5"/>
          
          {/* Windows with subtle light effect */}
          <rect x="225" y="190" width="10" height="10" fill={primaryColor}/>
          <rect x="245" y="190" width="10" height="10" fill={primaryColor}/>
          <rect x="227" y="192" width="6" height="3" fill="#ffffff" fillOpacity="0.5"/>
          <rect x="247" y="192" width="6" height="3" fill="#ffffff" fillOpacity="0.5"/>
          
          {/* Supporting Hand with highlight */}
          <path d="M310 240C295 270 270 290 240 290C215 290 190 275 175 260C165 250 155 235 155 220C155 215 160 210 165 210C170 210 175 215 175 220C175 235 200 260 240 260C270 260 285 245 295 230C300 225 310 230 310 240Z" 
            fill={primaryColor}/>
          <path d="M295 235C290 245 280 255 260 255" 
            stroke="#ffffff" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round"/>
        </g>
        
        {variant === "full" && (
          <g>
            {/* Text Shadow for "HOME SWEET HOME" */}
            <text x="242" y="372" fontFamily="serif" fontSize="54" fontWeight="bold" fill={accentColor} fillOpacity="0.2" textAnchor="middle">HOME SWEET</text>
            <text x="242" y="427" fontFamily="serif" fontSize="54" fontWeight="bold" fill={accentColor} fillOpacity="0.2" textAnchor="middle">HOME</text>
            
            {/* Text for "HOME SWEET HOME" */}
            <text x="240" y="370" fontFamily="serif" fontSize="54" fontWeight="bold" fill={primaryColor} textAnchor="middle">HOME SWEET</text>
            <text x="240" y="425" fontFamily="serif" fontSize="54" fontWeight="bold" fill={primaryColor} textAnchor="middle">HOME</text>
            
            {/* Highlight for text */}
            <text x="240" y="368" fontFamily="serif" fontSize="54" fontWeight="bold" fill="#ffffff" fillOpacity="0.1" textAnchor="middle">HOME SWEET</text>
            <text x="240" y="423" fontFamily="serif" fontSize="54" fontWeight="bold" fill="#ffffff" fillOpacity="0.1" textAnchor="middle">HOME</text>
            
            {/* Text for "CARE" with bolder font and shadow */}
            <text x="242" y="477" fontFamily="sans-serif" fontSize="38" fontWeight="900" fill="#000000" fillOpacity="0.2" textAnchor="middle">CARE</text>
            <text x="240" y="475" fontFamily="sans-serif" fontSize="38" fontWeight="900" fill={accentColor} textAnchor="middle">CARE</text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default Logo;

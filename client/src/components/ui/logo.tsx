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
  const accentColor = colorMode === "light" ? "#006B54" : "#FFFFFF";
  
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width={variant === "full" ? "200" : "50"} 
        height={variant === "full" ? "200" : "50"} 
        viewBox="0 0 600 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${variant === "full" ? "h-16 w-auto" : "h-12 w-auto"}`}
      >
        {/* Heart Shape with House and Hand */}
        <g>
          {/* Heart Shape */}
          <path d="M300 140C225 140 165 200 165 275C165 290 167.5 304 172.5 316C175 324 180 333 186 340C192 347 202 344 207 337C210 331 211 326 211 320C211 265 250 220 300 220C350 220 389 265 389 320C389 326 388 332 385 338C380 345 388 352 395 347C401 342 406 334 408 327C413 309 435 290 435 275C435 200 375 140 300 140Z" fill={accentColor}/>
          
          {/* House */}
          <path d="M300 180L180 275V370C180 377 186 384 194 384H254V332C254 325 260 318 269 318H331C340 318 346 325 346 332V384H406C414 384 420 377 420 370V275L300 180Z" fill={accentColor}/>
          
          {/* Windows */}
          <path d="M291 292H309V275H291V292ZM267 292H285V275H267V292Z" fill={accentColor}/>
          
          {/* Hand */}
          <path d="M405 320C405 375 358 420 300 420C270 420 245 410 225 394C217 388 208 380 201 370C197 365 191 363 185 365C179 367 176 373 180 379C188 390 198 399 209 407C232 424 264 435 300 435C369 435 425 385 425 320H405Z" fill={accentColor}/>
        </g>
        
        {variant === "full" && (
          <g>
            <text x="300" y="500" fontFamily="serif" fontSize="48" fontWeight="bold" fill={accentColor} textAnchor="middle">HOME SWEET</text>
            <text x="300" y="550" fontFamily="serif" fontSize="48" fontWeight="bold" fill={accentColor} textAnchor="middle">HOME</text>
            <text x="300" y="590" fontFamily="sans-serif" fontSize="32" fontWeight="normal" fill={accentColor} textAnchor="middle">CARE</text>
          </g>
        )}
      </svg>
      
      {variant === "full" && (
        <div className="ml-4 flex-shrink-0">
          <h1 className={`font-heading font-bold text-xl leading-tight ${colorMode === "light" ? "text-accent" : "text-white"}`}>HOME SWEET<br />HOME</h1>
          <p className={`text-base font-medium tracking-wider ${colorMode === "light" ? "text-accent" : "text-white text-opacity-80"}`}>CARE</p>
        </div>
      )}
    </div>
  );
};

export default Logo;

import { FC } from "react";
import logoImage from "@assets/home sweet home care logo-Photoroom.png";

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
  return (
    <div className={`flex items-center ${className} ml-0 pl-0`}>
      <img 
        src={logoImage} 
        alt="Home Sweet Home Care Logo" 
        className={`${variant === "full" ? "h-36 w-auto" : "h-24 w-auto"} ml-0`}
      />
    </div>
  );
};

export default Logo;

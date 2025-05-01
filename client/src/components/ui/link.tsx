import React from "react";
import { Link as WouterLink } from "wouter";
import { scrollToTop } from "@/lib/utils";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Link: React.FC<LinkProps> = ({ href, children, className, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    }
    
    // Only scroll to top if navigating to a different page
    if (href.startsWith('/') && href !== window.location.pathname) {
      scrollToTop();
    }
  };

  return (
    <WouterLink href={href}>
      <a className={className} onClick={handleClick}>
        {children}
      </a>
    </WouterLink>
  );
};

export default Link;
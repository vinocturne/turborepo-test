"use client";

import type {ReactNode} from "react";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  onClick?: () => void;
}

export const Button = ({ children, className, appName, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      style={{ backgroundColor : 'gray'}}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

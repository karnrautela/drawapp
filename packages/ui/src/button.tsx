"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
 
}

export const Button1 = ({ children }: ButtonProps) => {
  return (
    <button
      className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      
    >
      {children}
    </button>

  );
};


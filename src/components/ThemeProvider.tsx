"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import * as React from "react";

export function ThemeProvider({ 
  children, 
  ...props 
}: Readonly<ThemeProviderProps>) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      {...props} // Itt adjuk át a layout.tsx-ből jövő paramétereket
    >
      {children}
    </NextThemesProvider>
  );
}
"use client";

import React, { useState, createContext } from "react";

export const themeContext = createContext();

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <themeContext.Provider value={{ mode, toggle }}>
      {children}
    </themeContext.Provider>
  );
}

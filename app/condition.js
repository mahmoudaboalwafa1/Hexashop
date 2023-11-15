"use client";

import { themeContext } from "@/app/context/themeContext";
import { useContext } from "react";

export default function Condition(one, two) {
  const { mode } = useContext(themeContext);
  const condition = mode === "dark" ? one : two;

  return condition;
}

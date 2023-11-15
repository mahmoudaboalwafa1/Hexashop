"use client";

import { useContext } from "react";
import { themeContext } from "../../context/themeContext";
import styleHeader from "./header.module.css";
import Condition from "@/app/condition";

export default function ToggleMode() {
  const { toggle } = useContext(themeContext);
  return (
    <div
      onClick={toggle}
      className={`${styleHeader.btn_switcher} ${Condition(
        styleHeader.btn_switcher_dark,
        styleHeader.btn_switcher_light
      )}`}
    ></div>
  );
}

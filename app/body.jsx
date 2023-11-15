"use client";

import React, { useContext } from "react";
import { themeContext } from "./context/themeContext";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export default function Body({ elements }) {
  const { mode } = useContext(themeContext);

  return (
    <>
      <body className={mode}>
        <Header mode={mode} />
        {elements} <Footer />
      </body>
    </>
  );
}

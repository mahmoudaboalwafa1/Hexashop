"use client";

import styleHome from "./home.module.css";
import Image from "next/image";
import hexaHero from "../public/hexashop.svg";
import Condition from "./condition";

export default function HomePage() {
  return (
    <div className={`container ${styleHome.container}`}>
      <div className={styleHome.content}>
        <h2 className={Condition(styleHome.title_dark, styleHome.title_light)}>
          your best online shop destination!
        </h2>

        <p
          className={Condition(
            styleHome.description_dark,
            styleHome.description_light
          )}
        >
          Discover a world of endless shopping possibilities at our store.
          browse, choose, and order your favorite products from the comfort of
          your home
        </p>
        <button className={styleHome.btn}>Shop Now</button>
      </div>
      <div className={styleHome.container_img}>
        <Image className={styleHome.img} src={hexaHero} alt="hexashop-hero" />
      </div>
    </div>
  );
}

"use client";

import { useState, useContext } from "react";
import styleProduct from "./product.module.css";
import { themeContext } from "@/app/context/themeContext";
import GetData from "@/app/api/dataProducts";
import Image from "next/image";
import Condition from "../../condition";

export default function projectPage({ params }) {
  const [products, setProducts] = useState([]);
  const { mode } = useContext(themeContext);
  const id = params.product;

  GetData().then((data) => setProducts(data));

  return (
    <div className={`container ${mode === "dark" ? "" : ""}`}>
      <h4 className={styleProduct.title}>{products[id]?.title}</h4>
      <ul className={styleProduct.list}>
        <p>rate: {products[id]?.rating?.rate}</p>
        <div className={styleProduct.containerImage}>
          <Image
            src={products[id]?.image}
            alt={products[id]?.title}
            width={100}
            height={200}
            className={styleProduct.img}
          />
          <div
            className={`${Condition(
              styleProduct.category_dark,
              styleProduct.category_light
            )} category`}
          >
            {products[id]?.category}
          </div>
        </div>
      </ul>
      <p className={styleProduct.description}>{products[id]?.description}</p>
    </div>
  );
}

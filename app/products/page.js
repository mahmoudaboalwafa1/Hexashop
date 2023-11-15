"use client";

import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import styleProducts from "./products.module.css";
import { themeContext } from "../context/themeContext";
import GetData from "../api/dataProducts";
import Condition from "../condition";

export default function ProjectsPage() {
  const { mode } = useContext(themeContext);
  const [products, setProducts] = useState([]);

  GetData().then((data) => setProducts(data));

  return (
    <div className={styleProducts.parent}>
      {products.length > 0 &&
        products.map((item) => (
          <Link
            href={`products/${item.id}`}
            className={`container`}
            key={item.id}
            draggable={true}
          >
            <div
              className={`${Condition(
                styleProducts.project_container_dark,
                styleProducts.project_container_light
              )}  ${styleProducts.project_container}`}
            >
              <div
                className={`${styleProducts.project_content}
                ${Condition(
                  styleProducts.project_content_dark,
                  styleProducts.project_content_light
                )}`}
              >
                <h3 className={styleProducts.title}>{item.title}</h3>
                <p className={styleProducts.text}>{item.description}</p>
              </div>
              <div className={styleProducts.container_img}>
                <Image
                  className={styleProducts.img}
                  src={item.image}
                  width={400}
                  height={110}
                  alt={item.title}
                />
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

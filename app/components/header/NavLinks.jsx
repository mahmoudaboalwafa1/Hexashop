"use clinet";

import Link from "next/link";
import styleHeader from "./header.module.css";
import Nav_Links from "./data";
import Condition from "@/app/condition";

export default function NavLinkHeader() {
  return Nav_Links.map((Navlink) => (
    <li
      className={`${Condition(
        styleHeader.nav_link_dark,
        styleHeader.nav_link_light
      )} ${Navlink.className && styleHeader.green} ${styleHeader.nav_link}`}
      key={Navlink.id}
    >
      <Link href={Navlink.title}>{Navlink.title}</Link>
    </li>
  ));
}

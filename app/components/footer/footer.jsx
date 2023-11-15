import Image from "next/image";
import styleFooter from "./footer.module.css";
import Link from "next/link";
import Social_Icons from "./data";

export default function Footer() {
  return (
    <footer className={`container ${styleFooter.footer_container}`}>
      <div>©2023 Hexashop. All rights reserved.</div>
      <ul className={styleFooter.social_container}>
        {Social_Icons.map((icon) => (
          <li>
            <Link href={icon.href}>
              <Image src={icon.icon} alt={icon.alt} width={20} height={20} />
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

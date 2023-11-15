import styleHeader from "./header.module.css";
import ToggleMode from "./toggleMode";
import NavLinkHeader from "./NavLinks";
import Link from "next/link";

export default function Header() {
  const GoHome = () => {};
  return (
    <header>
      <div className={`container ${styleHeader.nav_links}`}>
        <Link href="/">
          <h1 className={styleHeader.nav_title} onclick={GoHome}>
            hexashop
          </h1>
        </Link>

        <nav>
          <ul style={{ display: "flex" }}>
            <div className={styleHeader.toggle_mode}>
              <div className={styleHeader.moon}>🌚</div>
              <div className={styleHeader.sun}>🌛</div>
              <ToggleMode />
            </div>
            <NavLinkHeader />
          </ul>
        </nav>
      </div>
    </header>
  );
}

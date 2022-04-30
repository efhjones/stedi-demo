import StediLogo from "../StediLogo";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.nav}>
    <Link href="/" passHref>
      <a aria-label="home">
        <StediLogo />
      </a>
    </Link>
  </nav>
);

export default Nav;

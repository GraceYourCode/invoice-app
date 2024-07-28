import Logo from "../../../../assets/logo/logo.svg";
import styles from "./header.module.scss";
import { ToggleSwitch } from "../toggle-switch/toggle-switch";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.company_logo_container}>
        <img src={Logo} alt="logo icon" />
      </Link>

      <ToggleSwitch />

      <hr className={styles.divider} />

      <Link to={"/"}>
        <img
          className={styles.avatar}
          width={32}
          height={32}
          src="/img/avatar.jpg"
          alt="avatar"
        />
      </Link>
    </header>
  );
};

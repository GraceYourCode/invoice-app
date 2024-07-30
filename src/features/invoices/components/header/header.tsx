import styles from "./header.module.scss";
import { ToggleSwitch } from "../toggle-switch/toggle-switch";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="flex items-center gap-6 h-full">
        <Link to={"/"} className={styles.company_logo_container}>
          <img src="/assets/logo/logo.svg" alt="logo icon" />
        </Link>
        <p className="text-2xl sm:text-3xl font-bold">DigiBills</p>
      </div>

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

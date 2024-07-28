import ReactDOM from "react-dom";
import { useEffect } from "react";
import clsx from "clsx";
import { type DrawerProps } from "./drawer.types";
import styles from "./drawer.module.scss";
import { Backdrop } from "../backdrop/backdrop";

export const Drawer = (props: DrawerProps) => {
  const { open, children, onOutsideClick } = props;

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return ReactDOM.createPortal(
    <>
      <div className={clsx(styles.drawer, { [styles.drawer__open]: open })}>
        {children}
      </div>
      <Backdrop show={open} onClick={onOutsideClick} />
    </>,
    document.body
  );
};

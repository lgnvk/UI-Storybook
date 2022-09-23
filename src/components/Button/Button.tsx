import React, { FC } from "react";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import cn from "classnames/bind";
import styles from "./Button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  handleClick?: () => void;
  theme: "dark" | "light";
  buttonType: "outlined" | "filled";
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({
  handleClick,
  theme,
  buttonType,
  children,
}) => {
  const cx = cn.bind(styles);
  return (
    <button
      type="button"
      onClick={handleClick}
      className={cx("button", theme, buttonType)}>
      {children}
    </button>
  );
};

export default Button;

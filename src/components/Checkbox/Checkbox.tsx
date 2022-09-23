import React, { FC } from "react";
import cn from "classnames";
import "./Checkbox.scss";

type ICheckbox = {
  isChecked: boolean;
  theme: "dark" | "light";
};

const Checkbox: FC<ICheckbox> = ({ isChecked, theme }) => {
  const styles = cn("option", theme);
  return (
    <div className={styles}>
      <div className="option__checkbox">
        {isChecked ? (
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.7014 0.182908C18.0491 0.465493 18.1003 0.97456 17.8159 1.31994L7.32172 13.7037C7.16722 13.8912 6.93613 14 6.69215 14C6.44817 14 6.21708 13.8912 6.06258 13.7036L0.183895 6.5529C-0.100586 6.20752 -0.0493357 5.69845 0.298364 5.41587C0.646065 5.13328 1.15855 5.18419 1.44303 5.52957L6.69215 11.916L16.5567 0.296612C16.8412 -0.0487699 17.3537 -0.0996765 17.7014 0.182908Z"
              fill="#DEDEDE"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Checkbox;

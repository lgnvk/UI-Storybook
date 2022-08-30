import React, { FC } from "react";
import cn from "classnames";
import "./Label.scss";

type LabelType = {
  theme: "dark" | "light";
  children: string;
  withCross: boolean;
};

const Label: FC<LabelType> = ({ theme, children, withCross }) => {
  const styles = cn("label", theme);
  return (
    <div className={styles}>
      <div className="label__text">{children}</div>
      {withCross ? (
        <div className="label__cross">
          <svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.963679 0.66834C0.743224 0.443887 0.385796 0.443887 0.165341 0.66834C-0.0551138 0.892794 -0.0551138 1.2567 0.165341 1.48116L3.20166 4.57255L0.307854 7.51884C0.0873987 7.7433 0.0873991 8.10721 0.307854 8.33166C0.528309 8.55611 0.885737 8.55611 1.10619 8.33166L4 5.38537L6.89381 8.33166C7.11426 8.55611 7.47169 8.55611 7.69215 8.33166C7.9126 8.10721 7.9126 7.7433 7.69215 7.51884L4.79834 4.57255L7.83466 1.48116C8.05511 1.2567 8.05511 0.892794 7.83466 0.66834C7.6142 0.443887 7.25678 0.443887 7.03632 0.66834L4 3.75973L0.963679 0.66834Z"
              fill="#DEDEDE"
            />
          </svg>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Label;

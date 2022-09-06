import React, { FC, useState } from "react";
import cn from "classnames/bind";
import Checkbox from "../Checkbox";
import Label from "../Label";
import styles from "./Multiselect.scss";

type MultiselectType = {
  name: string;
  options: OptionType[];
  theme: "dark" | "light";
};

type OptionType = {
  name: string;
  id: number;
  checked: boolean;
};

const Multiselect: FC<MultiselectType> = ({ name, options, theme }) => {
  const [optionsmod, setOptions] = useState(options);
  const [active, setActive] = useState(false);

  const cx = cn.bind(styles);
  const activeToggler = () => {
    setActive(!active);
  };
  const checkToggler = (id: number, event: any) => {
    event.stopPropagation();
    const newOptions = [...optionsmod];
    newOptions[id - 1].checked = !newOptions[id - 1].checked;
    setOptions(newOptions);
  };
  return (
    <div className={cx("multiselect", theme)}>
      <div className={cx("multiselect__name")}>{name}</div>
      <div className="multiselect__wrapper">
        <button
          className={cx("multiselect__button")}
          onClick={() => activeToggler()}
        >
          {optionsmod.map((el) => (
            <div>
              {el.checked && (
                <div
                  className={cx("multiselect__label")}
                  onClick={(event) => checkToggler(el.id, event)}
                >
                  <Label theme={theme} withCross="true">
                    {el.name}
                  </Label>
                </div>
              )}
            </div>
          ))}
        </button>
        <div
          className={cx("multiselect__options", {
            multiselect__options_active: active,
          })}
        >
          {options.map((el) => (
            <div
              key={el.id}
              className={cx("multiselect__option")}
              onClick={(event) => checkToggler(el.id, event)}
            >
              <Checkbox
                theme={theme}
                isChecked={el.checked}
                className={cx("multiselect__option-checkbox")}
              />
              <div className={cx("multiselect__option-text")}>{el.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Multiselect;

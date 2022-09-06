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

const Multiselect: FC<MultiselectType> = ({ name, options }) => {
  const [optionsmod, setOptions] = useState(options);
  const [active, setActive] = useState(false);

  const cx = cn.bind(styles);
  const activeToggler = () => {
    setActive(!active);
  };
  const checkToggler = (id: number) => {
    const newOptions = [...optionsmod];
    newOptions[id - 1].checked = !newOptions[id - 1].checked;
    setOptions(newOptions);
  };
  return (
    <div className={cx("multiselect")}>
      <div className={cx("multiselect__name")}>{name}</div>
      <div className="multiselect__wrapper">
        <button
          className={cx("multiselect__button")}
          onClick={() => activeToggler()}
          value={1}>
          {optionsmod.map((el) => (
            <div>
              {el.checked && (
                <div
                  className={cx("multiselect__label")}
                  onClick={() => checkToggler(el.id)}>
                  <Label theme="dark" withCross="true">
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
          })}>
          {options.map((el) => (
            <div
              key={el.id}
              className={cx("multiselect__option")}
              onClick={() => checkToggler(el.id)}>
              <Checkbox
                theme="dark"
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

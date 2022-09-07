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
  const [optionsInput, setInputOptions] = useState<any[]>([]);
  const [active, setActive] = useState(false);
  const cx = cn.bind(styles);

  const activeToggler = () => {
    setActive(!active);
  };

  const checkToggler = (event: any, option: OptionType) => {
    event.stopPropagation();
    const newOptions = [...optionsmod];
    newOptions[option.id - 1].checked = !newOptions[option.id - 1].checked;
    setOptions(newOptions);

    let inputOptions = optionsInput;
    if (option.checked) {
      inputOptions.push(option);
    } else {
      inputOptions = inputOptions.filter((option) => option.checked);
    }
    setInputOptions(inputOptions);
  };

  return (
    <div className={cx("multiselect", theme)}>
      <div className={cx("multiselect__name")}>{name}</div>
      <div className="multiselect__wrapper">
        <button
          className={cx("multiselect__button")}
          onClick={() => activeToggler()}>
          {optionsInput[0] && (
            <div
              className={cx("multiselect__label")}
              onClick={(event) => checkToggler(event, optionsInput[0])}>
              <Label theme={theme} withCross="true">
                {optionsInput[0].name}
              </Label>
            </div>
          )}
          {optionsInput[1] && (
            <div
              className={cx("multiselect__label")}
              onClick={(event) => checkToggler(event, optionsInput[1])}>
              <Label theme={theme} withCross="true">
                {optionsInput[1].name}
              </Label>
            </div>
          )}
          {optionsInput.length > 2 && (
            <div className={cx("multiselect__dots")}>...</div>
          )}
        </button>

        <div
          className={cx("multiselect__options", {
            multiselect__options_active: active,
          })}>
          {options.map((option) => (
            <div
              key={option.id}
              className={cx("multiselect__option")}
              onClick={(event) => checkToggler(event, option)}>
              <Checkbox
                theme={theme}
                isChecked={option.checked}
                className={cx("multiselect__option-checkbox")}
              />
              <div className={cx("multiselect__option-text")}>
                {option.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Multiselect;

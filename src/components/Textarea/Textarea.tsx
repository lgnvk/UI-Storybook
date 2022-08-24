import React, { FC } from "react";
import "./Textarea.scss";
import cn from "classnames";

interface ITextarea {
  fieldValue: string;
  inputValue: string;
  theme: "dark" | "light" | undefined;
  error: boolean;
}

const Textarea: FC<ITextarea & HTMLTextAreaElement> = ({
  fieldValue,
  inputValue,
  theme,
  error,
  ...others
}) => {
  const textarea = cn("textarea", theme);
  const textareaInput = cn("textarea__input", {
    error: error,
  });
  return (
    <div className={textarea}>
      <div className="textarea__description">{fieldValue}</div>
      <textarea value={inputValue} className={textareaInput} />
      {error ? (
        <div className="textarea__error">
          <div className="textarea__icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 0C3.62667 0 0 3.62667 0 8C0 12.3733 3.62667 16 8 16C12.3733 16 16 12.3733 16 8C16 3.62667 12.3733 0 8 0ZM8 12.8C7.68 12.8 7.46667 12.5867 7.46667 12.2667C7.46667 11.9467 7.68 11.7333 8 11.7333C8.32 11.7333 8.53333 11.9467 8.53333 12.2667C8.53333 12.5867 8.32 12.8 8 12.8ZM8.53333 9.92C8.53333 10.24 8.32 10.56 8 10.56C7.68 10.56 7.46667 10.24 7.46667 9.92V3.84C7.46667 3.52 7.68 3.2 8 3.2C8.32 3.2 8.53333 3.52 8.53333 3.84V9.92Z"
                fill="#AE2917"
              />
            </svg>
          </div>
          <span className="textarea__message">This is an error message!</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Textarea;

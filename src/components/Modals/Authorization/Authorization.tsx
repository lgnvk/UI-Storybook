/* eslint-disable react/no-unescaped-entities */
import React, { FC } from "react";
import cn from "classnames/bind";
import Button from "../../Button";
import Input from "../../Input/Input";
import styles from "./Authorization.scss";

const Authorization: FC = () => {
  const cx = cn.bind(styles);
  return (
    <div className={cx("authorization")}>
      <div className="authorization__title">Welcome back</div>
      <div className="authorization__subtitle">
        If you don't have an account yet, please{" "}
        {/* <Link theme="dark" href="/registration">
          sigh up
        </Link> */}
      </div>
      <div className="form">
        <Input
          fieldValue="Email"
          theme="dark"
          error={false}
          inputValue="smth"
        />
        <Input
          fieldValue="Password"
          theme="dark"
          error={false}
          inputValue="smth"
        />
        <Button type="submit" theme="dark" buttonType="filled">
          LOG IN
        </Button>
      </div>
    </div>
  );
};

export default Authorization;

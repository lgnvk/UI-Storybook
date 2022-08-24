import React from "react";
import Input from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Dark: ComponentStory<typeof Input> = (args) => <Input {...args} />;

Dark.args = {
  inputValue: "",
  fieldValue: "Field value",
  theme: "dark",
};

export const Light: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

Light.args = {
  inputValue: "",
  fieldValue: "Field value",
  theme: "light",
};

export const Error: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

Error.args = {
  inputValue: "",
  fieldValue: "Field value",
  theme: "",
  error: true,
};

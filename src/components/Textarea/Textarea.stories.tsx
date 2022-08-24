import React from "react";
import Textarea from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

export const Dark: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

Dark.args = {
  fieldValue: "Description",
  inputValue: "",
  theme: "dark",
};

export const Light: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

Light.args = {
  inputValue: "",
  fieldValue: "Description",
  theme: "light",
};

export const Error: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

Error.args = {
  inputValue: "",
  fieldValue: "Description",
  theme: "",
  error: true,
};

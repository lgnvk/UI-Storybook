import React from "react";
import Search from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Search",
  component: Search,
} as ComponentMeta<typeof Search>;

export const Dark: ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
);

Dark.args = {
  value: "",
  theme: "dark",
  error: false,
  filled: false,
};

export const Light: ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
);

Light.args = {
  value: "",
  theme: "light",
  error: false,
  filled: false,
};

export const Filled: ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
);

Filled.args = {
  value:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consectetur maiores nobis quaerat nam temporibus sed qui eaque, minus eligendi iusto nihil natus eos fugit debitis possimus cum reprehenderit. Aspernatur.",
  theme: "dark",
  filled: true,
};

export const Error: ComponentStory<typeof Search> = (args) => (
  <Search {...args} />
);

Error.args = {
  value: "",
  theme: "dark",
  error: true,
};

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from ".";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

Default.args = {
  buttonType: "filled",
  theme: "dark",
  value: "Button",
};

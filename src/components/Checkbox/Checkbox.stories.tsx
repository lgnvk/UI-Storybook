import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Checkbox from ".";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

Default.args = {
  isChecked: false,
  theme: "dark",
};

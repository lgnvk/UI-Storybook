import React from "react";
import Label from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Label",
  component: Label,
} as ComponentMeta<typeof Label>;

export const Dark: ComponentStory<typeof Label> = (args) => <Label {...args} />;

Dark.args = {
  theme: "dark",
  children: "Romantism",
  withCross: false,
};

export const Light: ComponentStory<typeof Label> = (args) => (
  <Label {...args} />
);

Light.args = {
  theme: "light",
  children: "Romantism",
  withCross: false,
};

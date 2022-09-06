import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Multiselect from ".";

export default {
  title: "Multiselect",
  component: Multiselect,
} as ComponentMeta<typeof Multiselect>;

export const Default: ComponentStory<typeof Multiselect> = (args) => (
  <Multiselect {...args} />
);

Default.args = {
  name: "Field name",
  options: [
    { name: "Romantism", id: 1, checked: false },
    { name: "Art", id: 2, checked: false },
    { name: "Nature", id: 3, checked: false },
    { name: "Bataille", id: 4, checked: false },
    { name: "Realism", id: 5, checked: false },
  ],
};

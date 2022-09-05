import React from "react";
import Pagination from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Default: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

Default.args = {
  pages: [1, 2, 3],
  theme: "dark",
};

export const withDots: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

withDots.args = {
  pages: [1, 2, 3, 4, 5, 6, 7],
  theme: "dark",
};

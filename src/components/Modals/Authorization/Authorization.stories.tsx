import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Authorization from './Authorization';

export default {
  title: 'Authorization',
  component: Authorization,
} as ComponentMeta<typeof Authorization>;

export const Default: ComponentStory<typeof Authorization> = () => (
  <Authorization />
);

import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import '../style.css'

import { Carousel } from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
};

const Template: Story<React.ComponentProps<typeof Carousel>> = (args) => (
  <Carousel {...args} />
);

export const Default = Template.bind({});
Default.args = {
};
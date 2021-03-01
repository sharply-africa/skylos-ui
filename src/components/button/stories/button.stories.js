import React from "react";
import { Button } from "../button";

export default {
  title: "Components/Base/Button",
  argTypes: {
    colorScheme: {
      control: "color",
    },
    color: {
      control: "color",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Solid = Template.bind({});

Solid.args = {
  children: "Submit",
  defaultRightIcon: false,
  isLoading: false,
};

export const Outline = Template.bind({});

Outline.args = {
  children: "Submit",
  colorScheme: "primary",
  isLoading: false,
  defaultRightIcon: false,
  variant: "outline",
};

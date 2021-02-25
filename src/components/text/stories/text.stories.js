import React from "react";
import { Text as TextComponent } from "../text";

export default {
  title: "Components/Base/Text",
  component: TextComponent,
  argTypes: {
    color: {
      control: "color",
    },
  },
};

export const Text = (args) => <TextComponent {...args} />;

Text.args = {
  children: "Hello world",
};

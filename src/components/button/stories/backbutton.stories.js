import React from "react";
import { BackButton as BackButtonComponent } from "../back-button";

export default {
  title: "Components/Base/Button/BackButton",
  component: BackButtonComponent,
  argTypes: {
    colorScheme: {
      control: "color",
    },
    color: {
      control: "color",
    },
  },
};

export const BackButton = (args) => <BackButtonComponent {...args} />;

BackButton.args = {
  children: "Hello world",
};

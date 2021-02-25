import React from "react";
import { Spinner as SpinnerComponent } from "../spinner";

export default {
  title: "Components/Base/Spinner",
  component: SpinnerComponent,
  argTypes: {
    color: {
      control: "color",
    },
  },
};

export const Spinner = (args) => <SpinnerComponent {...args} />;

Spinner.args = {};

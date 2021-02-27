import React from "react";
import { Checkbox as CheckboxComponent } from "../checkbox";

export default {
  title: "Components/Form/Checkbox",
  component: CheckboxComponent,
};

export const Checkbox = (args) => <CheckboxComponent {...args} />;

Checkbox.args = {
  active: false,
  title: "Label",
  subtitle: "Lorem ipsum dolor sit amet",
};

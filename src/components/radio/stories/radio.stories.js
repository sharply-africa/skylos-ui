import React from "react";
import { Radio as RadioComponent } from "../radio";

export default {
  title: "Components/Form/Radio",
  component: RadioComponent,
};

export const Radio = (args) => <RadioComponent {...args} />;

Radio.args = {
  active: false,
  isLoading: false,
  subtitle: "Lorem ipsum dolor sit amet",
  title: "Label",
};

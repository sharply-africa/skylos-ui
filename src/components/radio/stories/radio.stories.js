import React from "react";
import { Radio as RadioComponent } from "../radio";

export default {
  title: "Components/Form/Radio",
  component: RadioComponent,
};

export const Radio = (args) => <RadioComponent {...args} />;

Radio.args = {
  active: false,
  title: "Label",
  subtitle: "Lorem ipsum dolor sit amet",
};

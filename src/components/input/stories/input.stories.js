import React from "react";
import { Input as InputComponent } from "../input";

export default {
  title: "Components/Form/Input",
};

const Template = (args) => (
  <InputComponent placeholder="Enter something" {...args} />
);

export const Input = Template.bind({});

Input.args = {
  type: "text",
};

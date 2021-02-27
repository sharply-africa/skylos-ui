import React from "react";
import { Input as InputComponent } from "../input";

export default {
  title: "Components/Form/Input",
  component: InputComponent,
};

export const Input = (args) => (
  <InputComponent placeholder="Enter something" {...args} />
);

Input.args = {
  value: "Hello world",
};

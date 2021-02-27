import React from "react";
import { Select as SelectComponent } from "../select";

export default {
  title: "Components/Form/Select",
  component: SelectComponent,
};

export const Select = (args) => (
  <SelectComponent placeholder="Enter something" {...args}>
    {new Array(10).fill(1).map((x, i) => (
      <option>{i + 1}</option>
    ))}
  </SelectComponent>
);

Select.args = {
  isLoading: false,
  value: "Hello world",
};

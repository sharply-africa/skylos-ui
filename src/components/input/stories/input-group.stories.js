import React from "react";
import { InputGroup as InputGroupComponent } from "../input-group";
import { InputAddon } from "../input-addon";
import { Input } from "../input";

export default {
  title: "Components/Form/InputGroup",
  component: InputGroupComponent,
};

export const InputGroup = (args) => (
  <InputGroupComponent>
    <Input />

    <InputAddon>
      <p>Addon</p>
    </InputAddon>
  </InputGroupComponent>
);

InputGroup.args = {
  value: "Hello world",
};

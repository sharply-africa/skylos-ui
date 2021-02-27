import React from "react";
import { Input } from "components/input";
import { Label } from "components/label";
import { FormGroup } from "../formgroup";
import { FormError } from "src/components/formerror";

export default {
  title: "Components/Form/Group",
  component: FormGroup,
};

export const Group = (args) => (
  <FormGroup {...args}>
    <Label>Name</Label>

    <Input placeholder="John Doe" />

    <FormError error={args.error} />
  </FormGroup>
);

Group.args = {
  error: "",
};

import React from "react";
import { FormError } from "../formerror";

export default {
  title: "Components/Form/Error",
  component: FormError,
};

export const Error = (args) => <FormError {...args} />;

Error.args = {
  error: "Error Text",
};

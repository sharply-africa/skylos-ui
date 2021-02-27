import React, { forwardRef } from "react";
import { Stack } from "../stack";

export const FormGroup = forwardRef((props, ref) => (
  <Stack ref={ref} spacing={1} {...props} />
));

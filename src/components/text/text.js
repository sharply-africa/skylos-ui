import React, { forwardRef } from "react";
import { Box } from "system";

export const Text = forwardRef((props, ref) => (
  <Box ref={ref} tx="text" as="p" variant="text" {...props} />
));

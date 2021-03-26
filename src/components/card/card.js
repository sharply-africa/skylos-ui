import React, { forwardRef } from "react";
import { Box } from "system";

export const Card = forwardRef((props, ref) => {
  return <Box ref={ref} {...props} variant="card" />;
});

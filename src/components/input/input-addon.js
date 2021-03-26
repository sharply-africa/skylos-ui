import React, { forwardRef } from "react";
import { Box } from "system";

export const InputAddon = forwardRef((props, ref) => (
  <Box
    ref={ref}
    tx="form"
    {...props}
    __css={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      px: 4,
      py: 1,
    }}
  />
));

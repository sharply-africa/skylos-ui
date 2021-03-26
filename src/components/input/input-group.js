import React, { forwardRef } from "react";
import { Box } from "system";

export const InputGroup = forwardRef((props, ref) => (
  <Box
    ref={ref}
    tx="form"
    {...props}
    __css={{
      backgroundColor: "white",
      border: "1px solid",
      borderColor: "#E7ECE8",
      borderRadius: "base",
      display: "flex",
      width: "100%",
      input: {
        border: "none",
      },
      "&:focus-within": {
        borderColor: "primary",
      },
    }}
  />
));

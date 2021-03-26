import React, { forwardRef } from "react";
import { Box } from "system";

export const Input = forwardRef((props, ref) => (
  <Box
    as="input"
    ref={ref}
    tx="form"
    {...props}
    __css={{
      appearance: "none",
      backgroundColor: "white",
      border: "1px solid",
      borderColor: "#E7ECE8",
      borderRadius: "base",
      color: "heading",
      fontFamily: "body",
      fontSize: ["sm"],
      fontWeight: "normal",
      lineHeight: "default",
      outline: "none",
      px: 4,
      py: 3,
      width: "100%",
      "&:focus": {
        borderColor: "primary",
      },
      "&:placholder": {
        color: "#C4C4C4",
      },
    }}
  />
));

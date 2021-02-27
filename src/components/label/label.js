import React, { forwardRef } from "react";
import { Box } from "system";

export const Label = forwardRef((props, ref) => (
  <Box
    as="label"
    ref={ref}
    tx="form"
    {...props}
    __css={{
      color: "text",
      display: "inline-block",
      fontFamily: "body",
      fontSize: ["xs"],
      fontWeight: "normal",
      lineHeight: "default",
    }}
  />
));

import React, { forwardRef } from "react";
import { ReactComponent as X } from "icons/x.svg";
import { Button } from "./button";

export const CloseButton = forwardRef((props, ref) => {
  return (
    <Button ref={ref} variant="iconSquare" {...props}>
      <X />
    </Button>
  );
});

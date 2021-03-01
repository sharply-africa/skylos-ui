import React, { forwardRef } from "react";
import { ReactComponent as ArrowLeft } from "icons/arrow-left.svg";
import { Button } from "./button";

export const BackButton = forwardRef((props, ref) => {
  return (
    <Button ref={ref} variant="iconSquare" {...props}>
      <ArrowLeft />
    </Button>
  );
});

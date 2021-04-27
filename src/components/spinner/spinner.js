import React, { forwardRef } from "react";
import { keyframes } from "@emotion/react";
import { Box } from "system";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const Spinner = forwardRef((props, ref) => {
  const {
    color,
    emptyColor = "transparent",
    size = "2.5rem",
    speed = "0.45s",
    styles,
    thickness = "2px",
    ...rest
  } = props;

  const spinnerStyles = {
    animation: `${spin} ${speed} linear infinite`,
    borderBottomColor: emptyColor,
    borderColor: "currentColor",
    borderLeftColor: emptyColor,
    borderRadius: "full",
    borderStyle: "solid",
    borderWidth: thickness,
    color,
    display: "inline-block",
    height: size,
    width: size,
    ...styles,
  };

  return <Box ref={ref} __css={spinnerStyles} {...rest}></Box>;
});
